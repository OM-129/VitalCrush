import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Utensils, Info } from 'lucide-react';
import { PRODUCTS } from '../constants';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-serif">Product not found</h2>
        <Link to="/products" className="text-brand-primary flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <Link to="/products" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-primary mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to all products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden border border-stone-200 shadow-xl">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-stone-200 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                <img 
                  src={`https://picsum.photos/seed/${product.id}-${i}/400/400`} 
                  alt={`${product.name} alternate view ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs">{product.category}</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900">{product.name}</h1>
            {product.scientificName && (
              <p className="text-stone-400 italic font-serif text-xl">({product.scientificName})</p>
            )}
          </div>

          <div className="prose prose-stone">
            <p className="text-lg text-stone-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-brand-primary">
                <Info className="w-6 h-6" />
                <h3 className="text-xl font-serif font-bold">Health Benefits</h3>
              </div>
              <ul className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-brand-primary">
                <Utensils className="w-6 h-6" />
                <h3 className="text-xl font-serif font-bold">Common Usages</h3>
              </div>
              <ul className="space-y-3">
                {product.usages.map((usage, i) => (
                  <li key={i} className="flex gap-3 text-stone-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                    <span>{usage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-stone-200">
            <Link 
              to="/contact" 
              className="w-full md:w-auto inline-block text-center bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
            >
              Inquire for Bulk Orders
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      <section className="mt-32 pt-24 border-t border-stone-200">
        <h2 className="text-3xl font-serif font-bold mb-12">You may also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-square rounded-3xl overflow-hidden mb-4 border border-stone-200">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-serif font-bold text-lg group-hover:text-brand-primary transition-colors">{p.name}</h4>
              <p className="text-stone-500 text-sm">{p.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Product Range</h1>
        <p className="text-stone-600">Premium dehydrated vegetable powders processed using state-of-the-art technology to ensure maximum nutrient retention.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PRODUCTS.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link to={`/product/${product.id}`}>
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm border border-stone-200 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                      <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">{product.category}</span>
                      <h3 className="text-xl font-serif font-bold text-stone-900">{product.name}</h3>
                   </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
