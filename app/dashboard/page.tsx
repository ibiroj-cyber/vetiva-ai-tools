"use client";

import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  AlertCircle,
  ArrowUpRight,
  Search,
  Globe,
  Smartphone
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line
} from 'recharts';

// Data for AI Maturity Comparison
const maturityData = [
  { name: 'Bamboo', score: 88, color: '#2563eb' },
  { name: 'Risevest', score: 85, color: '#3b82f6' },
  { name: 'Cowrywise', score: 82, color: '#60a5fa' },
  { name: 'Vetiva', score: 35, color: '#ef4444' }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Competitive AI Intelligence</h1>
            <p className="text-slate-400">Vetiva vs. Fintech Disruptors • January 2026 Analysis</p>
          </div>
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">Status: Strategic Gap Identified</span>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                -12.5x <TrendingUp className="w-4 h-4 rotate-180" />
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Retail Reach Gap</h3>
            <div className="text-2xl font-bold text-white">40k vs 500k</div>
            <p className="text-xs text-slate-500 mt-2">Vetiva vs Cowrywise Client Base</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl">
                <Zap className="w-6 h-6 text-indigo-500" />
              </div>
              <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                ₦11.9M <AlertCircle className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Daily Opportunity Cost</h3>
            <div className="text-2xl font-bold text-white">₦4.3B Annual</div>
            <p className="text-xs text-slate-500 mt-2">Revenue leaked to slow AI adoption</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <Target className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-emerald-500 text-sm font-medium flex items-center gap-1">
                +42% <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">ETF Value Unlock</h3>
            <div className="text-2xl font-bold text-white">₦7.3B Potential</div>
            <p className="text-xs text-slate-500 mt-2">Market Cap vs NAV Optimization</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-6">AI Maturity Score (%)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={maturityData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    width={80}
                  />
                  <Tooltip 
                    cursor={{fill: '#1e293b'}}
                    contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b'}}
                  />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={30}>
                    {maturityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-4">Calculated based on Robo-wealth features, AI distribution, and automation.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Strategic Vulnerabilities</h3>
            <div className="space-y-4">
              {[
                { title: 'Research Distribution', icon: Globe, status: 'Gated/Manual', threat: 'High' },
                { title: 'Retail Onboarding', icon: Smartphone, status: 'Friction-Heavy', threat: 'High' },
                { title: 'Investor Education', icon: Search, status: 'Legacy Content', threat: 'Medium' },
                { title: 'Asset Allocation', icon: Shield, status: 'Human-Led', threat: 'Medium' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.status}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    item.threat === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {item.threat} Threat
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion Footer */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">The Path to #1</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Closing the AI gap doesn't just match fintechs—it beats them by combining 
            Vetiva's institutional research with high-scale retail automation.
          </p>
          <div className="text-sm font-semibold text-blue-900 bg-blue-400/30 inline-block px-4 py-2 rounded-full">
            Target: 10x Client Growth by 2027
          </div>
        </div>
      </div>
    </div>
  );
}
