import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Menu, X, ChevronRight, Briefcase, 
  CheckCircle2, Globe, Lightbulb, ShieldCheck, 
  Users, BarChart, Mail, Phone, HeartHandshake, CarFront, Store, Truck, Camera, Tent, Utensils, Bed
} from 'lucide-react';
import CategoryDetail from './pages/CategoryDetail';

const LogoMark = ({ isScrolled, size = 'md' }: { isScrolled?: boolean, size?: 'md' | 'lg' }) => {
  const sizeClass = size === 'lg' ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12 sm:w-14 sm:h-14';

  return (
    <div className={`relative flex items-center justify-center ${sizeClass} transition-transform duration-500 hover:scale-105 flex-shrink-0`}>
      <img src="/icon.svg" alt="Senapati Connect Logo" className="w-full h-full object-contain drop-shadow-sm" />
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Directory', href: '/#directory' },
    { name: 'Mission', href: '/#mission' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 py-4 shadow-sm' : 'bg-transparent border-b border-transparent py-6 lg:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group cursor-pointer">
          <LogoMark size={isScrolled ? 'md' : 'lg'} />
          <span className={`font-serif tracking-wide hidden sm:block text-lg font-bold transition-colors text-stone-900 group-hover:text-emerald-700`}>
            Senapati Connect
          </span>
          <span className={`font-serif tracking-wide sm:hidden text-base font-bold transition-colors text-stone-900 group-hover:text-emerald-700`}>
            SC
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 bg-stone-50 border border-stone-200 backdrop-blur-md shadow-sm px-8 py-3 rounded-full">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-[11px] uppercase tracking-widest font-bold transition-colors text-stone-600 hover:text-emerald-600`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a href="/#contact" className="px-6 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold transition-colors shadow-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/25">
            Get in Touch
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-stone-900 hover:text-emerald-600 transition-colors">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-emerald-100 shadow-xl py-4 flex flex-col md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-bold text-stone-600 hover:text-emerald-600 p-4 border-b border-stone-50"
              >
                {link.name}
              </a>
            ))}
            <div className="p-4">
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-emerald-600 text-white rounded-xl px-6 py-4 text-xs tracking-widest text-center uppercase font-bold shadow-lg shadow-emerald-500/25">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="h-full overflow-hidden relative flex items-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 text-white border-b-8 border-emerald-900/20">
      
      {/* Bright abstract shapes */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-bl from-lime-400/30 to-transparent skew-x-12 translate-x-32 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-emerald-500/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest mb-8 font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              Local Service Directory
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
              Discover <span className="text-lime-300 italic">Senapati's</span> Brightest
            </h1>
            <div className="text-lg text-emerald-50 font-light leading-relaxed max-w-xl mb-10 space-y-4">
              <p className="text-xl font-medium text-white drop-shadow-sm">
                Your community marketplace to discover trusted local vendors, services, and entrepreneurs.
              </p>
              <p className="opacity-90">
                This platform connects people with local entrepreneurs, making it easier to find and access essential services in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#directory" className="bg-white text-emerald-600 hover:bg-stone-50 rounded-full px-6 py-3.5 sm:px-8 sm:py-4 w-full sm:w-auto text-xs uppercase tracking-widest font-bold transition-colors shadow-lg flex justify-center items-center gap-3">
                Browse Directory <ArrowRight size={16} className="text-emerald-500" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block h-[600px] w-full max-w-md ml-auto">
             <div className="w-full h-full rounded-3xl overflow-hidden relative group shadow-2xl shadow-emerald-900/40 border-[4px] border-white/20 bg-white/10 backdrop-blur-sm p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-900/20 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0 mix-blend-multiply"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=900" 
                    alt="Fresh produce market" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-emerald-950/90 to-transparent z-10 pointer-events-none rounded-b-2xl"></div>
                </div>
                
                <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <h3 className="font-serif text-3xl text-white mb-2 drop-shadow-md">Local Commerce</h3>
                  <p className="text-emerald-100 text-sm font-medium leading-relaxed drop-shadow">Empowering communities by connecting local entrepreneurs with people who need their services.</p>
                </div>
             </div>
             
             {/* Decorative backing shape */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-lime-400 rounded-full blur-2xl opacity-60 -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const Mission = () => {
  return (
    <section id="mission" className="h-full flex items-center py-20 bg-stone-50/50 relative border-b border-emerald-100 shrink-0 w-full overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-emerald-100/50 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest w-max mb-2">Our Mission</div>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 leading-tight">
              Community <span className="text-emerald-600 italic">Connected</span>, Trust Restored.
            </h2>
            <div className="bg-white/50 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-sm italic text-stone-600 font-light leading-relaxed">
              "We believe in the power of local connection. Our mission is to bridge the gap between people and the trusted experts who serve our community every day."
            </div>
            <ul className="space-y-4 mt-2">
              {[
                "Reliability built on verified local expertise.",
                "Handpicked network of professional service providers.",
                "Seamless communication connecting you directly."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-emerald-500" size={18} strokeWidth={2.5} /></div>
                  <span className="text-stone-700 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 sm:p-8 aspect-[4/5] sm:aspect-square flex flex-col justify-end relative overflow-hidden group shadow-xl shadow-emerald-500/20 border-4 border-white">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Verified Partner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent z-10"></div>
              <div className="relative z-20">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 border border-white/30">
                  <ShieldCheck size={20} className="text-white" strokeWidth={2} />
                </div>
                <p className="font-serif text-xl sm:text-2xl text-white mb-0.5 tracking-wide leading-tight">Verified</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-emerald-100 font-bold">Local Partners</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl p-6 sm:p-8 aspect-[4/5] sm:aspect-square flex flex-col justify-end mt-12 relative overflow-hidden group shadow-xl shadow-cyan-500/20 border-4 border-white">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" alt="Direct Connection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent z-10"></div>
              <div className="relative z-20">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 border border-white/30">
                  <HeartHandshake size={20} className="text-white" strokeWidth={2} />
                </div>
                <p className="font-serif text-xl sm:text-2xl text-white tracking-wide mb-0.5 leading-tight">Connected</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-cyan-100 font-bold">Directly to You</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Directory = () => {
  const categories = [
    { id: "hotel", title: "Hotels", icon: <Bed size={24} strokeWidth={2} />, description: "Best stays.", color: "text-blue-500", bg: "bg-blue-100/30", border: "border-blue-100" },
    { id: "wedding-planner", title: "Weddings", icon: <HeartHandshake size={24} strokeWidth={2} />, description: "Planners.", color: "text-rose-500", bg: "bg-rose-100/30", border: "border-rose-100" },
    { id: "taxi-service", title: "Taxis", icon: <CarFront size={24} strokeWidth={2} />, description: "Uber/Taxi.", color: "text-amber-500", bg: "bg-amber-100/30", border: "border-amber-100" },
    { id: "local-shop", title: "Shops", icon: <Store size={24} strokeWidth={2} />, description: "Essentials.", color: "text-emerald-500", bg: "bg-emerald-100/30", border: "border-emerald-100" },
    { id: "commercial-vehicle", title: "Trucks", icon: <Truck size={24} strokeWidth={2} />, description: "Transport.", color: "text-cyan-500", bg: "bg-cyan-100/30", border: "border-cyan-100" },
    { id: "photography", title: "Photos", icon: <Camera size={24} strokeWidth={2} />, description: "Studio.", color: "text-indigo-500", bg: "bg-indigo-100/30", border: "border-indigo-100" },
    { id: "event-rental", title: "Rentals", icon: <Tent size={24} strokeWidth={2} />, description: "Equipments.", color: "text-violet-500", bg: "bg-violet-100/30", border: "border-violet-100" },
    { id: "catering", title: "Catering", icon: <Utensils size={24} strokeWidth={2} />, description: "Services.", color: "text-fuchsia-500", bg: "bg-fuchsia-100/30", border: "border-fuchsia-100" }
  ];

  return (
    <section className="h-full flex items-center py-12 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative border-b border-emerald-100 shrink-0 w-full">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-200 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-2">Service Directory</h2>
          <p className="text-stone-500 font-light text-xs uppercase tracking-widest">Explore Local Services • Quick Access</p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.02 }}>
              <Link to={`/category/${cat.id}`} className={`block bg-white border ${cat.border} rounded-2xl p-3 sm:p-5 hover:shadow-md transition-all duration-300 group text-center active:scale-95 shadow-sm`}>
                 <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center transition-all duration-300 ${cat.bg} ${cat.color}`}>
                   {cat.icon}
                 </div>
                 <h3 className="font-serif text-[10px] sm:text-xs font-bold text-stone-900 mb-0.5 leading-tight">{cat.title}</h3>
                 <p className="text-[8px] sm:text-[9px] text-stone-400 leading-tight uppercase tracking-tight">
                   Explore
                 </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Mocking submission or using Netlify forms logic
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="h-full flex items-center py-12 bg-gradient-to-tr from-stone-50 to-emerald-50/50 relative border-b border-emerald-200 overflow-hidden shrink-0 w-full">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="hidden lg:block">
            <div className="inline-block px-4 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest w-max mb-6">Contact</div>
            <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">Join the <span className="text-emerald-600 italic">Network</span></h2>
            <p className="text-stone-600 font-light leading-relaxed mb-10 text-lg">
              Empowering local entrepreneurs by connecting them with the community.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-700">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm"><Phone size={18} /></div>
                <span className="font-medium text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-3 text-stone-700">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm"><Mail size={18} /></div>
                <span className="font-medium text-sm">connect@senapati.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 lg:hidden">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1 font-bold">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1 font-bold">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm" placeholder="Email" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1 font-bold">Message</label>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-emerald-600 text-white rounded-xl px-6 py-3.5 text-xs uppercase tracking-widest font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-all flex justify-center items-center gap-2">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-emerald-600 text-[10px] font-bold mt-2 text-center uppercase tracking-widest">Sent Successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-6 border-t border-stone-800 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Senapati Connect.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth">
      <div id="home" className="snap-start shrink-0 h-screen">
        <Hero />
      </div>
      <div id="directory" className="snap-start shrink-0 h-screen">
        <Directory />
      </div>
      <div id="mission" className="snap-start shrink-0 h-screen">
        <Mission />
      </div>
      <div id="contact" className="snap-start shrink-0 h-screen flex flex-col">
        <div className="flex-grow flex items-center">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to allow page rendering to finish before scrolling
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen font-sans antialiased text-stone-600 bg-stone-50 selection:bg-emerald-200 selection:text-stone-900 flex flex-col h-screen overflow-hidden">
        <Navbar />
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
