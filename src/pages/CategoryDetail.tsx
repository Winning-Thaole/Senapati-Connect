import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Phone, MapPin, Mail, Navigation, Route } from 'lucide-react';
import { categoryData } from '../data';

const getDynamicImageUrl = (listing: any, categoryId: string | undefined): string | null => {
  const manualPath = listing.image?.trim() || '';
  
  if (manualPath && manualPath.length > 5) {
    if (!manualPath.startsWith('http')) {
      return manualPath.toLowerCase();
    }
    return manualPath;
  }

  return null;
};

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categoryId && categoryData[categoryId] 
    ? categoryData[categoryId] 
    : {
        title: categoryId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Category',
        theme: "from-rose-500/10",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        hoverBorder: "group-hover:border-rose-500/50",
        highlightBg: "bg-rose-500",
        listings: [
          { name: "John's Service", location: "Main Bazar, Senapati", phone: "+91 98765 43210", image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400&h=300" }
        ]
      };

  const { title, theme, color, bg, border, hoverBorder, highlightBg, listings } = category;

  return (
    <div className="bg-[#0B132B] min-h-screen font-sans text-slate-300 pb-24 md:pb-8 relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* Dynamic Background Glow */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${theme} to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0`}></div>
      <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr ${theme} to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2 z-0`}></div>

      {/* Header removed as it is now global */}
      
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 flex flex-col gap-6 relative z-10">
        
        <div className="mb-2">
            <h1 className="font-bold text-2xl md:text-3xl text-white truncate tracking-tight">
              {title}
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Showing {listings.length} results
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {listings.map((listing, idx) => {
            const imageUrl = getDynamicImageUrl(listing, categoryId);
            const hasImage = imageUrl !== null;
            return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: Math.min(idx * 0.03, 0.3), duration: 0.2 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all group overflow-hidden relative cursor-pointer`}
            >
              <div className="flex items-start gap-4 mb-4">
                {hasImage ? (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-800 border border-white/5 overflow-hidden shrink-0">
                    <img 
                      src={imageUrl} 
                      alt={listing.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      {...(imageUrl?.startsWith('http') ? { referrerPolicy: "no-referrer" } : {})}
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none'; 
                        e.currentTarget.parentElement!.classList.add(bg, border, 'flex', 'items-center', 'justify-center'); 
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold ${color}">${listing.name.charAt(0)}</span>`; 
                      }}
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${bg} border ${border} flex items-center justify-center shrink-0`}>
                    <span className={`text-xl font-bold ${color}`}>{listing.name.charAt(0)}</span>
                  </div>
                )}
                
                <div className="flex-1 pt-0.5">
                  <h3 className="w-full text-base sm:text-lg font-bold text-white tracking-tight leading-tight mb-1">{listing.name}</h3>
                  {listing.location && (
                    <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-slate-300 mt-1.5">
                      <MapPin size={14} className="text-slate-500 shrink-0" />
                      <span className="line-clamp-1">{listing.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-grow flex flex-col gap-2.5 mb-4">
                {listing.route && (
                  <div className="flex items-start gap-2 bg-cyan-950/40 border border-cyan-500/20 p-2.5 rounded-lg mb-1">
                    <Route className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {listing.route}
                    </p>
                  </div>
                )}
                
                {listing.items && (
                  <p className="text-[13px] text-slate-400 font-medium line-clamp-2 leading-relaxed">
                    {listing.items}
                  </p>
                )}
                
                {listing.description && (
                  <p className="text-[13px] text-slate-400 font-medium line-clamp-3 leading-relaxed mb-1">
                    {listing.description}
                  </p>
                )}
              </div>

              {/* Actions Footer */}
              <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-2.5">
                {listing.phone && Array.isArray(listing.phone) && listing.phone.length > 0 && (
                  <div className="flex flex-col gap-2.5">
                    {listing.phone.map((num, i) => (
                      <a key={i} href={`tel:${num.replace(/[^0-9+]/g, '')}`} onClick={(e) => e.stopPropagation()} className={`w-full ${category.highlightBg || 'bg-sky-500'} hover:opacity-90 text-white min-h-[44px] py-1 px-3 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95`}>
                        <Phone className="w-4 h-4 shrink-0" /> 
                        <span className="leading-tight shrink-0 md:hidden">Call</span>
                        <span className="leading-tight shrink-0 hidden md:block">{num.trim()}</span>
                      </a>
                    ))}
                  </div>
                )}
                {listing.email && (
                  <a href={`mailto:${listing.email}`} onClick={(e) => e.stopPropagation()} className="w-full bg-white/10 border border-white/10 hover:bg-white/20 text-white min-h-[44px] py-1 px-3 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                    <Mail className="w-4 h-4 text-indigo-200 shrink-0" /> 
                    <span className="leading-tight">Email</span>
                  </a>
                )}
              </div>
            </motion.div>
          )})}
        </div>
      </main>
    </div>
  );
}
