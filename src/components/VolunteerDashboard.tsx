import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  MoreVertical,
  Navigation2,
  TrendingUp,
  Map as MapIcon,
  Search,
  Heart,
  Soup,
  Utensils,
  History,
  MessageCircle,
  Gift,
  Smile,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function VolunteerDashboard({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">
            My <span className="text-[#E67E22]">Helping Hand</span>
          </h1>
          <p className="text-gray-500 font-medium">Hello, ZeroLink Hero! Let's bring some smiles to the neighborhood today.</p>
        </div>
        <div className="bg-[#FEFAF6] border border-orange-100 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm shadow-orange-50/50">
           <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-[#E67E22]">Ready to Serve</span>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        
        {/* Your Delivery Journey */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
           <section className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm shadow-orange-50/50">
             <div className="px-10 py-6 border-b border-gray-50 bg-white flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#E67E22] fill-current" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-gray-900">Your Path of Care</h2>
                    <p className="text-sm text-gray-400">Timely delivery ensures the freshest meals.</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Arrival</div>
                  <div className="text-2xl font-display font-bold text-[#E67E22]">2:25 PM <span className="text-xs text-gray-400 font-medium">(12 min)</span></div>
                </div>
             </div>
             
             {/* Simple Map Visualization */}
             <div className="aspect-[21/9] bg-[#FEFAF6] relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E67E22_1px,transparent_1px)] [background-size:20px_20px]"></div>
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path 
                    d="M 150 200 Q 300 150 500 100" 
                    fill="none" 
                    stroke="#E67E22" 
                    strokeWidth="3" 
                    strokeDasharray="8, 8"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  />
                </svg>

                <div className="absolute top-10 left-10 p-5 bg-white rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#E67E22]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Pick up here</p>
                    <p className="text-xs font-bold text-gray-900">The Daily Bread Bakery</p>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 p-5 bg-white rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 text-right">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Drop off with love</p>
                    <p className="text-xs font-bold text-gray-900">Hope Community Kitchen</p>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                </div>
             </div>
           </section>

           <section className="bg-white rounded-[2rem] border border-gray-100 p-10 shadow-sm shadow-orange-50/50">
             <h3 className="text-xl font-display font-bold mb-12 flex items-center gap-3 text-gray-900">
               <Navigation2 className="w-6 h-6 text-[#E67E22] fill-current opacity-30" />
               Our Journey Together
             </h3>
             
             <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-50 -translate-y-1/2 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-1.5 bg-gradient-to-r from-orange-300 to-[#E67E22] -translate-y-1/2 rounded-full"></div>
                
                <div className="relative flex justify-between">
                   <JourneyNode label="Picked Up" sub="THANK YOU!" active />
                   <JourneyNode label="On the Way" sub="IN GOOD HANDS" active pulse />
                   <JourneyNode label="Delivered" sub="ALMOST THERE" />
                </div>
             </div>
           </section>

           <section className="bg-white rounded-[2rem] border border-gray-100 p-10 shadow-sm shadow-orange-50/50">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-display font-bold text-gray-900">Donations with You</h3>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1 bg-gray-50 rounded-full border border-gray-100">Today's Batch</span>
              </div>

              <div className="space-y-4">
                <DonationRow name="Fresh Sourdough Loaves" count="20 bags" freshness="Freshly baked" emoji="🥖" />
                <DonationRow name="Seasonal Fruit Basket" count="5 Large" freshness="Delivered chilled" emoji="🍎" isSpecial />
              </div>
           </section>
        </div>

        {/* Impact & Next Steps */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
           
          <section className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                 <Heart className="w-40 h-40 fill-current" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-400/20 rounded-2xl flex items-center justify-center text-orange-400 mb-8">
                  <Smile className="w-7 h-7" />
                </div>
                <div className="text-5xl font-display font-bold text-orange-400 mb-3">12 Meals</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-12">Shared with the neighbors today</div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 text-center px-1">Service Time</div>
                      <div className="text-2xl font-display font-bold text-center">4.2 hrs</div>
                   </div>
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 text-center px-1">Smiles Made</div>
                      <div className="text-2xl font-display font-bold text-center">Plenty!</div>
                   </div>
                </div>
              </div>
          </section>

          <div className="space-y-6">
             <div className="flex items-center justify-between px-2">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Next Opportunity</h3>
                <span className="text-[10px] font-bold text-[#E67E22] bg-orange-50 px-3 py-1 rounded-full border border-orange-100 flex items-center gap-1.5">
                   <Clock className="w-3 h-3" /> VERY SOON
                </span>
             </div>

             <div className="bg-white p-8 rounded-[2rem] border-2 border-[#E67E22] shadow-xl shadow-orange-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex gap-5 mb-8 relative z-10">
                   <div className="w-14 h-14 bg-[#FEFAF6] rounded-2xl flex items-center justify-center text-[#E67E22] shadow-sm">
                      <Utensils className="w-7 h-7" />
                   </div>
                   <div>
                      <div className="text-base font-bold text-gray-900 mb-1">Neighborhood Bistro</div>
                      <div className="text-[11px] text-gray-400 font-medium">Warm Soup Surplus • 12kg</div>
                   </div>
                </div>
                
                <div className="space-y-5 mb-10 relative z-10">
                   <OpportunityStep icon={MapPin} label="Where to go" val="Market Street, No. 12" />
                   <OpportunityStep icon={History} label="When to arrive" val="In about 15 minutes" />
                </div>

                <div className="flex gap-3 relative z-10">
                   <button className="flex-1 bg-[#E67E22] hover:bg-[#D35400] text-white text-[10px] font-black uppercase py-4 rounded-xl tracking-widest transition-all shadow-lg shadow-orange-100">Accept Request</button>
                </div>
             </div>

             <div className="bg-white/50 p-6 rounded-2xl border border-gray-100 opacity-60 flex items-center justify-between">
                <div className="flex gap-4">
                   <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300">
                      <Soup className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-xs font-bold text-gray-500">Scheduled: Morning Deli</div>
                      <div className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">Starts tomorrow • 8:00 AM</div>
                   </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function JourneyNode({ label, sub, active, pulse }: any) {
  return (
    <div className="flex flex-col items-center gap-3 relative z-10 w-24">
       <div className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center border-2 transition-all duration-500 ${
         active ? 'bg-[#E67E22] border-[#E67E22] text-white shadow-lg shadow-orange-100' : 'bg-white border-gray-100 text-gray-200'
       } ${pulse ? 'animate-pulse ring-8 ring-orange-100/50' : ''}`}>
         {active ? <CheckCircle2 className="w-7 h-7" /> : <div className="w-3 h-3 bg-gray-100 rounded-full" />}
       </div>
       <div className="text-center">
         <div className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">{label}</div>
         <div className={`text-[9px] font-bold tracking-tight ${active ? 'text-[#E67E22]' : 'text-gray-300'}`}>{sub}</div>
       </div>
    </div>
  );
}

function DonationRow({ name, count, freshness, emoji, isSpecial }: any) {
  return (
    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all hover:shadow-sm ${
      isSpecial ? 'bg-orange-50/50 border-orange-100' : 'bg-[#FEFAF6]/50 border-gray-100'
    }`}>
      <div className="flex items-center gap-4">
        <span className="text-2xl">{emoji}</span>
        <div>
          <div className="text-sm font-bold text-gray-900">{name}</div>
          <div className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{freshness}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs font-bold text-gray-900">{count}</div>
        <div className={`text-[9px] font-black uppercase tracking-widest mt-1 ${isSpecial ? 'text-[#E67E22]' : 'text-gray-400'}`}>
          {isSpecial ? 'Priority' : 'Standard'}
        </div>
      </div>
    </div>
  );
}

function OpportunityStep({ icon: Icon, label, val }: any) {
  return (
    <div className="flex items-start gap-4">
       <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
          <Icon className="w-4 h-4 text-[#E67E22]" />
       </div>
       <div>
         <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</div>
         <div className="text-xs font-bold text-gray-800 leading-tight">{val}</div>
       </div>
    </div>
  );
}
