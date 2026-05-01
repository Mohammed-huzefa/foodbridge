import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Heart, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Search,
  ChevronDown,
  Utensils
} from 'lucide-react';
import { Role } from '../App';

interface RoleSelectionProps {
  onSelectRole: (role: Role) => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-[#FEFAF6] font-sans flex flex-col md:flex-row">
      {/* Left Decoration / Marketing Side */}
      <div className="hidden md:flex md:w-1/2 bg-[#FFF9ED] p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E67E22] rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        
        <div>
          <div className="flex items-center gap-2 mb-20 relative z-10">
            <div className="w-8 h-8 bg-[#E67E22] rounded-full flex items-center justify-center">
              <Heart className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight uppercase">ZeroLink</span>
          </div>
          
          <div className="text-[#8B4513] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3 relative z-10">
             <div className="w-8 h-[1px] bg-[#E67E22]/30"></div>
             Community Driven Mission
          </div>
          
          <h1 className="text-6xl font-display font-bold tracking-tight leading-[1.05] mb-12 text-[#2C3E50] relative z-10">
            Every Meal<br />
            <span className="text-[#E67E22]">Matters.</span>
          </h1>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-16 relative z-10 font-medium">
            Join a network that turns surplus food into community smiles. Simple, transparent, and built with care for those who need it most.
          </p>

          <div className="grid grid-cols-2 gap-8 relative z-10">
            <FeatureSnippet icon={Heart} title="Direct Impact" desc="Connecting your extra portions to neighbor organizations." />
            <FeatureSnippet icon={Utensils} title="Fresh Deliveries" desc="Timely redistribution ensures nutrition and dignity." />
          </div>
        </div>

        <div className="relative aspect-[16/9] bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#E67E22]/10 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Right Login / Selection Side */}
      <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
           <div className="flex gap-8 mb-12 text-sm font-bold">
             <button className="text-[#2C3E50] border-b-2 border-[#E67E22] pb-4 uppercase tracking-widest">Sign In</button>
             <button className="text-gray-400 uppercase tracking-widest pb-4 hover:text-[#2C3E50] transition-colors">Create Account</button>
           </div>

           <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Search size={14} /></div>
                   <input type="text" placeholder="your@email.com" className="w-full bg-[#FEFAF6] border border-gray-100 rounded-xl px-10 py-4 text-sm font-medium focus:outline-none focus:border-[#E67E22]/50 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
                  <button className="text-[10px] font-bold text-[#E67E22] uppercase tracking-widest">Forgot?</button>
                </div>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</div>
                   <input type="password" placeholder="••••••••" className="w-full bg-[#FEFAF6] border border-gray-100 rounded-xl px-10 py-4 text-sm font-medium focus:outline-none focus:border-[#E67E22]/50 transition-colors" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                 <input type="checkbox" id="keep-logged" className="w-4 h-4 rounded border-gray-300 text-[#E67E22] focus:ring-[#E67E22]" />
                 <label htmlFor="keep-logged" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer">Remember my session</label>
              </div>

              <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all shadow-xl shadow-orange-100 group">
                Enter Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>

           <div className="relative my-12 flex items-center">
              <div className="flex-1 h-[1px] bg-gray-100"></div>
              <span className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Or select your role</span>
              <div className="flex-1 h-[1px] bg-gray-100"></div>
           </div>

           <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <RoleCardEntry 
                  number="01" 
                  label="Donor" 
                  icon={Building2} 
                  desc="Restaurants & Households"
                  onClick={() => onSelectRole('DONOR')} 
                />
                 <RoleCardEntry 
                  number="02" 
                  label="NGO" 
                  icon={Heart} 
                  desc="Local Charities & Shelters"
                  onClick={() => onSelectRole('NGO')} 
                />
                 <RoleCardEntry 
                  number="03" 
                  label="Volunteer" 
                  icon={Truck} 
                  desc="Delivery & Coordination"
                  onClick={() => onSelectRole('VOLUNTEER')} 
                />
                 <RoleCardEntry 
                  number="04" 
                  label="Admin" 
                  icon={ShieldCheck} 
                  desc="Network Management"
                  onClick={() => onSelectRole('ADMIN')} 
                />
              </div>
           </div>

           <p className="mt-12 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
             New to the mission? <button className="text-[#E67E22] hover:underline underline-offset-4">Learn about our safety protocols</button>
           </p>
        </div>
      </div>
    </div>
  );
}

function FeatureSnippet({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-50 flex items-center justify-center">
        <Icon className="text-[#E67E22] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-[#2C3E50]">{title}</h3>
        <p className="text-[10px] text-gray-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}

function RoleCardEntry({ number, label, icon: Icon, desc, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-start p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#E67E22] hover:shadow-xl hover:shadow-orange-50 transition-all text-left relative overflow-hidden"
    >
      <div className="text-[10px] font-bold text-gray-200 mb-4 group-hover:text-[#E67E22] transition-colors">{number}</div>
      <Icon className="w-6 h-6 text-[#2C3E50] mb-3 group-hover:text-[#E67E22] transition-colors" />
      <div className="text-xs font-bold uppercase tracking-widest mb-1 text-[#2C3E50]">{label}</div>
      <div className="text-[10px] text-gray-400 font-medium leading-tight">{desc}</div>
    </button>
  );
}



