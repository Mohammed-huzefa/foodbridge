/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Box, 
  Car, 
  ChevronRight, 
  Clock, 
  Grid, 
  Heart,
  History, 
  Home, 
  Layers, 
  LayoutDashboard, 
  LogOut, 
  Map as MapIcon, 
  Menu, 
  Navigation, 
  Plus, 
  Search, 
  ShieldCheck, 
  Truck, 
  Users, 
  Utensils 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  calculateExpiry, 
  findBestMatch, 
  generateRoute, 
  calculateImpact, 
  FoodCategory, 
  StorageType, 
  Priority, 
  FoodBatch,
  ExpiryAnalysis
} from './lib/engine';
import { SIM_DONORS, SIM_NODES } from './lib/mockData';

// Pages
import Landing from './components/Landing';
import RoleSelection from './components/RoleSelection';
import AdminDashboard from './components/AdminDashboard';
import DonorDashboard from './components/DonorDashboard';
import NGODashboard from './components/NGODashboard';
import VolunteerDashboard from './components/VolunteerDashboard';
import ImpactDashboard from './components/ImpactDashboard';

export type Role = 'DONOR' | 'NGO' | 'VOLUNTEER' | 'ADMIN' | null;

export default function App() {
  const [view, setView] = useState<'landing' | 'role-selection' | 'dashboard'>('landing');
  const [role, setRole] = useState<Role>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (view === 'landing') {
    return <Landing onEnter={() => setView('role-selection')} />;
  }

  if (view === 'role-selection') {
    return (
      <RoleSelection 
        onSelectRole={(r) => {
          setRole(r);
          setView('dashboard');
        }} 
      />
    );
  }

  const renderContent = () => {
    // If not matching a dashboard tab, show activeTab content
    if (activeTab === 'reports') return <ImpactDashboard />;
    
    switch (role) {
      case 'ADMIN': return <AdminDashboard onSignOut={() => setView('landing')} />;
      case 'DONOR': return <DonorDashboard onSignOut={() => setView('landing')} />;
      case 'NGO': return <NGODashboard onSignOut={() => setView('landing')} />;
      case 'VOLUNTEER': return <VolunteerDashboard onSignOut={() => setView('landing')} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] flex">
      {/* Sidebar - Desktop Only */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E67E22] rounded-full flex items-center justify-center">
            <Heart className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight uppercase">ZeroLink<span className="text-[#E67E22]">.</span></span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Community Impact" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={Utensils} label="Food Offerings" active={activeTab === 'inventory'} onClick={() => setActiveTab('inventory')} />
          <SidebarItem icon={Navigation} label="Delivery Routes" active={activeTab === 'path'} onClick={() => setActiveTab('path')} />
          <SidebarItem icon={Activity} label="Impact Reports" active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
          
          <div className="pt-10 pb-4">
            <span className="px-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Network</span>
          </div>
          
          <SidebarItem icon={Users} label="Our Volunteers" active={activeTab === 'fleet'} onClick={() => setActiveTab('fleet')} />
          <SidebarItem icon={ShieldCheck} label="Safety Guidelines" active={activeTab === 'config'} onClick={() => setActiveTab('config')} />
        </nav>

        <div className="p-8 border-t border-gray-50 space-y-4">
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-100 text-sm">
            <Plus className="w-4 h-4" />
            SHARE SURPLUS
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setView('landing')}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#E67E22] transition-colors bg-[#FEFAF6] rounded-xl"
            >
              <LogOut className="w-3 h-3" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto bg-[#FEFAF6]">
        {renderContent()}
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
        active ? 'bg-primary/10 text-black font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-black'
      }`}
    >
      <Icon className={`w-5 h-5 ${active ? 'text-primary' : 'group-hover:text-primary'}`} />
      <span className="text-sm">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />}
    </button>
  );
}

