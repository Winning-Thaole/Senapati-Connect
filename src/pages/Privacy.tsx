import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-[#0B132B] min-h-screen font-sans text-slate-300 pb-24 md:pb-8 relative overflow-x-hidden selection:bg-indigo-500/30">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
      
      {/* Header removed as it is now global */}
      
      {/* Content */}
      <main className="w-full max-w-3xl mx-auto px-6 py-12 relative z-10 text-slate-300 leading-relaxed text-base sm:text-lg">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Last Updated: May 2026</p>

        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">1. Our Commitment to Privacy</h3>
          <p>Senapati Connect respects the digital privacy of our community. This policy outlines how we display and handle basic information in compliance with Indian digital data principles.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">2. Information Displayed & Consent</h3>
          <p className="mb-4">To operate this directory, we display the following business details:</p>
          <ul className="space-y-4 mb-6 text-slate-300 list-none pl-0">
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              Business/Owner Name
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              Public Contact Number
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              Physical Business Address/Location (Note: We do not track or display real-time GPS locations).
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              Business Email ID (where applicable).
            </li>
          </ul>
          <div className="bg-white/5 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-sm sm:text-base"><strong className="text-white">Important:</strong> Every piece of business information displayed on this app is published exclusively with the prior, voluntary approval of the respective business owner. No private, unapproved personal data is ever hosted on this application.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">3. No Third-Party Data Selling</h3>
          <p>We do not track regular app users, nor do we collect, rent, sell, or trade the contact information of our directory visitors or listing owners to outside marketing or advertisement agencies.</p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 tracking-tight">4. Right to Removal & Correction</h3>
          <p className="mb-4">In alignment with India's data protection expectations, any listed business owner retains full control over their data. If you are a listed business owner and wish to:</p>
          <ul className="space-y-4 mb-6 text-slate-300 list-none pl-0">
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              Update or correct your phone number/address.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-indigo-500/50"></span>
              Completely delete and remove your listing from the app.
            </li>
          </ul>
          <p>You may contact the developer directly, and the listing will be modified or erased immediately without delay.</p>
        </section>
      </main>
    </div>
  );
}
