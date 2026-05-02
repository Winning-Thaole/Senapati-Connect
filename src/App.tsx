import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Menu, X, ChevronRight, Briefcase, 
  CheckCircle2, Globe, Lightbulb, ShieldCheck, 
  Users, BarChart, Mail, Phone, HeartHandshake, CarFront, Store, Truck, Camera, Tent, Utensils, Bed,
  School, Hospital, Stethoscope, Pill, MessageCircle
} from 'lucide-react';
import CategoryDetail from './pages/CategoryDetail';

const LogoMark = ({ isScrolled, size = 'md' }: { isScrolled?: boolean, size?: 'sm' | 'md' | 'lg' }) => {
  let sizeClass = 'h-10 sm:h-12';
  if (size === 'lg') sizeClass = 'h-16 sm:h-20';
  if (size === 'sm') sizeClass = 'h-8 sm:h-10';

  return (
    <div className={`relative flex items-center justify-start ${sizeClass} transition-transform duration-500 hover:scale-105 flex-shrink-0`}>
      <img src="/Logo.webp" alt="Senapati Connect Logo" className="w-auto h-full object-contain" />
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] shadow-md border-b border-white/5 py-4 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 group cursor-pointer w-auto lg:w-1/4">
          <LogoMark size="sm" />
          {/* Text is removed since logo includes it */}
        </Link>
        
        <div className="hidden md:flex items-center justify-center gap-8 lg:w-2/4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs uppercase tracking-widest font-bold transition-all text-slate-300 hover:text-indigo-400 hover:scale-105 flex items-center">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex lg:w-1/4 justify-end">
          <a href="/#contact" className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg bg-indigo-500 text-slate-100 hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center">
            Get in Touch
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-md transition-all flex items-center justify-center">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0f172a] shadow-2xl border-b border-white/5 py-4 px-6 flex flex-col md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-bold text-slate-300 hover:text-indigo-400 py-3 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2">
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-indigo-500 text-white rounded-md px-6 py-3 text-sm tracking-widest text-center uppercase font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform">
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
    <section className="min-h-[100dvh] pt-48 pb-32 overflow-hidden relative flex items-center bg-slate-900 text-white selection:bg-indigo-500 selection:text-white">
      
      {/* Dark theme dramatic background elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} className="max-w-2xl py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[11px] uppercase tracking-widest mb-10 font-bold backdrop-blur-md transition-all hover:bg-indigo-500/20 glass-panel">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Local Service Directory
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-10 tracking-tight text-white">
              Discover <br className="hidden sm:block" /><span className="text-indigo-400 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Senapati's</span> Brightest
            </h1>
            <div className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-xl mb-12 space-y-6">
              <p className="font-medium text-slate-200">
                Your community marketplace to discover trusted local vendors, services, and entrepreneurs.
              </p>
              <p className="opacity-80 text-base sm:text-lg">
                This platform connects people with local entrepreneurs, making it easier to find and access essential services in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <a href="#directory" className="bg-indigo-500 text-slate-950 hover:bg-indigo-400 rounded-xl px-10 py-5 sm:px-12 sm:py-6 w-full sm:w-auto text-sm uppercase tracking-widest font-bold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 active:translate-y-0 flex justify-center items-center gap-3">
                Browse Directory <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }} className="relative hidden lg:block h-[600px] xl:h-[700px] w-full max-w-lg ml-auto">
             <div className="w-full h-full rounded-xl overflow-hidden relative group glass-panel p-4">
                <div className="w-full h-full rounded-xl overflow-hidden relative glass-panel">
                  <div className="absolute inset-0 bg-slate-900/30 z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0 mix-blend-multiply"></div>
                  <img 
                    src="/senapati_town.png" 
                    alt="Senapati Town" 
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-slate-900 flex flex-col justify-end p-10 z-10 pointer-events-none rounded-b-xl">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
                      <h3 className="font-display text-3xl font-bold text-white mb-3 tracking-tight">Local Commerce</h3>
                      <p className="text-slate-300 text-base font-medium leading-relaxed">Empowering communities by connecting local entrepreneurs with people who need their services.</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative backing shape */}
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500 rounded-full blur-[80px] opacity-20 -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section id="mission" className="py-40 bg-slate-900 relative border-t border-b border-white/5 shrink-0 w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-900/10 to-transparent -z-10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} className="flex flex-col gap-8 py-8">
            <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold uppercase tracking-widest w-max mb-2">Our Mission</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Community <span className="text-indigo-400">Connected</span>,<br/> Trust Restored.
            </h2>
            <div className="glass-panel border-l-4 border-indigo-500 p-8 sm:p-12 rounded-xl rounded-l-none text-slate-300 font-medium leading-relaxed text-lg sm:text-xl">
              <span className="text-2xl text-indigo-500 font-serif opacity-50 mr-2">"</span>
              We believe in the power of local connection. Our mission is to bridge the gap between people and the trusted experts who serve our community every day.
              <span className="text-2xl text-indigo-500 font-serif opacity-50 ml-2">"</span>
            </div>
            <ul className="space-y-6 mt-4">
              {[
                "Reliability built on verified local expertise.",
                "Handpicked network of professional service providers.",
                "Seamless communication connecting you directly."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="mt-1 bg-slate-800 p-1.5 rounded-full"><CheckCircle2 className="text-indigo-400" size={18} strokeWidth={2.5} /></div>
                  <span className="text-slate-300 font-medium text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8 relative p-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} className="glass-panel hover:glass-panel-hover rounded-xl p-10 sm:p-12 aspect-[4/5] sm:aspect-square flex flex-col justify-end relative overflow-hidden group transition-colors duration-500">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Verified stability" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10 transition-opacity duration-700"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-indigo-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Verified</p>
                <p className="text-[11px] uppercase tracking-widest text-indigo-400 font-bold">Local Partners</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }} className="glass-panel hover:glass-panel-hover rounded-xl p-10 sm:p-12 aspect-[4/5] sm:aspect-square flex flex-col justify-end mt-16 sm:mt-20 relative overflow-hidden group transition-colors duration-500">
              <img src="https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800" alt="Direct Connection Network" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10 transition-opacity duration-700"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-blue-500/30 text-blue-400 group-hover:scale-110 duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
                  <HeartHandshake size={28} strokeWidth={2} />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">Connected</p>
                <p className="text-[11px] uppercase tracking-widest text-blue-400 font-bold">Directly to You</p>
              </div>
            </motion.div>

            {/* Ambient glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Directory = () => {
  const categories = [
    { id: "hotel", title: "Hotels", icon: <Bed size={24} />, description: "Best stays.", color: "text-blue-400 group-hover:text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]" },
    { id: "wedding-planner", title: "Weddings", icon: <HeartHandshake size={24} />, description: "Planners.", color: "text-pink-400 group-hover:text-pink-300", bg: "bg-pink-500/10", border: "border-pink-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]" },
    { id: "taxi-service", title: "Taxis", icon: <CarFront size={24} />, description: "Uber/Taxi.", color: "text-amber-400 group-hover:text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]" },
    { id: "local-shop", title: "Shops", icon: <Store size={24} />, description: "Essentials.", color: "text-emerald-400 group-hover:text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]" },
    { id: "school", title: "Schools", icon: <School size={24} />, description: "Education.", color: "text-indigo-400 group-hover:text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]" },
    { id: "hospital", title: "Hospitals", icon: <Hospital size={24} />, description: "Healthcare.", color: "text-red-400 group-hover:text-red-300", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]" },
    { id: "others", title: "Others", icon: <Stethoscope size={24} />, description: "Other services.", color: "text-teal-400 group-hover:text-teal-300", bg: "bg-teal-500/10", border: "border-teal-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]" },
    { id: "pharmacy", title: "Pharmacies", icon: <Pill size={24} />, description: "Medicines.", color: "text-emerald-400 group-hover:text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]" },
    { id: "commercial-vehicle", title: "Trucks", icon: <Truck size={24} />, description: "Transport.", color: "text-cyan-400 group-hover:text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]" },
    { id: "photography", title: "Photography", icon: <Camera size={24} />, description: "Studio.", color: "text-purple-400 group-hover:text-purple-300", bg: "bg-purple-500/10", border: "border-purple-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]" },
    { id: "event-rental", title: "Rentals", icon: <Tent size={24} />, description: "Equipments.", color: "text-violet-400 group-hover:text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]" },
    { id: "catering", title: "Catering", icon: <Utensils size={24} />, description: "Services.", color: "text-fuchsia-400 group-hover:text-fuchsia-300", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.3)]" }
  ];

  return (
    <section className="py-40 bg-slate-900 relative shrink-0 w-full z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-slate-900/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-100 mb-6 tracking-tight">Service Directory</h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base uppercase tracking-[0.2em]">Trusted Local Experts • Quick Access</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.25, 0.8, 0.25, 1] }}>
              <Link to={`/category/${cat.id}`} className={`block glass-panel hover:glass-panel-hover rounded-xl p-10 sm:p-12 transition-all duration-500 group text-center shadow-xl ${cat.glow} relative overflow-hidden h-full flex flex-col justify-center items-center gap-2`}>
                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${cat.bg} ${cat.color} ${cat.border} border`}>
                   {cat.icon}
                 </div>
                 <h3 className="font-display text-lg sm:text-xl font-bold text-slate-200 mb-2 leading-tight group-hover:text-white transition-colors">{cat.title}</h3>
                 <p className="text-[11px] text-slate-500 font-bold tracking-widest uppercase group-hover:text-slate-400 transition-colors">
                   Tap to Explore
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
    
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-40 bg-slate-900 relative border-t border-white/5 overflow-hidden shrink-0 w-full z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          <div className="lg:pr-8">
            <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold uppercase tracking-widest w-max mb-8 backdrop-blur-sm">Contact</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">Join the <span className="text-indigo-400">Network</span></h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-12 text-lg sm:text-xl">
              Empowering local entrepreneurs by connecting them with the community. Let's build something great together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 text-slate-300 group">
                <div className="w-14 h-14 rounded-xl glass-panel flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-300"><MessageCircle size={22} /></div>
                <span className="font-medium text-base sm:text-lg group-hover:text-white transition-colors">Whatsapp +91 84148 32877</span>
              </div>
              <div className="flex items-center gap-5 text-slate-300 group">
                <div className="w-14 h-14 rounded-xl glass-panel flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-300"><Mail size={22} /></div>
                <span className="font-medium text-base sm:text-lg group-hover:text-white transition-colors">senapaticonnect@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-10 sm:p-14 relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-blue-400"></div>
            <h3 className="text-2xl font-display font-bold text-white mb-8 lg:hidden">Get in Touch</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-2 font-bold">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-5 py-4 min-h-[44px] rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500 hover:border-white/20 transition-all text-base placeholder:text-slate-600" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-2 font-bold">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-5 py-4 min-h-[44px] rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500 hover:border-white/20 transition-all text-base placeholder:text-slate-600" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-2 font-bold">Message</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500 hover:border-white/20 transition-all text-base resize-none placeholder:text-slate-600" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full min-h-[44px] bg-indigo-500 text-slate-950 rounded-xl px-10 py-5 sm:py-6 text-sm uppercase tracking-widest font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 hover:bg-indigo-400 disabled:opacity-70 disabled:hover:translate-y-0 transition-all flex justify-center items-center gap-3 mt-4">
                {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-indigo-400 text-xs font-bold mt-4 text-center uppercase tracking-widest animate-pulse">Message Sent Successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 py-10 border-t border-white/5 shrink-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest font-bold text-center">
          <p>© {new Date().getFullYear()} Senapati Connect. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


const HomePage = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth bg-slate-900">
      <div id="home">
        <Hero />
      </div>
      <div id="directory">
        <Directory />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="contact" className="flex flex-col">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      
      const attemptScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      setTimeout(() => {
        if (!attemptScroll()) {
          const interval = setInterval(() => {
            if (attemptScroll() || attempts >= 20) {
              clearInterval(interval);
            }
            attempts++;
          }, 50);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen font-sans antialiased text-slate-300 bg-slate-900 selection:bg-indigo-500 selection:text-white flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
