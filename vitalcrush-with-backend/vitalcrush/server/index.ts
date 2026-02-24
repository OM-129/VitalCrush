import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Allow CORS for dev
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'vitalcrush';

let db: any;

async function connectDB() {
  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  db = client.db(DB_NAME);
  console.log(`✅ Connected to MongoDB: ${DB_NAME}`);
}

// POST /api/enquiry — Save enquiry form submission
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    const enquiry = {
      name,
      email,
      company: company || '',
      message,
      createdAt: new Date(),
      status: 'new', // can be: new | read | replied
    };

    const result = await db.collection('enquiries').insertOne(enquiry);

    return res.status(201).json({ success: true, id: result.insertedId });
  } catch (err: any) {
    console.error('Error saving enquiry:', err);
    return res.status(500).json({ success: false, error: 'Internal server error.' });
  }
});

// GET /api/enquiries — View all enquiries (admin use)
app.get('/api/enquiries', async (req, res) => {
  try {
    const enquiries = await db
      .collection('enquiries')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    return res.json({ success: true, data: enquiries });
  } catch (err: any) {
    console.error('Error fetching enquiries:', err);
    return res.status(500).json({ success: false, error: 'Internal server error.' });
  }
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Backend server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
