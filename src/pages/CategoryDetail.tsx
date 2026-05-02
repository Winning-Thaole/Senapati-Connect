import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Phone, MapPin, Image as ImageIcon, ChevronRight, MessageCircle, Mail, BookOpen } from 'lucide-react';

// Specific mock data for each category
const categoryData: Record<string, { title: string, theme: string, color: string, bg: string, border: string, hoverBorder: string, highlightBg: string, listings: any[] }> = {
  "hotel": {
    title: "Hotel & Lodging",
    theme: "from-blue-500/10",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "group-hover:border-blue-500/50",
    highlightBg: "bg-blue-500",
    listings: [
      { name: "3D Hotel", location: "Main Road, Senapati", phone: "+91 ", image: "" },
      { name: "Hotel Range Rover", location: "Senapati", phone: "+91 ", image: "" },
      { name: "Crown Plaza Hotel", location: "Senapati", phone: "+91 ", image: "" },
      { name: "Hotel Serena", location: "Senapati", phone: "+91 ", image: "" },
      { name: "Eden Hotel", location: "Senapati", phone: "+91 ", image: "" },
      { name: "Susan Recedencia Lodge", location: "Senapati", phone: "+91 ", image: "" },
      { name: "Lodge Pinewood", location: "Senapati", phone: "+91 ", image: "" }
    ]
  },
  "school": {
    title: "Schools",
    theme: "from-indigo-500/10",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hoverBorder: "group-hover:border-indigo-500/50",
    highlightBg: "bg-indigo-500",
    listings: [
      { name: "Don Bosco Hr. Sec. School", location: "Senapati", phone: "+91 ", email: "", description: "Offers classes from Nursery to Higher Secondary with a focus on holistic development and academic excellence." },
      { name: "Lungnila Elizabeth College", location: "Near District Hospital", phone: "+91 84862 92257, 89745 20384, 98630 98084", email: "lungnilacollege@gmail.com", image: "/Lungnila-Elizabeth-College.webp", description: "Offers BA programs and diverse undergraduate courses." },
      { name: "Mount Everest Hr. Sec. School", location: "Taphou, Senapati", phone: "+91 ", email: "", description: "Nursery to Class XII (Arts & Science). Provides quality education and well-equipped laboratory facilities." },
      { name: "Bethany Hr. Sec. School", location: "Senapati", phone: "+91 ", email: "", description: "Comprehensive curriculum from foundational years to Higher Secondary." },
      { name: "St. Anthony School", location: "Senapati", phone: "+91 ", email: "", description: "Dedicated to holistic education." },
      { name: "Samaritan Public School", location: "Senapati", phone: "+91 ", email: "", description: "Providing quality education with modern facilities for student development." },
      { name: "Little Angel School", location: "Senapati", phone: "+91 ", email: "", description: "Building a strong foundation for young learners." },
      { name: "Brook Dale School", location: "Senapati", phone: "+91 ", email: "", description: "Focuses on academic excellence and extra-curricular activities." },
      { name: "Lao Radiant Hr. Sec. School", location: "Vakho, Senapati", phone: "+91 ", email: "", description: "Nurturing students from foundational years to Higher Secondary." },
      { name: "Hills Academy of Science", location: "Vakho, Senapati", phone: "+91 ", email: "", description: "Specialized in secondary and higher secondary education with a science-focused curriculum." }
    ]
  },
  "hospital": {
    title: "Hospitals",
    theme: "from-red-500/10",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    hoverBorder: "group-hover:border-red-500/50",
    highlightBg: "bg-red-500",
    listings: [
      { name: "District Hospital Senapati", location: "Above District Council", phone: "+91 ", image: " " }
    ]
  },
  "others": {
    title: "Others",
    theme: "from-teal-500/10",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    hoverBorder: "group-hover:border-teal-500/50",
    highlightBg: "bg-teal-500",
    listings: [
      { name: "Tea Hotel", location: "Bazar Road", phone: "+91 ", image: " " },
      { name: "Car wash", location: "Bazar Road", phone: "+91 ", image: " " },
      { name: "Car Reparing Shop", location: "Old Town", phone: "+91 ", image: " " }
    ]
  },
  "pharmacy": {
    title: "Pharmacies",
    theme: "from-emerald-500/10",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "group-hover:border-emerald-500/50",
    highlightBg: "bg-emerald-500",
    listings: [
      { name: " Medicos", location: "Bazar Road", phone: "+91 ", image: "" },
      { name: " Pharmacy", location: "Senapati", phone: "+91 ", image: " " }
    ]
  },
  "wedding-planner": {
    title: "Weddings",
    theme: "from-pink-500/10",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    hoverBorder: "group-hover:border-pink-500/50",
    highlightBg: "bg-pink-500",
    listings: [
      { name: "Elegance Weddings", location: "NH-2, Senapati", phone: "+91 ", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Dream  Events", location: "Main Bazar", phone: "+91 ", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  },
  "taxi-service": {
    title: "Taxis",
    theme: "from-amber-500/10",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "group-hover:border-amber-500/50",
    highlightBg: "bg-amber-500",
    listings: [
      { name: "Athesu Wagon R", location: "Taxi Stand, Senapati", phone: "+91 89740 90087", image: "/WagonR.webp"},
      { name: "Tokho Alto", location: "Taxi Stand, Senapati", phone: "+91 70055 03547", image: "/Alto.webp"},
      { name: "James S-Presso", location: "Senapati", phone: "+91 70055 24310 ", image: "/Presso.webp"}
    ]
  },
  "local-shop": {
    title: "Shops",
    theme: "from-emerald-500/10",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "group-hover:border-emerald-500/50",
    highlightBg: "bg-emerald-500",
    listings: [
      { name: "J & J Summit Agency", location: "Old Road, Senapati", items: "Stationery items, newspaper, school text books, office files and register, etc.", phone: "+91 82580 73712", image: "/JJ-Summit-Agency.webp" },
      { name: "Electrical & Hardware Centre", location: "NH-2, Senapati", items: "Electrical appliances, Construction materials, Paints, Nails, hings, etc.", phone: "+91 82580 73712", image: "/Electrical-Hardware-Centre.webp" },
      { name: "Holoholona Enterprises", location: "NH-2 Near Vishal Mega Mart, Senapati", items: "Poultry feeds, Pig feeds, Fish feeds, livestock medicine & instruments, etc.", phone: "+91 88268 31479", image: "/Holoholona-Enterprises.webp"},
      { name: "Avavio Store", location: "Old Road, Senapati", items: "Glass, Plywoord, Furniture materials, etc.", phone: "+91 96128 81322", image: "/AVAVIO-STORE.webp" },
      { name: "V. M. Home Decor", location: "Old Tollgate, Senapati Bazar", items: "Dealer of Asian Paints products – paints, primers, putty, waterproofing materials, and accessories.", phone: "+91 72920 45490", image: "/VM-Home-Decor.webp" }
    ]
  },
  "commercial-vehicle": {
    title: "Trucks",
    theme: "from-cyan-500/10",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    hoverBorder: "group-hover:border-cyan-500/50",
    highlightBg: "bg-cyan-500",
    listings: [
      { name: "Heavy Haul Transport", location: "NH-2", phone: "+91  ", image: "https://images.unsplash.com/photo-1601584115197-04ecc0d2281b?auto=format&fit=crop&q=80&w=400&h=300"},
      { name: "Local Pickup Movers", location: "Senapati", phone: "+91  ", image: "https://images.unsplash.com/photo-1554559409-f83134eaec11?auto=format&fit=crop&q=80&w=400&h=300"}
    ]
  },
  "photography": {
    title: "Photography",
    theme: "from-purple-500/10",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "group-hover:border-purple-500/50",
    highlightBg: "bg-purple-500",
    listings: [
      { name: "Lens & Lights Studio", location: "Main Bazar", phone: "+91  ", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=150&h=150"]},
      { name: "Memories Captured", location: "Senapati", phone: "+91  ", image: "https://images.unsplash.com/photo-1554048665-6807897813a4?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=150&h=150"]}
    ]
  },
  "event-rental": {
    title: "Rentals",
    theme: "from-violet-500/10",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverBorder: "group-hover:border-violet-500/50",
    highlightBg: "bg-violet-500",
    listings: [
      { name: "Pioneer Party Equipments", location: "Senapati Outskirts", phone: "+91  ", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=150&h=150"]},
      { name: "Classic Tents & Chairs", location: "Senapati Road", phone: "+91  ", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1530103862676-de8892ebeea2?auto=format&fit=crop&q=80&w=150&h=150"]}
    ]
  },
  "catering": {
    title: "Catering",
    theme: "from-fuchsia-500/10",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
    hoverBorder: "group-hover:border-fuchsia-500/50",
    highlightBg: "bg-fuchsia-500",
    listings: [
      { name: "Spice & Smoke Catering", location: "Senapati Bazar", phone: "+91 98765 10101", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Traditional Feasts", location: "Senapati", phone: "+91  ", image: "https://images.unsplash.com/photo-1579584425514-6fa1031d2794?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  }
};

const getDynamicImageUrl = (listing: any, categoryId: string | undefined): string => {
  const manualPath = listing.image?.trim() || '';
  
  if (manualPath && manualPath.length > 5) {
    return manualPath.startsWith('/') ? encodeURI(manualPath) : manualPath;
  }

  return '';
};

export default function CategoryDetail() {
  const { categoryId } = useParams();
  
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
    <div className="min-h-screen pt-48 pb-32 bg-slate-900 font-sans text-slate-400 relative overflow-x-hidden">
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${theme} to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0`}></div>
      <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr ${theme} to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2 z-0`}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <a href="/#directory" className="inline-flex items-center text-slate-500 hover:text-white font-bold text-xs uppercase tracking-widest mb-16 transition-colors group min-h-[44px]">
          <div className="glass-panel group-hover:border-white/20 p-2 rounded-full mr-3 shadow-lg transition-all">
            <ArrowLeft size={16} />
          </div>
          Back to Directory
        </a>
        
        <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl mb-16 font-medium max-w-3xl leading-relaxed">
          Find the best and most reliable {title.toLowerCase()} providers in Senapati. Hand-curated for quality and trust.
        </p>

        <div className="grid gap-8 md:gap-10">
          {listings.map((listing, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
              className={`glass-panel rounded-xl p-10 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10 sm:gap-12 hover:-translate-y-1 hover:glass-panel-hover transition-all duration-500 group overflow-hidden relative ${hoverBorder}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${theme} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10 z-10 w-full">
                <div className="w-full sm:w-48 h-40 sm:h-48 rounded-xl overflow-hidden shrink-0 border border-white/5 transition-all relative shadow-xl group-hover:shadow-2xl bg-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center -z-10 text-slate-700">
                    <ImageIcon size={32} strokeWidth={1.5} />
                  </div>
                  {getDynamicImageUrl(listing, categoryId) ? (
                    <>
                      <img 
                        src={getDynamicImageUrl(listing, categoryId)} 
                        alt={listing.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                        {...(getDynamicImageUrl(listing, categoryId).startsWith('http') ? { referrerPolicy: "no-referrer" } : {})}
                      />
                      {listing.details === 'Taxi' && (
                        <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded shadow-lg border border-amber-300 uppercase tracking-[0.2em] transform rotate-3 z-20">TAXI</div>
                      )}
                    </>
                  ) : null}
                </div>
                
                <div className="flex-grow">
                  <h3 className={`text-3xl sm:text-4xl font-display text-white mb-4 group-hover:${color} transition-colors font-bold tracking-tight`}>{listing.name}</h3>
                  
                  {listing.description && (
                    <div className="flex items-start gap-4 text-base text-slate-300 mb-6 bg-white/5 p-4 sm:p-5 rounded-xl border border-white/5">
                      <BookOpen className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 ${color}`} />
                      <p className="leading-relaxed">{listing.description}</p>
                    </div>
                  )}

                  {listing.items && (
                    <div className="flex items-center gap-2 text-base text-slate-400 mb-6 font-medium italic border-l-2 border-indigo-500 pl-4 py-1">
                      {listing.items}
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium mt-8 flex-wrap">
                    <span className="inline-flex min-h-[44px] flex-1 sm:flex-none justify-center items-center glass-panel px-6 py-3 rounded-xl text-slate-300">
                      <MapPin size={18} className={`mr-3 ${color}`} /> {listing.location}
                    </span>
                    
                    <a href={`tel:${listing.phone.replace(/[^0-9+]/g, '')}`} className={`inline-flex justify-center flex-1 sm:flex-none items-center border ${border} ${bg} hover:bg-white/5 shadow-lg px-6 py-3 min-h-[44px] rounded-xl transition-all cursor-pointer ${color} hover:text-white font-bold hover:-translate-y-0.5 active:translate-y-0`}>
                      <Phone size={18} className="mr-3 currentColor" /> {listing.phone}
                    </a>
                    
                    {listing.email && (
                      <a href={`mailto:${listing.email}`} className="inline-flex justify-center flex-1 sm:flex-none items-center border border-white/10 bg-white/5 hover:bg-white/10 shadow-lg px-6 py-3 min-h-[44px] rounded-xl transition-all cursor-pointer text-slate-300 hover:text-white font-bold hover:-translate-y-0.5 active:translate-y-0">
                        <Mail size={18} className="mr-3 text-slate-400" /> Email
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {categoryId !== 'taxi-service' && listing.products && listing.products.length > 0 && (
                <div className="flex-shrink-0 w-full lg:w-auto z-10 lg:text-right mt-6 lg:mt-0 pt-6 border-t border-white/5 lg:border-t-0 lg:pt-0">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-bold">Portfolio / Gallery</p>
                  <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar scroll-smooth">
                    {listing.products.map((prodImg: string, pIdx: number) => {
                      const trimmedImg = prodImg.trim();
                      return (
                        <div key={pIdx} className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:${border} shadow-lg transition-all cursor-pointer bg-slate-900 flex items-center justify-center`}>
                          {trimmedImg !== "" ? (
                            <img 
                              src={(trimmedImg.startsWith('/') ? encodeURI(trimmedImg) : trimmedImg) + "?v=" + new Date().getTime()} 
                              alt={`Portfolio ${pIdx + 1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out" 
                              {...(trimmedImg.startsWith('http') ? { referrerPolicy: "no-referrer" } : {})}
                            />
                          ) : (
                            <ImageIcon size={20} className="text-slate-700" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {!listing.products || listing.products.length === 0 ? (
                <div className={`hidden lg:flex flex-shrink-0 z-10 w-16 h-16 rounded-xl ${bg} ${border} ${color} items-center justify-center group-hover:${highlightBg} group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-lg border ml-6`}>
                  <ChevronRight size={28} />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
