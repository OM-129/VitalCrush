import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=1920',
    title: 'Purest Ayurvedic <span class="italic text-brand-accent">Essence</span>',
    subtitle: 'NATURE\'S HEALING POWER',
    description: 'Experience the ancient wisdom of Ayurveda with our 100% pure, organic powders processed to preserve every vital nutrient.'
  },
  {
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1920',
    title: 'Vibrant Fruit <span class="italic text-brand-accent">Nutrition</span>',
    subtitle: 'CONCENTRATED VITALITY',
    description: 'From Dragon Fruit to Amla, our fruit powders bring the full spectrum of vitamins and antioxidants to your daily routine.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1920',
    title: 'Ethically Sourced <span class="italic text-brand-accent">Purity</span>',
    subtitle: 'ETHICAL & CLEAN',
    description: 'We strictly follow global quality standards, ensuring no artificial additives or prohibited ingredients are used in our premium range.'
  }
];

const CERTIFICATES = [
  'https://picsum.photos/seed/cert1/400/600',
  'https://picsum.photos/seed/cert2/400/600',
  'https://picsum.photos/seed/cert3/400/600',
  'https://picsum.photos/seed/cert4/400/600',
  'https://picsum.photos/seed/cert5/400/600',
  'https://picsum.photos/seed/cert6/400/600',
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [certIndex, setCertIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const nextCert = () => setCertIndex((prev) => (prev + 1) % (CERTIFICATES.length - 2));
  const prevCert = () => setCertIndex((prev) => (prev - 1 + (CERTIFICATES.length - 2)) % (CERTIFICATES.length - 2));

  return (
    <div className="space-y-24 pb-24 relative">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Hero Slider Section */}
      <section className="relative h-[90vh] overflow-hidden bg-stone-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              src={SLIDES[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="uppercase tracking-[0.4em] text-sm font-bold text-brand-accent mb-6 block">
                  {SLIDES[currentSlide].subtitle}
                </span>
                <h1 
                  className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8 text-white"
                  dangerouslySetInnerHTML={{ __html: SLIDES[currentSlide].title }}
                />
                <p className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed max-w-2xl">
                  {SLIDES[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products" className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent transition-all shadow-xl shadow-black/20">
                    Explore Range <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                    Our Philosophy
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 right-12 z-30 flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-12 z-30 flex gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === i ? 'w-12 bg-brand-accent' : 'w-4 bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: ShieldCheck, title: 'Ethical Sourcing', desc: 'Sourced from sustainable farms. 100% compliant with global quality and safety standards.' },
            { icon: Zap, title: 'Bio-Active Purity', desc: 'Advanced cold-processing preserves 98% of natural bio-active compounds.' },
            { icon: CheckCircle2, title: 'Zero Additives', desc: 'No added sugar, colors, or preservatives. Just pure nature in a bottle.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-8 rounded-[2rem] bg-brand-muted/30 hover:bg-brand-muted transition-colors"
            >
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Building Trust Section */}
      <section className="bg-[#0A1A0A] pt-24 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Trusted Identity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-16">
            <span className="text-brand-accent">Building Trust</span> Through Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { 
                icon: <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(136,176,75,0.3)]"><ShieldCheck className="w-10 h-10 text-black" /></div>,
                title: 'Year Of Experience', 
                desc: 'A growing company with <span class="font-bold text-white">4 years of industry experience</span>, driven by a global vision and fresh expertise in the <span class="font-bold text-white">export of premium dehydrated and herbal products</span>.' 
              },
              { 
                icon: <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(136,176,75,0.3)]"><svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>,
                title: 'Owner Ship', 
                desc: '<span class="font-bold text-white">VitalCrush</span>, led by Proprietor <span class="font-bold text-white">Mr. Rajesh Kumar</span>, is built on a strong foundation of trust, reliability, and unwavering commitment to quality.' 
              },
              { 
                icon: <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(136,176,75,0.3)]"><Zap className="w-10 h-10 text-black" /></div>,
                title: 'Nature Of Business', 
                desc: 'We are a leading <span class="font-bold text-white">manufacturer and exporter</span> of premium <span class="font-bold text-white">dehydrated fruits, vegetables, herbs, and herbal powders</span>, delivering high-quality products to clients around the globe.' 
              },
              { 
                icon: <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(136,176,75,0.3)]"><CheckCircle2 className="w-10 h-10 text-black" /></div>,
                title: 'GST Listed', 
                desc: 'Registered under <span class="font-bold text-white">GST with number 24CBWPP4117J2Z6</span>, ensuring compliance, transparency, and trust in all domestic and international business transactions.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center hover:bg-white/10 transition-all hover:-translate-y-2"
              >
                {item.icon}
                <h4 className="text-white font-serif font-bold text-xl mb-6">{item.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grass Pattern at Bottom */}
        <div className="w-full h-32 bg-repeat-x bg-bottom opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 100 L10 70 L20 100 L30 60 L40 100 L50 80 L60 100 L70 50 L80 100 L90 75 L100 100 Z\' fill=\'%2388B04B\'/%3E%3C/svg%3E")' }}></div>
      </section>

      {/* Certificates Section */}
      <section className="bg-brand-secondary py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-stone-200 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span className="text-stone-600 text-xs font-bold uppercase tracking-widest">Our Certificates</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
            <span className="text-brand-accent">Certified</span> for Purity and Excellence
          </h2>
          <p className="text-stone-500 mb-16">Click Certificate to Know More</p>

          <div className="relative">
            <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${certIndex * 33.33}%)` }}>
              {CERTIFICATES.map((cert, i) => (
                <div key={i} className="min-w-[30%] aspect-[3/4] bg-white rounded-2xl shadow-xl border-8 border-stone-800 overflow-hidden group cursor-pointer">
                  <img src={cert} alt={`Certificate ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button onClick={prevCert} className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextCert} className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-stone-50 py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Our Collection</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Trending <span className="italic text-brand-accent">Superfoods</span></h2>
              <p className="text-stone-600 max-w-xl">Discover our most potent Ayurvedic and fruit powders, trusted by wellness experts globally. 100% pure and natural.</p>
            </div>
            <Link to="/products" className="bg-white border border-stone-200 px-8 py-3 rounded-full font-bold text-brand-primary flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-all">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 8).map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-stone-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-primary shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif font-bold group-hover:text-brand-primary transition-colors">{product.name}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{product.description}</p>
                  <Link 
                    to={`/product/${product.id}`}
                    className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs hover:gap-3 transition-all"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm">Join the Movement</span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight">Elevate your health with <span className="italic">VitalCrush</span></h2>
            <p className="text-lg md:text-xl text-brand-secondary/80 leading-relaxed">
              We provide bulk and customized packaging solutions for food manufacturers, wellness brands, and retail partners worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/contact" className="bg-brand-accent text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-black/20">
                Get Bulk Quote
              </Link>
              <Link to="/products" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

