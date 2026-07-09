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
          { name: "John's Service", location: "Main Bazar, Senapati", phone: ["+91 98765 43210"], image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400&h=300" }
        ]
      };

  const { title, theme, color, bg, border, hoverBorder, highlightBg, listings } = category;

  return (
    <div className="bg-[#0B132B] min-h-screen font-sans text-slate-300 pb-24 md:pb-8 relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* Dynamic Background Glow */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${theme} to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0`}></div>
      <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr ${theme} to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2 z-0`}></div>

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
              className={`bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all group overflow-hidden relative cursor-default`}
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
                
                {/* Responsive Phone Block: Filters out empty inputs */}
                {listing.phone && Array.isArray(listing.phone) && listing.phone.some(num => num && num.trim() !== "+91") && (
                  <div className="w-full">
                    {/* 1. DESKTOP VIEW: Clean text labels. Invisible on mobile, visible on desktop browser */}
                    <div className="hidden md:block mb-3 bg-white/5 p-2.5 rounded-xl border border-white/5" onClick={(e) => e.stopPropagation()}>
                      
                      {/* One universal, clean header for all directories */}
                      <p className="text-[11px] text-slate-400 font-bold tracking-widest uppercase mb-1">
                        Booking & Contact
                      </p>
                      
                      {/* Renders numbers horizontally on a single line separated by a comma */}
                      <div className="flex flex-wrap gap-x-1.5 text-slate-200 text-[13px] font-medium tracking-wide">
                        {listing.phone
                          .filter(num => num && num.trim() !== "+91")
                          .map((phoneNum, idx, filteredArray) => (
                            <span key={idx}>
                              {phoneNum.trim()}{idx < filteredArray.length - 1 ? "," : ""}
                            </span>
                          ))}
                      </div>
                    </div>
                    {/* 2. MOBILE VIEW: Space-saving interactive call elements */}
                    <div className="block md:hidden mb-1">
                      {listing.phone.filter(num => num && num.trim() !== "+91").length === 1 ? (
                        /* Direct trigger dial for single phone record items */
                        <a
                          href={`tel:${listing.phone.filter(num => num && num.trim() !== "+91")[0].replace(/[^0-9+]/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className={`w-full ${category.highlightBg || 'bg-sky-500'} hover:opacity-90 text-white min-h-[44px] py-2 px-4 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95`}
                        >
                          <Phone className="w-4 h-4 shrink-0" />
                          <span className="leading-tight">Call Business</span>
                        </a>
                      ) : (
                        /* Standard context drop-down for multi-line listings */
                        <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white z-10">
                            <Phone className="w-4 h-4 shrink-0" />
                          </div>
                          <select
                            onChange={(e) => {
                              if (e.target.value) {
                                window.location.href = `tel:${e.target.value}`;
                                e.target.value = ""; 
                              }
                            }}
                            className={`w-full ${category.highlightBg || 'bg-sky-500'} hover:opacity-90 text-white min-h-[44px] py-2 pl-11 pr-10 rounded-xl text-[14px] font-bold appearance-none transition-all shadow-lg text-left active:scale-95`}
                            defaultValue=""
                          >
                            <option value="" disabled hidden>Choose Number to Call</option>
                            {listing.phone
                              .filter(num => num && num.trim() !== "+91")
                              .map((phoneNum, idx) => (
                                <option key={idx} value={phoneNum.replace(/[^0-9+]/g, '')} className="text-black bg-white font-medium">
                                  Line {idx + 1}: {phoneNum.trim()}
                                </option>
                              ))}
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                )}

                {listing.email && (
                  <a href={`mailto:${listing.email}`} onClick={(e) => e.stopPropagation()} className="w-full bg-white/10 border border-white/10 hover:bg-white/20 text-white min-h-[44px] py-1 px-3 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                    <Mail className="w-4 h-4 text-indigo-200 shrink-0" /> 
                    <span className="leading-tight">Email</span>
                  </a>
                )}

                {listing.whatsapp && (
                  <a 
                    href={`https://wa.me/91${listing.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366] min-h-[44px] py-1.5 px-3.5 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.711 1.456 5.4 0 9.791-4.394 9.795-9.793.002-2.615-1.012-5.074-2.858-6.922C16.45 2.048 13.994.99 11.383.99c-5.4 0-9.791 4.394-9.795 9.793-.001 1.693.443 3.345 1.287 4.793l-.997 3.646 3.732-.979zm11.367-6.425c-.27-.135-1.597-.788-1.847-.88-.25-.09-.432-.135-.613.135-.18.27-.7.88-.857 1.06-.157.18-.315.202-.585.067-.27-.135-1.138-.42-2.167-1.34-.8-.713-1.34-1.594-1.497-1.864-.157-.27-.017-.417.118-.552.121-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.613-1.477-.84-2.027-.22-.53-.442-.457-.613-.466-.157-.008-.338-.008-.518-.008-.18 0-.473.068-.72.337-.248.27-.945.923-.945 2.25 0 1.327.967 2.61 1.102 2.79.135.18 1.902 2.904 4.6 4.07.643.277 1.144.443 1.534.567.646.205 1.233.176 1.7.106.517-.077 1.597-.653 1.822-1.282.225-.63.225-1.17.157-1.282-.068-.113-.248-.18-.518-.315z"/>
                    </svg>
                    <span className="leading-tight">WhatsApp Us</span>
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