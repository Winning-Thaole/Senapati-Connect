import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-[#0B132B] min-h-screen font-sans text-slate-300 pb-16 relative overflow-x-hidden selection:bg-indigo-500/30">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
      
      {/* Header */}
      <header className="sticky top-0 bg-[#0B132B]/80 backdrop-blur-xl border-b border-white/5 flex items-center px-4 md:px-6 h-16 w-full z-50 gap-3">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-3">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors active:scale-95 duration-150 p-2 rounded-full cursor-pointer hover:bg-white/5">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-lg sm:text-xl leading-tight">Terms & Conditions</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="w-full max-w-3xl mx-auto px-6 py-12 relative z-10 text-slate-300 leading-relaxed text-base sm:text-lg">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Last Updated: May 2026</p>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">Welcome to Senapati Connect</h2>
        <p className="mb-10">By accessing and using this digital directory ("Service"), you agree to be bound by these Terms and Conditions.</p>

        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">1. Purely Informational Directory</h3>
          <p className="mb-4">Senapati Connect is a public service directory designed solely to display local business contact information, locations, and service types in Senapati town.</p>
          <ul className="space-y-4 text-slate-300 list-none pl-0">
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              <strong className="text-white font-medium">No Transactions:</strong> This application does not facilitate, handle, or process any commercial transactions, payments, or bookings.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              <strong className="text-white font-medium">No Brokerage:</strong> Senapati Connect does not act as an agent, broker, or middleman between buyers and business owners. We do not negotiate, guarantee, or manage deals between you and any service provider.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">2. Limitation of Liability (Disclaimer)</h3>
          <p className="mb-4">All listed information (names, contact numbers, and physical shop addresses) is strictly for general reference purposes.</p>
          <p className="mb-4">We do not verify or guarantee the day-to-day service quality, legal licensing, pricing, or safety of any listed business, school, or transport provider.</p>
          <p>Any interaction, call, hire, or purchase you make is entirely at your own risk. Senapati Connect is not responsible for any disputes, poor service, or losses occurring between users and listed entities.</p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">3. Acceptable Use</h3>
          <p>Users are strictly prohibited from using the contact numbers or information displayed on this app for harassment, mass spamming, or automated data harvesting.</p>
        </section>
      </main>
    </div>
  );
}
