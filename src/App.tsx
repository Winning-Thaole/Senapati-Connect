import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  School,
  CarFront,
  Store,
  MoreHorizontal,
  Star,
  Phone,
  Home,
  Bookmark,
  User,
  LayoutGrid,
  MapPin,
  ChevronRight,
  Bed,
  Heart,
  Hospital,
  Pill,
  Truck,
  Camera,
  Tent,
  Utensils,
  Mail,
  CheckCircle2,
  Navigation,
  MessageCircle,
  Target,
  BookOpen,
  ArrowUp,
  ArrowRight,
  Play,
  Route as RouteIcon
} from "lucide-react";
import CategoryDetail from "./pages/CategoryDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { categoryData, youtubeId } from "./data";

const categoryIcons: Record<string, React.ElementType> = {
  "hotel": Bed,
  "school": School,
  "hospital": Hospital,
  "pharmacy": Pill,
  "commercial-vehicle": Truck,
  "wedding-planner": Heart,
  "taxi-service": CarFront,
  "local-shop": Store,
  "photography": Camera,
  "event-rental": Tent,
  "catering": Utensils,
  "others": MoreHorizontal
};


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 px-6 lg:px-12 py-4 flex justify-between items-center w-full">
        <Link to="/" className="flex items-center z-50 cursor-pointer">
          <img src="/logo.webp" alt="Senapati Connect Logo" className="h-10 md:h-12 w-auto object-contain relative z-50" onError={(e) => { 
            e.currentTarget.style.display='none'; 
            e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-xl tracking-tight relative z-50">Senapati Connect</span>'; 
          }} />
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="/#home" className="text-white text-xs font-bold tracking-widest uppercase hover:text-indigo-400 transition-colors">Home</a>
          <a href="/#directory" className="text-white text-xs font-bold tracking-widest uppercase hover:text-indigo-400 transition-colors">Directory</a>
          <a href="/#mission" className="text-white text-xs font-bold tracking-widest uppercase hover:text-indigo-400 transition-colors">Mission</a>
          <a href="/#contact" className="text-white text-xs font-bold tracking-widest uppercase hover:text-indigo-400 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          {/* WhatsApp button removed as requested */}
        </div>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 relative z-50 -mr-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B132B]/95 backdrop-blur-lg flex flex-col pt-24 px-8">
          <nav className="flex flex-col w-full max-w-sm mx-auto">
            <a href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-6 border-b border-white/10 text-white hover:text-indigo-400 transition-colors group">
              <Home className="w-6 h-6 text-white group-hover:text-indigo-400 transition-colors" />
              <span className="text-xl font-bold tracking-wider">Home</span>
            </a>
            <a href="/#directory" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-6 border-b border-white/10 text-slate-400 hover:text-white transition-colors group">
              <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-xl font-bold tracking-wider">Directory</span>
            </a>
            <a href="/#mission" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-6 border-b border-white/10 text-slate-400 hover:text-white transition-colors group">
              <Target className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-xl font-bold tracking-wider">Mission</span>
            </a>
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-6 text-slate-400 hover:text-white transition-colors group">
              <MessageCircle className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-xl font-bold tracking-wider">Contact</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

const BottomNav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleDirectoryClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-[#0B132B]/90 backdrop-blur-xl border-t border-white/5 z-50 pb-safe">
      <Link to="/" className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors pt-1 ${isHome ? 'text-indigo-400' : 'text-slate-400 hover:text-indigo-400'}`}>
        <Home className={`w-5 h-5 ${isHome ? 'fill-current' : ''}`} />
        <span className="font-sans text-[10px] font-medium mt-1">Home</span>
      </Link>
      <Link 
        to="/#directory" 
        onClick={handleDirectoryClick}
        className="flex flex-col items-center justify-center text-slate-400 hover:text-indigo-400 w-full h-full cursor-pointer transition-colors pt-1"
      >
        <LayoutGrid className="w-5 h-5" />
        <span className="font-sans text-[10px] font-medium mt-1">Directory</span>
      </Link>
      <Link to="/saved" className="flex flex-col items-center justify-center text-slate-400 hover:text-indigo-400 w-full h-full cursor-pointer transition-colors pt-1">
        <Bookmark className="w-5 h-5" />
        <span className="font-sans text-[10px] font-medium mt-1">Saved</span>
      </Link>
      <a href="https://wa.me/918414832877" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center text-slate-400 hover:text-indigo-400 w-full h-full cursor-pointer transition-colors pt-1">
        <MessageCircle className="w-5 h-5" />
        <span className="font-sans text-[10px] font-medium mt-1">Chat</span>
      </a>
    </nav>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get('bot-field')) {
      console.warn("Bot detected via honeypot");
      setIsPending(false);
      return;
    }

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setIsPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-700">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="w-28 h-28 bg-emerald-500 text-white rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-14 h-14" />
          </div>
        </div>
        <h4 className="text-3xl font-bold text-white mt-10 mb-4 tracking-tight">Message Received</h4>
        <p className="text-slate-400 text-lg max-w-sm mx-auto">
          Thank you for reaching out. We've received your submission and will get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-10 px-10 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all text-xs font-bold uppercase tracking-[0.2em]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form 
      className="space-y-8" 
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contact"
    >
      {/* Honeypot & Netlify hidden inputs */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold ml-1">Full Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full px-6 py-4 rounded-2xl bg-[#020617] border border-white/5 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all duration-300 placeholder-slate-800" 
            placeholder="Your full name" 
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold ml-1">Your Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full px-6 py-4 rounded-2xl bg-[#020617] border border-white/5 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all duration-300 placeholder-slate-800" 
            placeholder="email@example.com" 
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold ml-1">How can we help?</label>
        <textarea 
          rows={5} 
          name="message" 
          required 
          className="w-full px-6 py-4 rounded-2xl bg-[#020617] border border-white/5 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all duration-300 placeholder-slate-800 resize-none" 
          placeholder="Tell us what's on your mind..."
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
        <button 
          type="submit" 
          disabled={isPending}
          className="w-full sm:w-auto min-w-[260px] bg-indigo-500 hover:bg-indigo-400 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white rounded-2xl px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] transition-all active:scale-[0.98] group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isPending ? "Sending..." : "Send Message"}
            {!isPending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </span>
        </button>
      </div>
    </form>
  );
};

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allListings = useMemo(() => {
    return Object.entries(categoryData).flatMap(([catId, cat]) => {
      return cat.listings.map(listing => ({ 
        ...listing, 
        categoryId: catId, 
        categoryTitle: cat.title, 
        bg: cat.bg, 
        color: cat.color, 
        border: cat.border,
        theme: cat.theme,
        highlightBg: cat.highlightBg
      }));
    });
  }, []);

  const filteredListings = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allListings.filter(l => 
      l.name.toLowerCase().includes(query) || 
      l.categoryTitle.toLowerCase().includes(query) ||
      (l.items && l.items.toLowerCase().includes(query)) ||
      (l.location && l.location.toLowerCase().includes(query))
    );
  }, [searchQuery, allListings]);

  return (
    <div className="bg-[#0B132B] min-h-screen font-sans text-white flex flex-col pb-16 md:pb-0 overflow-x-hidden relative selection:bg-indigo-500/30">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 z-0"></div>
      
      <main className="flex-1 w-full flex flex-col z-10 pt-0">
        {/* Hero Section */}
        <section id="home" className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-0 mb-8 lg:mb-12">
          {/* Left Content */}
          <div className="flex-1 shrink-0 w-full max-w-2xl pt-0 lg:pt-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-4 lg:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-[#a3b1f7] uppercase mt-[1px]">Local Service Directory</span>
            </div>
            
            <h1 className="flex flex-col text-[1.75rem] min-[375px]:text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.2] tracking-tight mb-4 lg:mb-6 text-white max-w-full">
              <span className="whitespace-nowrap">Explore and <span className="text-[#818cf8]">Connect</span></span>
              <span className="whitespace-nowrap">with Senapati</span>
            </h1>
            
            <p className="text-[#94a3b8] text-sm sm:text-base lg:text-lg leading-[1.6] max-w-[560px] font-medium text-balance">
              Welcome to Senapati Connect, the ultimate digital directory for our town. Designed to bring the community closer, this app helps you easily locate essential local services, find reliable transport providers, explore neighborhood schools, and support local shops. Whether you are a resident looking for daily utilities or a visitor exploring the area, everything you need is organized and accessible in one place.
            </p>
          </div>
          
          {/* Right Content / Image space */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/5 blur-[80px] rounded-[40px] pointer-events-none"></div>
            
            <div className="w-full h-[400px] sm:h-[500px] flex flex-col rounded-2xl border border-cyan-400/40 bg-[#050b18] backdrop-blur-sm overflow-hidden relative shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              
             {/* Top Box: Scholarship Notice */}
<a
  href="https://dtahills.mn.gov.in/notification-for-eligible-students-under-pre-matric-and-post-matric-scholarship-schemes-for-the-year-2023-24-and-2024-25/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative h-1/2 w-full border-b border-cyan-400/20 overflow-hidden group bg-slate-900"
>
  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 text-white">

    <div className="inline-block mb-3">
      <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
        Official Notice
      </span>
    </div>

    <h3 className="text-sm sm:text-lg font-bold leading-relaxed">
      Pre-Matric & Post-Matric Scholarship Notification 2023–24 & 2024–25
    </h3>

    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3">
      Eligible Scheduled Tribe (ST) students who have not received scholarship benefits due to Aadhaar non-linking with bank accounts are advised to complete Aadhaar seeding immediately.
    </p>

    <div className="mt-4 flex items-center gap-2 text-cyan-300 font-semibold text-sm">
      <span>Read Full Notification</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>

  </div>
</a>

              {/* Bottom Box: Large Wide Button */}
              <button 
                className="relative h-1/2 w-full group overflow-hidden flex items-center justify-center cursor-pointer transition-all active:scale-[0.98] bg-cover bg-center"
                style={{ backgroundImage: 'url(/senapati.webp)' }}
                onClick={() => document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 text-white font-bold text-lg sm:text-2xl tracking-tight flex items-center gap-2">
                  <span>Explore Directory</span>
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>

            </div>
          </div>
        </section>

        {/* Unified Search Section */}
        <section className="w-full max-w-3xl mx-auto px-6 lg:px-12 mb-4 lg:mb-6 z-20">
          <div className="relative shadow-2xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-indigo-400/80" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 md:py-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all font-medium text-lg md:text-xl shadow-[0_0_30px_rgba(99,102,241,0.15)]"
              placeholder="Search businesses..."
            />
          </div>
        </section>

        {/* Directory/Categories Section */}
        <section id="directory" className="w-full max-w-7xl mx-auto px-6 lg:px-12 mb-10 lg:mb-16 flex flex-col">
          <div className="flex flex-col items-center mb-4 lg:mb-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
              {searchQuery.trim() ? "Search Results" : "Service Directory"}
            </h2>
            <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">
              {searchQuery.trim() ? `Found ${filteredListings.length} matching professional${filteredListings.length === 1 ? '' : 's'}` : "Trusted Local Experts • Quick Access"}
            </p>
          </div>

          {searchQuery.trim() ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filteredListings.map((listing, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col transition-all cursor-default">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                       <h3 className="text-lg font-bold text-white leading-tight mb-1">{listing.name}</h3>
                       <div className="text-[11px] font-bold tracking-widest uppercase text-indigo-400 mb-2">{listing.categoryTitle}</div>
                     </div>
                     <div className={`w-12 h-12 rounded-xl ${listing.bg} border ${listing.border} flex items-center justify-center shrink-0`}>
                        <span className={`text-xl font-bold ${listing.color}`}>{listing.name.charAt(0)}</span>
                     </div>
                  </div>
                  {listing.location && (
                    <div className="flex items-center gap-1.5 text-[13px] text-slate-300 mb-4">
                      <MapPin size={14} className="text-slate-500 shrink-0" />
                      <span className="line-clamp-1">{listing.location}</span>
                    </div>
                  )}
                  {listing.route && (
                    <div className="flex items-start gap-2 bg-cyan-950/40 border border-cyan-500/20 p-2.5 rounded-lg mb-4">
                      <RouteIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                        {listing.route}
                      </p>
                    </div>
                  )}
                  {listing.items && (
                    <p className="text-[13px] text-slate-400 font-medium line-clamp-2 mb-4 leading-relaxed">
                      {listing.items}
                    </p>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-2.5">
                    {listing.phone && Array.isArray(listing.phone) && listing.phone.length > 0 && (
                      <div className="flex flex-col gap-2.5">
                        {listing.phone.map((num, i) => (
                          <a key={i} href={`tel:${num.replace(/[^0-9+]/g, '')}`} className={`w-full ${listing.highlightBg || 'bg-sky-500'} hover:opacity-90 text-white min-h-[44px] py-1 px-3 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95`}>
                            <Phone className="w-4 h-4 shrink-0" /> 
                            <span className="leading-tight shrink-0 md:hidden">Call</span>
                            <span className="leading-tight shrink-0 hidden md:block">{num.trim()}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {listing.email ? (
                      <a href={`mailto:${listing.email}`} className="w-full bg-white/10 border border-white/10 hover:bg-white/20 text-white min-h-[44px] py-1 px-3 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                        <Mail className="w-4 h-4 text-indigo-200 shrink-0" /> 
                        <span className="leading-tight">Email</span>
                      </a>
                    ) : (
                      <Link to={`/category/${listing.categoryId}`} className="w-full bg-white/10 border border-white/10 hover:bg-white/20 text-white min-h-[44px] py-1 px-3 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                        <span className="leading-tight">Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              {filteredListings.length === 0 && (
                <div className="col-span-full py-16 text-center text-slate-400 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-md font-medium text-lg">
                  No businesses found matching your search.
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {Object.entries(categoryData)
                .sort(([idA], [idB]) => {
                  if (idA === 'others') return 1;
                  if (idB === 'others') return -1;
                  return 0; // maintain original order for other categories
                })
                .map(([id, cat]) => {
                const Icon = categoryIcons[id] || MoreHorizontal;
                return (
                  <Link key={id} to={`/category/${id}`} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 lg:gap-5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${cat.bg} border ${cat.border} flex items-center justify-center ${cat.color} group-hover:scale-110 group-hover:${cat.highlightBg} group-hover:text-white transition-all duration-300`}>
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 stroke-[1.5]" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-bold text-base lg:text-xl mb-1">{cat.title}</h3>
                      <span className="text-slate-400 text-[9px] lg:text-[10px] font-bold tracking-[0.15em] uppercase group-hover:text-white transition-colors">Explore {cat.listings.length} places</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* Mission Section */}
        <section id="mission" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-block px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.3)] text-[11px] font-bold uppercase tracking-widest w-max mb-2">
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
                Your Town, <br className="hidden sm:block" />in Your Hands.
              </h2>
              <div className="relative bg-[#0a1226] border-l-2 border-indigo-500 p-8 rounded-xl rounded-l-none text-slate-300 font-medium leading-relaxed text-base sm:text-lg lg:text-xl overflow-hidden z-10">
                <MapPin className="absolute -bottom-10 -right-10 w-48 h-48 text-indigo-500/5 -z-10 rotate-12" />
                <span className="text-4xl sm:text-5xl text-[#818cf8] font-serif mr-2 align-bottom leading-none">"</span>
                Senapati Connect was built to bridge the gap between our local businesses and the people who need them. We are committed to creating a reliable, easy-to-use digital hub that helps our community grow and thrive in the digital age.
                <span className="text-4xl sm:text-5xl text-[#818cf8] font-serif ml-2 align-top leading-none">"</span>
              </div>
              
              <div className="grid grid-cols-3 items-start text-center sm:text-left gap-2 sm:gap-4 mt-6 sm:mt-2 w-full">
                <div className="flex flex-col items-center sm:items-start gap-1 sm:border-l-2 border-indigo-500/30 sm:pl-4">
                  <span className="text-xl sm:text-3xl font-bold text-white tracking-tight">100+</span>
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-indigo-300 font-bold uppercase tracking-wider">Services</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1 sm:border-l-2 border-indigo-500/30 sm:pl-4">
                  <span className="text-xl sm:text-3xl font-bold text-white tracking-tight">Reliable</span>
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-indigo-300 font-bold uppercase tracking-wider">Data</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1 sm:border-l-2 border-indigo-500/30 sm:pl-4">
                  <span className="text-xl sm:text-3xl font-bold text-white tracking-tight">Community</span>
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-indigo-300 font-bold uppercase tracking-wider">First</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/5 blur-[80px] rounded-[40px] pointer-events-none"></div>
              <div className="w-full aspect-[4/5] lg:aspect-[3/4] rounded-[32px] border border-white/5 bg-white/5 backdrop-blur-sm p-4 sm:p-6 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nature and connection" 
                  className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-1000 opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 lg:px-12 bg-[#020617] border-t border-white/5 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Info & Context (Bento Part 1) */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-[#0B0F1A] border border-white/5 rounded-[32px] p-8 h-full flex flex-col justify-between group hover:border-white/10 transition-all duration-500">
                  <div>
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                      <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                      Let's build<br /><span className="text-indigo-400 text-3xl sm:text-5xl">together.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Submit your local business details or reaching out for partnerships. We're here to help the community connect.
                    </p>
                  </div>
                  
                  <div className="mt-12 space-y-6">
                    <a 
                      href="https://wa.me/918414832877" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 text-slate-300 group/item hover:text-green-400 transition-colors"
                    >
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 group-hover/item:bg-green-500 group-hover/item:text-white transition-all">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="font-medium">WhatsApp Us</span>
                    </a>
                    <div className="flex items-center gap-5 text-slate-300 group/item">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-medium">senapaticonnect@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: The Form (Bento Part 2) */}
              <div className="lg:col-span-8">
                <div className="bg-[#0B0F1A] border border-white/5 rounded-[32px] p-8 sm:p-12 relative overflow-hidden h-full shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500" />
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B132B] pt-6 pb-24 md:pb-6 relative z-10 w-full overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] pointer-events-none rounded-t-full"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold tracking-tight text-white">Senapati<span className="text-indigo-400 font-light">Connect</span></span>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Terms & Conditions</Link>
            <span className="text-white/10">•</span>
            <Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Privacy Policy</Link>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Senapati Connect Directory. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[90] p-3 rounded-full bg-[#050b18] border border-cyan-400 hover:bg-[#0a162b] text-cyan-400 backdrop-blur-md shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <ScrollToTopButton />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}



