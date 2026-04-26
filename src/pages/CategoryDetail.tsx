import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Phone, MapPin, Star, Image as ImageIcon, ChevronRight } from 'lucide-react';

// Specific mock data for each category
const categoryData: Record<string, { title: string, theme: string, color: string, bg: string, border: string, hoverBorder: string, highlightBg: string, listings: any[] }> = {
  "wedding-planner": {
    title: "Wedding Planners",
    theme: "from-rose-500/20",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    hoverBorder: "group-hover:border-rose-300",
    highlightBg: "bg-rose-500",
    listings: [
      { name: "Elegance Weddings", rating: 4.9, reviews: 42, location: "NH-2, Senapati", phone: "+91 98765 11111", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1530103862676-de8892ebeea2?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Dream Day Events", rating: 4.7, reviews: 28, location: "Main Bazar", phone: "+91 98765 22222", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  },
  "taxi-services": {
    title: "Taxi Services",
    theme: "from-amber-500/20",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    hoverBorder: "group-hover:border-amber-300",
    highlightBg: "bg-amber-500",
    listings: [
      { name: "Senapati Express Cabs", rating: 4.8, reviews: 85, location: "Taxi Stand, Senapati", phone: "+91 98765 33333", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400&h=300" },
      { name: "Reliable Rides", rating: 4.6, reviews: 41, location: "Taphou", phone: "+91 98765 44444", image: "https://images.unsplash.com/photo-1582218731388-b20b2241cfdb?auto=format&fit=crop&q=80&w=400&h=300" }
    ]
  },
  "local-shops": {
    title: "Local Shops",
    theme: "from-emerald-500/20",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hoverBorder: "group-hover:border-emerald-300",
    highlightBg: "bg-emerald-500",
    listings: [
      { name: "Pari Retail Store", rating: 4.5, reviews: 112, location: "Main Bazar", phone: "+91 98765 55555", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Senapati Daily Needs", rating: 4.4, reviews: 89, location: "Vakho", phone: "+91 98765 66666", image: "https://images.unsplash.com/photo-1534723452862-4c87650816c0?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  },
  "commercial-vehicles": {
    title: "Commercial Vehicles",
    theme: "from-cyan-500/20",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    hoverBorder: "group-hover:border-cyan-300",
    highlightBg: "bg-cyan-500",
    listings: [
      { name: "Heavy Haul Transport", rating: 4.7, reviews: 34, location: "NH-2", phone: "+91 98765 77777", image: "https://images.unsplash.com/photo-1601584115197-04ecc0d2281b?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1586191552066-f52af0ebfaa4?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Local Pickup Movers", rating: 4.8, reviews: 56, location: "Karong", phone: "+91 98765 88888", image: "https://images.unsplash.com/photo-1554559409-f83134eaec11?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1549463051-7870e28d63a8?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1605810731086-4447477ba918?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  },
  "photography": {
    title: "Photography",
    theme: "from-teal-500/20",
    color: "text-teal-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    hoverBorder: "group-hover:border-teal-300",
    highlightBg: "bg-teal-500",
    listings: [
      { name: "Lens & Lights Studio", rating: 5.0, reviews: 120, location: "Main Bazar", phone: "+91 98765 99999", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Memories Captured", rating: 4.9, reviews: 75, location: "Taphou", phone: "+91 98765 00000", image: "https://images.unsplash.com/photo-1554048665-6807897813a4?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1518131804797-7c64a38bd2c7?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  },
  "event-rentals": {
    title: "Event Rentals",
    theme: "from-blue-500/20",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hoverBorder: "group-hover:border-blue-300",
    highlightBg: "bg-blue-500",
    listings: [
      { name: "Pioneer Party Equipments", rating: 4.8, reviews: 62, location: "Senapati Outskirts", phone: "+91 98765 12345", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Classic Tents & Chairs", rating: 4.7, reviews: 45, location: "Karong Road", phone: "+91 98765 54321", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1530103862676-de8892ebeea2?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1505368541998-cbf1c9b20757?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  },
  "catering": {
    title: "Catering Services",
    theme: "from-emerald-500/20",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hoverBorder: "group-hover:border-emerald-300",
    highlightBg: "bg-emerald-500",
    listings: [
      { name: "Spice & Smoke Catering", rating: 4.8, reviews: 54, location: "Senapati Bazar", phone: "+91 98765 10101", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Traditional Feasts", rating: 4.9, reviews: 78, location: "Taphou", phone: "+91 98765 01010", image: "https://images.unsplash.com/photo-1579584425514-6fa1031d2794?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=150&h=150", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=150&h=150"] }
    ]
  }
};

export default function CategoryDetail() {
  const { categoryId } = useParams();
  
  const category = categoryId && categoryData[categoryId] 
    ? categoryData[categoryId] 
    : {
        title: categoryId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Category',
        theme: "from-rose-500/10",
        color: "text-rose-500",
        bg: "bg-rose-50",
        border: "border-rose-100",
        hoverBorder: "group-hover:border-rose-300",
        highlightBg: "bg-rose-500",
        listings: [
          { name: "John's Service", rating: 4.8, reviews: 34, location: "Main Bazar, Senapati", phone: "+91 98765 43210", image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400&h=300" }
        ]
      };

  const { title, theme, color, bg, border, hoverBorder, highlightBg, listings } = category;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 font-sans text-slate-600 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${theme} to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3`}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <Link to="/#directory" className="inline-flex items-center text-stone-500 hover:text-emerald-600 font-bold text-xs uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Directory
        </Link>
        
        <h1 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-slate-600 text-lg mb-12 font-medium">
          Find the best and most reliable {title.toLowerCase()} providers in Senapati.
        </p>

        <div className="grid gap-6">
          {listings.map((listing, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border-2 border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:-translate-y-1 hover:shadow-2xl shadow-slate-200/50 transition-all duration-300 group overflow-hidden relative ${hoverBorder}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${theme} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 z-10 w-full">
                <div className="w-full sm:w-40 h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-200 transition-all relative shadow-sm group-hover:shadow-md">
                  <div className="absolute inset-0 bg-slate-50 flex items-center justify-center -z-10 text-slate-300">
                    <ImageIcon size={24} strokeWidth={1.5} />
                  </div>
                  {listing.image && (
                    <img src={listing.image} alt={listing.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                  )}
                </div>
                
                <div className="flex-grow">
                  <h3 className={`text-2xl font-serif text-slate-900 mb-2 group-hover:${color} transition-colors font-bold`}>{listing.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                    <span className="flex items-center text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50 shadow-sm">
                      <Star size={14} className="fill-amber-500 mr-1" /> {listing.rating}
                    </span>
                    <span>({listing.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-slate-600 font-medium">
                    <span className="flex items-center border border-slate-200 bg-white shadow-sm px-3 py-1.5 rounded-xl"><MapPin size={16} className={`mr-2 ${color}`} /> {listing.location}</span>
                    <span className="flex items-center border border-slate-200 bg-white shadow-sm px-3 py-1.5 rounded-xl"><Phone size={16} className={`mr-2 ${color}`} /> {listing.phone}</span>
                  </div>
                </div>
              </div>

              {categoryId !== 'taxi-services' && listing.products && listing.products.length > 0 && (
                <div className="flex-shrink-0 w-full md:w-auto z-10 md:text-right mt-4 md:mt-0">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-3 font-bold">Portfolio / Products</p>
                  <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                    {listing.products.map((prodImg: string, pIdx: number) => (
                      <div key={pIdx} className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden border border-slate-200 group-hover:${border} shadow-sm transition-all cursor-pointer`}>
                        <img src={prodImg} alt={`Portfolio ${pIdx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {!listing.products || listing.products.length === 0 ? (
                <div className={`hidden md:flex flex-shrink-0 z-10 w-12 h-12 rounded-2xl ${bg} ${border} ${color} items-center justify-center group-hover:${highlightBg} group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm border`}>
                  <ChevronRight size={24} />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
