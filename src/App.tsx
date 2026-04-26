import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Menu, X, ChevronRight, Briefcase, 
  CheckCircle2, Globe, Lightbulb, ShieldCheck, 
  Users, BarChart, Mail, Phone, HeartHandshake, CarFront, Store, Truck, Camera, Tent, Utensils
} from 'lucide-react';
import CategoryDetail from './pages/CategoryDetail';

const LogoMark = ({ isScrolled, size = 'md' }: { isScrolled?: boolean, size?: 'md' | 'lg' }) => {
  const containerClass = size === 'lg' ? 'w-12 h-12 rounded-2xl' : 'w-10 h-10 rounded-xl';
  const blurClass = size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';
  const fontSizeClass = size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className={`relative flex items-center justify-center ${containerClass} overflow-hidden transition-all duration-500 flex-shrink-0 ${isScrolled ? 'shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40' : 'shadow-lg shadow-black/10'}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${isScrolled ? 'from-emerald-600 via-teal-500 to-cyan-500 group-hover:scale-110 transition-transform duration-500' : 'from-white to-stone-50'}`}></div>
      <div className={`absolute bottom-0 right-0 ${blurClass} rounded-full blur-md opacity-60 ${isScrolled ? 'bg-lime-400 group-hover:bg-green-400 transition-colors duration-500' : 'bg-emerald-300'}`}></div>
      <div className="relative z-10 flex items-center justify-center">
         <span className={`font-serif font-black ${fontSizeClass} ${isScrolled ? 'text-white drop-shadow-sm' : 'text-emerald-600'}`}>
           S
         </span>
      </div>
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
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 py-4 shadow-sm' : 'bg-transparent border-b border-transparent py-6 lg:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <LogoMark isScrolled={isScrolled} />
          <span className={`font-serif tracking-wide hidden sm:block text-lg font-bold transition-colors ${isScrolled ? 'text-stone-900 group-hover:text-emerald-700' : 'text-white group-hover:text-emerald-200'}`}>
            Senapati Connect
          </span>
          <span className={`font-serif tracking-wide sm:hidden text-base font-bold transition-colors ${isScrolled ? 'text-stone-900 group-hover:text-emerald-700' : 'text-white group-hover:text-emerald-200'}`}>
            SC
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-white/20 backdrop-blur-md border border-white/30 shadow-sm px-8 py-3 rounded-full">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${isScrolled ? 'text-stone-600 hover:text-emerald-600' : 'text-white/90 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a href="/#contact" className={`px-6 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold transition-colors shadow-lg ${isScrolled ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/25' : 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-black/10'}`}>
            Get in Touch
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
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
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative min-h-screen flex items-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 text-white border-b-8 border-emerald-900/20">
      
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
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#directory" className="bg-white text-emerald-600 hover:bg-stone-50 rounded-full px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all hover:-translate-y-1 shadow-xl shadow-black/10 flex justify-center items-center gap-3">
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



const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50/50 relative border-b border-emerald-100">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-emerald-100/50 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest w-max mb-2">Our Mission</div>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 leading-tight">
              Built on a foundation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-bold italic">trust</span> & competence.
            </h2>
            <p className="text-lg font-light text-stone-600 leading-relaxed">
              At Senapati Connect, we understand that finding reliable help requires more than just searching; it needs community trust. Our integrated network brings together the best locals with proven experience.
            </p>
            <ul className="space-y-4 mt-4">
              {[
                "Community-centric approach focused on reliability.",
                "Handpicked network of trusted local experts.",
                "Easy access connecting you directly to providers."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-emerald-500" size={20} strokeWidth={2} /></div>
                  <span className="text-stone-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#about" className="text-xs uppercase tracking-widest font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-2 group transition-colors">
                Learn more about us 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 aspect-[4/5] sm:aspect-square flex flex-col justify-end relative overflow-hidden group shadow-xl shadow-emerald-500/20 border-4 border-emerald-100">
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none transition-opacity duration-500 group-hover:bg-black/30"></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                  <ShieldCheck size={24} className="text-white" strokeWidth={2} />
                </div>
                <p className="font-serif text-2xl sm:text-3xl text-white mb-1 tracking-wide leading-tight">Verified</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-100 font-bold">Local Partners</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl p-8 aspect-[4/5] sm:aspect-square flex flex-col justify-center text-left mt-12 relative overflow-hidden group shadow-xl shadow-cyan-500/20 border-4 border-cyan-100">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                <HeartHandshake size={24} className="text-white" strokeWidth={2} />
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-white tracking-wide mb-1 leading-tight drop-shadow-sm">Connected</p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-cyan-100 font-bold">Directly to You</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Directory = () => {
  const categories = [
    { id: "wedding-planner", title: "Wedding Planner", icon: <HeartHandshake size={28} strokeWidth={2} />, description: "Find the best planners to map out your perfect day.", color: "text-rose-500", bg: "bg-rose-100/50", hover: "group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-rose-500/30", border: "border-rose-200" },
    { id: "taxi-services", title: "Taxi Services", icon: <CarFront size={28} strokeWidth={2} />, description: "Reliable rides around Senapati and beyond.", color: "text-amber-500", bg: "bg-amber-100/50", hover: "group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500/30", border: "border-amber-200" },
    { id: "local-shops", title: "Local Shops", icon: <Store size={28} strokeWidth={2} />, description: "Discover neighborhood stores and essentials.", color: "text-emerald-500", bg: "bg-emerald-100/50", hover: "group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-emerald-500/30", border: "border-emerald-200" },
    { id: "commercial-vehicles", title: "Commercial Vehicles", icon: <Truck size={28} strokeWidth={2} />, description: "Book heavy transport and commercial vehicles.", color: "text-cyan-500", bg: "bg-cyan-100/50", hover: "group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-cyan-500/30", border: "border-cyan-200" },
    { id: "photography", title: "Photography", icon: <Camera size={28} strokeWidth={2} />, description: "Capture your precious moments with local professionals.", color: "text-indigo-500", bg: "bg-indigo-100/50", hover: "group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-indigo-500/30", border: "border-indigo-200" },
    { id: "event-rentals", title: "Event Rentals", icon: <Tent size={28} strokeWidth={2} />, description: "Rent tents, chairs, and equipment for your outdoor gathering.", color: "text-violet-500", bg: "bg-violet-100/50", hover: "group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-violet-500/30", border: "border-violet-200" },
    { id: "catering", title: "Catering", icon: <Utensils size={28} strokeWidth={2} />, description: "Delicious local and traditional catering for your gatherings.", color: "text-fuchsia-500", bg: "bg-fuchsia-100/50", hover: "group-hover:bg-fuchsia-500 group-hover:text-white group-hover:shadow-fuchsia-500/30", border: "border-fuchsia-200" }
  ];

  return (
    <section id="directory" className="py-24 bg-gradient-to-br from-stone-50 via-emerald-50 to-teal-50 relative border-b border-emerald-100">
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-widest w-max mb-6">Explore</div>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-4">Service Directory</h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Browse through our curated list of local services. Connecting you with trusted professionals across the district and beyond.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-[11px] uppercase tracking-widest font-bold text-emerald-700 hover:text-cyan-700 transition-colors group bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-sm hover:shadow-md hover:bg-white">
            View All Categories <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <Link to={`/category/${cat.id}`} className={`block h-full bg-white/80 backdrop-blur-sm border ${cat.border} rounded-3xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}>
                 <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 ${cat.bg} ${cat.color} ${cat.hover}`}>
                   {cat.icon}
                 </div>
                 
                 <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">{cat.title}</h3>
                 <p className="text-stone-600 text-sm font-medium leading-relaxed mb-6">
                   {cat.description}
                 </p>
                 <div className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-emerald-500 group-hover:text-emerald-700 transition-colors duration-300 mt-auto">
                   View Listing <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-[11px] uppercase tracking-widest font-bold text-emerald-700 hover:text-cyan-700 transition-colors group bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-200 shadow-sm hover:shadow-md">
                View All Categories <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-tr from-emerald-100 to-stone-50 relative border-b border-emerald-200">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-300/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-widest w-max mb-6">Contact Us</div>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed mb-10">
              Have a question, need assistance, or want to list your business on Senapati Connect? Reach out to us.
            </p>
            
            <div className="space-y-6 text-stone-800">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                  <Globe size={22} strokeWidth={2} />
                </div>
                <span className="font-medium">Senapati, Manipur, India</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                  <Phone size={22} strokeWidth={2} />
                </div>
                <span className="font-medium">+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                  <Mail size={22} strokeWidth={2} />
                </div>
                <span className="font-medium">contact@senapatiservices.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-emerald-900/10 relative">
            <div className="absolute top-0 right-10 w-20 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-lg"></div>
            <form className="space-y-6 mt-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-2 font-bold">Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-white/50 border border-emerald-100 text-stone-900 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium placeholder-stone-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-2 font-bold">Email</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl bg-white/50 border border-emerald-100 text-stone-900 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium placeholder-stone-400" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-2 font-bold">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-white/50 border border-emerald-100 text-stone-900 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium resize-none placeholder-stone-400" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl px-8 py-4 text-xs uppercase tracking-widest font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer inline-flex">
              <LogoMark isScrolled={true} size="lg" />
              <span className="font-serif tracking-wide text-white text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                Senapati Connect
              </span>
            </div>
            <p className="text-stone-400 mb-8 text-base leading-relaxed max-w-sm">
              Empowering the community by connecting locals with trusted services, businesses, and professionals across the region.
            </p>
            <div className="flex gap-4">
              {[Globe, Phone, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-stone-800 text-stone-400 hover:text-white hover:bg-emerald-600 transition-all duration-300 flex justify-center items-center transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/30">
                  <Icon size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-emerald-500 mb-6 font-bold">Company</h4>
            <ul className="space-y-4 text-base font-medium text-stone-300">
              {['About Us', 'Careers', 'News & Insights', 'Testimonials', 'Contact'].map(link => (
                <li key={link}><a href="#" className="hover:text-white hover:underline decoration-emerald-500 decoration-2 underline-offset-4 transition-all">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
          
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p font-medium>© {new Date().getFullYear()} Senapati Connect. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px] font-bold">
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
    <>
      <Hero />
      <Directory />
      <About />
      <Contact />
    </>
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
      <div className="min-h-screen font-sans antialiased text-stone-600 bg-stone-50 selection:bg-emerald-200 selection:text-stone-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
