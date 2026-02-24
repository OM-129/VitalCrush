import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Let's grow <span className="italic text-brand-accent">together</span>.
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Have questions about our products or need a bulk quotation? Our team is here to help you find the perfect solution for your business.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-brand-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1">Our Location</h4>
                <p className="text-stone-600">Plot No. 45, Agri Export Zone, APMC Market-II, Vashi, Navi Mumbai - 400703, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-brand-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1">Call Us</h4>
                <p className="text-stone-600">+91 22 2789 1234<br />+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-brand-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1">Email Us</h4>
                <p className="text-stone-600">sales@vegpure.com<br />info@vegpure.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-stone-200 border border-stone-100"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <h3 className="text-2xl font-serif font-bold">Message Sent!</h3>
              <p className="text-stone-600">Thank you for reaching out. Our team will get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-8 py-3 rounded-xl border border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-stone-50 border-b border-stone-200 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-stone-50 border-b border-stone-200 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Message *</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20 disabled:opacity-60 disabled:scale-100"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold"
          >
            Rooted in <span className="italic text-brand-accent">Purity</span>.
          </motion.h1>
          <p className="text-xl text-brand-secondary/70 max-w-3xl mx-auto leading-relaxed">
            Founded in 2010, VitalCrush has grown from a small local processor to a global leader in Jain-friendly Ayurvedic and fruit powder solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Journey</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
            <p>
              At VitalCrush, we believe that the best ingredients come directly from nature, processed with ethical integrity. Our journey started with a simple mission: to preserve the nutritional value of nature's bounty while adhering to strict Jain dietary principles.
            </p>
            <p>
              Today, we operate a state-of-the-art facility in Navi Mumbai, where we process over 500 tons of fresh fruits and Ayurvedic herbs monthly. Our dehydration process uses low-temperature air drying to ensure that the color, flavor, and bio-active compounds are locked in.
            </p>
            <p>
              We work closely with over 2,000 farmers across India, ensuring fair trade practices and the highest quality of raw materials, completely free from root vegetables and prohibited ingredients.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/factory/800/1000"
              alt="Our Facility"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 bg-brand-accent p-12 rounded-[2rem] text-white hidden md:block">
            <span className="text-6xl font-serif font-bold block">15+</span>
            <span className="text-sm uppercase tracking-widest font-bold">Years of Excellence</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Countries Exported', value: '25+' },
              { label: 'Products Range', value: '50+' },
              { label: 'Happy Clients', value: '1000+' },
              { label: 'Farmers Network', value: '2000+' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <span className="text-5xl font-serif font-bold text-brand-primary">{stat.value}</span>
                <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
