import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Heart, 
  Plus, 
  Search,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Soup,
  Utensils,
  History,
  MessageCircle,
  Star,
  Home
} from 'lucide-react';
import { motion } from 'motion/react';
import { calculateExpiry, FoodCategory, StorageType, Priority } from '../lib/engine';

export default function DonorDashboard({ onSignOut }: { onSignOut: () => void }) {
  const [hoursRemaining, setHoursRemaining] = useState(2.75);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">
            Share Your <span className="text-[#E67E22]">Surplus</span>
          </h1>
          <p className="text-gray-500 font-medium">Hello, Central Kitchen #402! Ready to feed the neighborhood?</p>
        </div>
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search donors..." 
            className="bg-white border border-gray-100 shadow-sm rounded-2xl px-12 py-4 text-sm focus:ring-2 focus:ring-orange-100 w-72 transition-all group-hover:shadow-md outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Donation Form */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white rounded-3xl border border-gray-100 p-10 shadow-sm shadow-orange-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 blur-3xl opacity-50 -mr-16 -mt-16"></div>
            
            <div className="flex justify-between items-center mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#E67E22]">
                  <Soup className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900">Add New Offering</h2>
                  <p className="text-sm text-gray-400">Tell us about the meal you're sharing.</p>
                </div>
              </div>
              <div className="bg-[#FEFAF6] border border-orange-100 px-4 py-1.5 rounded-full text-[10px] font-bold text-[#E67E22] tracking-widest uppercase shadow-sm">
                MEAL ID: SHARE-2024
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">What are you sharing?</label>
                <input type="text" placeholder="e.g. Warm vegetable stew..." className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Approx. Weight</label>
                <div className="relative">
                  <input type="text" placeholder="15.5" className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#E67E22]">KG</span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Prepared At</label>
                <input type="time" className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Meeting Point</label>
                <div className="relative">
                  <input type="text" defaultValue="Main Entrance, Building B" className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
                  <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
            </div>

            <button className="relative z-10 w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-100 group overflow-hidden">
               <motion.div 
                 className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
               />
               <span className="relative z-10 text-sm uppercase tracking-widest">Share this Meal</span>
               <Heart className="w-5 h-5 group-hover:scale-125 transition-transform relative z-10 fill-current" />
            </button>
          </section>

          <section className="bg-white rounded-3xl border border-gray-100 p-10 shadow-sm shadow-orange-50/50">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-3 text-gray-900">
              <History className="w-6 h-6 text-orange-400" />
              Your Community Impact
            </h3>
            
            <div className="space-y-4">
              <CommunityImpactItem 
                title="Whole Grain Breads (12kg)" 
                status="COLLECTED" 
                time="Shared 12 mins ago • Picked up by Mike" 
                statusColor="bg-green-50 text-green-600 border border-green-100"
              />
              <CommunityImpactItem 
                title="Artisan Pasta Trays (5 units)" 
                status="WAITING" 
                time="Being matched with a nearby kitchen..." 
                statusColor="bg-orange-50 text-orange-600 border border-orange-100"
              />
            </div>
          </section>
        </div>

        {/* Safety Window Sidebar */}
        <div className="space-y-10">
          <section className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 blur-[80px] opacity-20 -mr-16 -mt-16"></div>
             <h3 className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-12">Quality Heartbeat</h3>
            
             <div className="flex flex-col items-center justify-center py-6 relative">
                <svg className="w-56 h-56 -rotate-90">
                  <circle cx="112" cy="112" r="95" stroke="rgba(255,255,255,0.05)" strokeWidth="16" fill="none" />
                  <motion.circle 
                    cx="112" cy="112" r="95" 
                    stroke="#E67E22" 
                    strokeWidth="16" 
                    fill="none" 
                    strokeDasharray="596.6"
                    initial={{ strokeDashoffset: 596.6 }}
                    animate={{ strokeDashoffset: 596.6 * 0.35 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                   <span className="text-6xl font-display font-bold">02:45</span>
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Hours of Freshness</span>
                </div>
             </div>

             <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-8">
               <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Quality Check</div>
                 <div className="text-xs font-bold text-orange-400 tracking-widest uppercase flex items-center gap-2">
                   <Star className="w-3 h-3 fill-current" />
                   Perfect Condition
                 </div>
               </div>
               <div className="flex flex-col items-end gap-2">
                 <div className="flex gap-1 h-2 w-32 rounded-full overflow-hidden bg-white/5">
                   <div className="flex-[2] bg-green-500/30"></div>
                   <div className="flex-[3] bg-[#E67E22]"></div>
                   <div className="flex-1 bg-red-500/20"></div>
                 </div>
               </div>
             </div>
             
             <p className="mt-8 text-xs text-gray-400 font-medium leading-relaxed italic border-l-2 border-orange-400/30 pl-4">
              "We prioritize safety to ensure every meal shared nourishes with love and care."
             </p>
          </section>

          <section className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm shadow-orange-50/50">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="text-[#E67E22] w-6 h-6 fill-current" />
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900">Suggested Neighbors</h3>
            </div>

            <div className="flex items-center gap-5 mb-8 p-4 rounded-2xl bg-[#FEFAF6] border border-orange-50">
               <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shadow-sm border border-orange-100 flex items-center justify-center">
                  <Home className="text-orange-200 w-8 h-8" />
               </div>
               <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900 mb-1">Harbor Soul Kitchen</div>
                  <div className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-orange-400" /> 1.2 miles away • Community Rd
                  </div>
               </div>
               <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#E67E22]" />
               </div>
            </div>

            <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100/50 space-y-4 mb-10">
               <div className="text-[8px] font-bold text-[#E67E22] uppercase tracking-widest text-center">Why join forces?</div>
               <p className="text-[11px] text-gray-600 leading-relaxed font-medium text-center italic">
                "They currently have 20 families waiting for warm meals. Your donation would perfectly fill their gap this afternoon."
               </p>
            </div>

            <button className="w-full bg-white border-2 border-orange-100 text-[#E67E22] text-[10px] font-black uppercase py-4 rounded-2xl tracking-widest hover:bg-[#E67E22] hover:text-white transition-all shadow-sm">
              Connect & Share
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

function CommunityImpactItem({ title, status, time, statusColor }: any) {
  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-2xl group hover:bg-[#FEFAF6] transition-all border border-gray-100 hover:border-orange-100 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
          <Utensils className="w-6 h-6 text-orange-300" />
        </div>
        <div>
          <div className="text-base font-bold text-gray-900">{title}</div>
          <div className="text-[11px] text-gray-400 font-medium mt-1">{time}</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider ${statusColor}`}>
          {status}
        </span>
        <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-[#E67E22] transition-colors" />
      </div>
    </div>
  );
}
