import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Heart,
  TrendingUp,
  Users,
  Grid,
  Search,
  Plus,
  Send,
  Droplets,
  Thermometer,
  Utensils,
  Home,
  MessageSquare,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

export default function NGODashboard({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">
            Hope & <span className="text-[#E67E22]">Help Center</span>
          </h1>
          <p className="text-gray-500 font-medium">Warm welcomes from Haven Hope Foundation. Let's nourish our community.</p>
        </div>
        
        <div className="flex gap-4">
          <StatMini label="FRIENDS HELPING" value="14" />
          <StatMini label="LIVES IMPACTED" value="1,240" isHighlight />
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Left Column: Request Support */}
        <div className="col-span-12 lg:col-span-4">
           <section className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm shadow-orange-50/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 blur-3xl opacity-50 -mr-12 -mt-12"></div>
             
             <div className="flex items-center gap-4 mb-10 relative z-10">
               <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#E67E22]">
                 <Send className="w-6 h-6 " />
               </div>
               <div>
                  <h2 className="text-xl font-display font-bold text-gray-900">Request Support</h2>
                  <p className="text-xs text-gray-400">Tell us what your community needs.</p>
               </div>
             </div>

             <div className="space-y-8 relative z-10">
               <div className="space-y-3">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Lives to Nourish</label>
                 <div className="relative group">
                   <input type="text" placeholder="500" className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-6 py-5 text-3xl font-display font-bold text-gray-900 outline-none focus:ring-2 focus:ring-orange-100 transition-all" />
                   <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-[#E67E22]">Families</span>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Meal Kind</label>
                    <select className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-4 py-4 text-sm font-bold text-gray-700 outline-none appearance-none cursor-pointer">
                      <option>Prepared Meals</option>
                      <option>Bakery Items</option>
                      <option>Fresh Produce</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Our Storage Space</label>
                    <div className="relative">
                      <input type="text" placeholder="500" className="w-full bg-[#FEFAF6] border border-orange-50 rounded-2xl px-4 py-4 text-sm font-bold text-gray-700 outline-none" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-300">kg</span>
                    </div>
                  </div>
               </div>

               <div className="space-y-3">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Best Time for Pickup</label>
                 <div className="flex items-center gap-3">
                   <input type="time" className="flex-1 bg-[#FEFAF6] border border-orange-50 rounded-2xl px-4 py-4 text-sm font-bold text-gray-700 outline-none" />
                   <span className="text-gray-300 text-xs font-bold font-mono">TO</span>
                   <input type="time" className="flex-1 bg-[#FEFAF6] border border-orange-50 rounded-2xl px-4 py-4 text-sm font-bold text-gray-700 outline-none" />
                 </div>
               </div>

               <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-100 mt-6 group">
                 Open Hearted Request <Heart className="w-4 h-4 group-hover:fill-current group-hover:scale-125 transition-transform" />
               </button>
             </div>
           </section>
        </div>

        {/* Middle Column: Care Deliveries */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
           
          {/* Capacity Visualization */}
          <section className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm shadow-orange-50/50">
             <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900">Our Storage Warmth</h3>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">Room left for community donations</p>
                </div>
                <div className="text-3xl font-display font-bold text-[#E67E22]">68% Full</div>
             </div>
             
             <div className="h-6 bg-gray-50 rounded-full overflow-hidden mb-6 p-1.5 border border-gray-100 shadow-inner">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '68%' }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="h-full bg-gradient-to-r from-orange-300 to-[#E67E22] rounded-full relative shadow-[0_0_15px_rgba(230,126,34,0.3)]"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 blur-sm"></div>
               </motion.div>
             </div>
             
             <div className="flex justify-between text-[9px] font-black text-gray-300 uppercase tracking-widest px-2">
                <span>Start empty</span>
                <span className="text-[#E67E22]">Available: 160 KG</span>
                <span>Max Capacity: 500 KG</span>
             </div>
          </section>

          <div className="space-y-4">
             <div className="flex items-center justify-between px-2 mb-2">
               <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Care Deliveries on the Way (3)</h3>
               <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 bg-green-50 px-3 py-1 rounded-full">
                 <Clock className="w-3.5 h-3.5" /> UPDATING LIVE
               </span>
             </div>

             <div className="space-y-4">
                <RescueCard 
                   title="Hearty Veggie Wraps"
                   origin="Central Plaza Bistro"
                   dist="1.2 miles"
                   volume="45 portions"
                   timeLeft="22 mins"
                   temp="Fresh & Chilled"
                   isSafe
                />
                <RescueCard 
                   title="Artisan Fruit Pie Trays"
                   origin="Bakery on Main"
                   dist="2.8 miles"
                   volume="12 trays"
                   timeLeft="1.5 hours"
                   tag="HIGH NEED ITEM"
                />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 group hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#E67E22] shrink-0 group-hover:scale-110 transition-transform">
                   <Users className="w-8 h-8" />
                </div>
                <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Friends Serving</div>
                   <div className="text-3xl font-display font-bold text-gray-900">08</div>
                   <div className="text-[10px] text-green-500 font-bold flex items-center gap-1 mt-1">
                     <Plus className="w-3 h-3" /> 2 more today
                   </div>
                </div>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Meal Support Received</div>
                  <Award className="w-5 h-5 text-yellow-500 fill-current opacity-20" />
                </div>
                <div className="text-3xl font-display font-bold text-gray-900 mb-4">240 kg</div>
                <div className="h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "66%" }}
                    className="h-full bg-orange-200 rounded-full" 
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatMini({ label, value, isHighlight }: any) {
  return (
    <div className={`bg-white px-8 py-4 rounded-2xl border border-gray-100 shadow-sm ${isHighlight ? 'ring-2 ring-orange-100' : ''}`}>
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">{label}</span>
      <span className={`text-2xl font-display font-bold ${isHighlight ? 'text-[#E67E22]' : 'text-gray-900'}`}>{value}</span>
    </div>
  );
}

function RescueCard({ title, origin, dist, volume, timeLeft, temp, isSafe, tag }: any) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition-all group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-100 group-hover:bg-[#E67E22] transition-colors"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div className="flex gap-5">
          <div className="w-14 h-14 bg-[#FEFAF6] border border-orange-50 rounded-2xl flex items-center justify-center text-orange-200 group-hover:text-[#E67E22] group-hover:bg-orange-50 transition-all group-hover:scale-110">
             <Utensils className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{title}</h4>
            <div className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-300" /> {origin} • {dist}
            </div>
          </div>
        </div>
        {tag ? (
          <span className="text-[9px] font-bold px-3 py-1 bg-orange-50 text-[#E67E22] rounded-full border border-orange-100 tracking-widest uppercase">{tag}</span>
        ) : (
          <span className="text-[9px] font-bold px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100 tracking-widest uppercase">Safe Window</span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">
        <MetricBox label="Quantity" value={volume} />
        <MetricBox label="ETA" value={timeLeft} isAccent />
        <MetricBox label="Status" value={temp || "Fresh"} />
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-gray-200">Help Receive</button>
        <button className="px-8 py-4 border border-gray-100 text-gray-300 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-red-50 hover:text-red-400 hover:border-red-100 transition-all">Not Ready</button>
      </div>
    </div>
  );
}

function MetricBox({ label, value, isAccent }: any) {
  return (
    <div className="bg-[#FEFAF6] p-4 rounded-2xl border border-orange-50">
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 text-center">{label}</div>
      <div className={`text-sm font-bold text-center ${isAccent ? 'text-[#E67E22]' : 'text-gray-900'}`}>{value}</div>
    </div>
  );
}


