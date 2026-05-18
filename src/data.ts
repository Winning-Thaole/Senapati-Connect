export const youtubeId = "GSIP4nmDhyQ";

export const categoryData: Record<string, { title: string, theme: string, color: string, bg: string, border: string, hoverBorder: string, highlightBg: string, listings: any[] }> = {
  "hotel": {
    title: "Hotel & Lodging",
    theme: "from-blue-500/10",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "group-hover:border-blue-500/50",
    highlightBg: "bg-blue-500",
    listings: [
      { name: "3D Hotel", location: "Main Road, Senapati HQ", phone: ["+91 98620 12345"], image: null },
      { name: "Hotel Range Rover", location: "Bazar Area, Senapati", phone: ["+91 "], image: null },
      { name: "Crown Plaza Hotel", location: "Near Traffic Point, Senapati", phone: ["+91 70855 59030"], image: null },
      { name: "Hotel Serena", location: "NH-2, Senapati", phone: ["+91 "], image: null },
      { name: "Eden Hotel", location: "Viewland Colony, Senapati", phone: ["+91 "], image: null },
      { name: "Susan Recedencia Lodge", location: "Opposite DC Office Road", phone: ["+91 "], image: null },
      { name: "Lodge Pinewood", location: "Karong, Senapati", phone: ["+91 "], image: null }
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
      { name: "Don Bosco Hr. Sec. School", location: "Senapati", phone: ["+91 "], email: null, description: null },
      { name: "Lungnila Elizabeth College", location: "Near District Hospital", phone: ["+91 84862 92257", "89745 20384", "98630 98084"], email: "lungnilacollege@gmail.com", image: "/lungnila-elizabeth-college.webp", description: "Offer BA Sociology (Honours), Bachelor of Social Work, Master of Social Work" },
      { name: "Mount Everest Hr. Sec. School", location: "Taphou, Senapati", phone: ["+91 "], email: null, description: null },
      { name: "Bethany Hr. Sec. School", location: "Senapati", phone: ["+91 "], email: null, description: null },
      { name: "St. Anthony School", location: "Senapati", phone: ["+91 "], email: null, description: null },
      { name: "Samaritan Public School", location: "Senapati", phone: ["+91 "], email: null, description: null }
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
      { name: "District Hospital Senapati", location: "Above District Council", phone: ["+91 "], image: null },
      
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
      { name: "Tea Hotel", location: "Bazar Road", phone: ["+91 "], image: null },
      { name: "Car wash", location: "Bazar Road", phone: ["+91 "], image: null },
      { name: "Car Repairing Shop", location: "Old Town", phone: ["+91 "], image: null }
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
      { name: "Joel Medicos", location: "Senapati", phone: ["+91 89741 44351"], image: null },
      { name: "Kape Pharmacy", location: "Senapati", phone: ["+91 81199 58644"], image: null },
      { name: "Apex Medicos", location: "Senapati", phone: ["+91 89716 61637"], image: null }
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
      { name: "Elegance Weddings", location: "NH-2, Senapati", phone: ["+91 "], image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=150&h=150"] },
      { name: "Dream Events", location: "Main Bazar", phone: ["+91 "], image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400&h=300", products: ["https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=150&h=150"] }
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
      { name: "Athesu Wagon R", location: "Taxi Stand, Senapati", phone: ["+91 89740 90087"], image: "/wagonr.webp"},
      { name: "Tokho Alto", location: "Taxi Stand, Senapati", phone: ["+91 70055 03547"], image: "/alto.webp"},
      { name: "James S-Presso", location: "Senapati", phone: ["+91 70055 24310"], image: "/presso.webp"}
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
      { name: "J & J Summit Agency", location: "Old Road, Senapati", items: "Stationery items, newspaper, school text books.", phone: ["+91 82580 73712"], image: "/jj-summit-agency.webp" },
      { name: "Electrical & Hardware Centre", location: "NH-2, Senapati", items: "Electrical appliances, Construction materials, Paints.", phone: ["+91 82580 73712"], image: "/electrical-hardware-centre.webp" },
      { name: "Holoholona Enterprises", location: "NH-2 Near Vishal Mega Mart", items: "Poultry feeds, Pig feeds, Fish feeds.", phone: ["+91 88268 31479"], image: "/holoholona-enterprises.webp"},
      { name: "Avavio Store", location: "Old Road, Senapati", items: "Glass, Plywood, Furniture materials.", phone: ["+91 96128 81322"], image: "/avavio-store.webp" },
      { name: "V. M. Home Decor", location: "Old Tollgate, Senapati Bazar", items: "Dealer of Asian Paints products.", phone: ["+91 72920 45490"], image: "/vm-home-decor.webp" },
      { name: "Kamei Variety Store", location: "Maram Centre", items: "Deals in Apparel, dry goods, hardware and groceries.", phone: ["+91 70857 35074"], image: null  },
      { name: "Dream Theatre", location: "Senapati Bazar", items: "AA sound n Light renting services.", phone: ["+91 70851 14964"], image: "/dream-theatre.webp" },
       { name: "Tumble Dry", location: "Senapati ", items: "Dry cleaner service", phone: ["+91 70058 27505"], image: null },
       { name: "Santosh Rai Store", location: "Old Road, Senapati ", items: "Household goods", phone: ["+91 84138 29366"], image: null },
         { name: "Ganesh Hardware", location: "Senapati ", items: "Hardware", phone: ["+91 94366 62234"], image: null },
         { name: "Doumai Hardware", location: "Senapati ", items: "Hardware", phone: ["+91 81320 75999"], image: null },
         { name: "Sumeet Hardware", location: "Senapati ", items: "Hardware", phone: ["+91 98620 03243"], image: null },
            { name: "Gupta Stationery", location: "Senapati ", items: "Deal in stationery items.", phone: ["+91 76279 74210"], image: null },
              { name: "Mohal JP Store", location: "Senapati ", items: "Deal in Grocery items.", phone: ["+91 96121 13648"], image: null },
               { name: "DC Enterprise", location: "Senapati ", items: null, phone: ["+91 80140 37230"], image: null },
               { name: "Blue Bell Corner", location: "Senapati ", items: null, phone: ["+91 91199 48382"], image: null },
               { name: "Mini Store", location: "Senapati ", items: null, phone: ["+91 81310 89852"], image: null },
               { name: "Loknak Store", location: "Senapati ", items: null, phone: ["+91 98673 8606"], image: null },
               { name: "Atul Store", location: "Senapati ", items: null, phone: ["+91 76290 27635"], image: null }
    ]
  }
};