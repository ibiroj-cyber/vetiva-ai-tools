"use client";

import React, { useState, useEffect } from 'react';
import { TrendingDown, Clock, Users, DollarSign, AlertTriangle, ArrowRight, TrendingUp } from 'lucide-react';

export default function CalculatorPage() {
  const [lostToday, setLostToday] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // VERIFIED DATA FROM VETIVA (January 2026)
  const DAILY_LOSSES = {
    research: 339000,        // Research inefficiency
    roboWealth: 821000,      // RoboWealth gap
    griffin: 767000,         // Griffin lending
    etfGap: 10000000,        // ETF VALUATION GAP
    total: 11927000          // ₦11.9M/day total
  };

  const LOSS_PER_SECOND = DAILY_LOSSES.total / (24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
      setLostToday(prev => prev + LOSS_PER_SECOND);
    }, 1000);

    return () => clearInterval(interval);
  }, [LOSS_PER_SECOND]);

  const formatNaira = (amount: number) => {
    return `₦${Math.floor(amount).toLocaleString()}`;
  };

  const formatLargeNaira = (amount: number) => {
    if (amount >= 1000000000) return `₦${(amount / 1000000000).toFixed(2)}B`;
    if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`;
    return formatNaira(amount);
  };

  const lostThisYear = DAILY_LOSSES.total * 300;
  const lostNext5Years = DAILY_LOSSES.total * 365 * 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 animate-pulse" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Vetiva Capital Management</h1>
          </div>
          <h2 className="text-xl md:text-2xl text-red-600 font-semibold mb-2">Daily AI Opportunity Cost Analysis</h2>
          <p className="text-gray-600 text-xs text-gray-500">
            ETF NAV: ₦17.15B (verified) | Est. Total AUM: ₦60-75B | Research Team: 5-6 analysts
          </p>
        </div>

        {/* Live Counter */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-8 text-white shadow-2xl border-4 border-red-800">
          <div className="text-center">
            <div className="text-sm uppercase tracking-wider mb-4 opacity-90">Lost Since You Opened This Page</div>
            <div className="text-5xl md:text-7xl font-bold mb-4 tabular-nums">{formatNaira(lostToday)}</div>
            <div className="text-lg opacity-90">{formatNaira(LOSS_PER_SECOND)}/second • {secondsElapsed} seconds elapsed</div>
          </div>
        </div>

        {/* ETF Valuation Gap Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 md:p-8 mb-8 text-white shadow-2xl border-4 border-purple-800">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10" />
            <h3 className="text-2xl md:text-3xl font-bold">The ₦7.3B ETF Valuation Gap</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-sm opacity-90 mb-1">VG 30 ETF Gap</div>
              <div className="text-xl font-bold text-yellow-300">₦5.09B</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-sm opacity-90 mb-1">Banking ETF Gap</div>
              <div className="text-xl font-bold text-yellow-300">₦1.14B</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-sm opacity-90 mb-1">Total Gap</div>
              <div className="text-xl font-bold text-yellow-300">₦7.3B</div>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
            <div className="text-2xl font-bold">Close 50% of gap = ₦3.65B value creation</div>
            <div className="text-3xl font-bold text-yellow-300 mt-2">= ₦10M/day opportunity</div>
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200">
             <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-900">Research Team Bottleneck</h3>
             </div>
             <div className="text-2xl font-bold text-orange-600">{formatNaira(DAILY_LOSSES.research)}/day</div>
             <p className="text-sm text-gray-500 mt-2">Intelligence trapped in low-distribution models.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
             <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">Missing Robo-Advisory</h3>
             </div>
             <div className="text-2xl font-bold text-red-600">{formatNaira(DAILY_LOSSES.roboWealth)}/day</div>
             <p className="text-sm text-gray-500 mt-2">Competitors have 10x the retail reach.</p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-red-600 mb-8 text-center">
          <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-6">Total Daily Opportunity Cost</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-red-50 rounded-xl">
              <div className="text-sm text-gray-600">Daily</div>
              <div className="text-2xl font-bold text-red-600">{formatLargeNaira(DAILY_LOSSES.total)}</div>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <div className="text-sm text-gray-600">Yearly</div>
              <div className="text-2xl font-bold text-red-700">{formatLargeNaira(lostThisYear)}</div>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <div className="text-sm text-gray-600">5-Year Leakage</div>
              <div className="text-2xl font-bold text-red-800">{formatLargeNaira(lostNext5Years)}</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white shadow-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stop the Bleeding in 90 Days</h3>
          <p className="mb-8 opacity-90">Every day you wait costs ₦11.9M. Unlock your ₦7.3B ETF potential.</p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-lg flex items-center gap-2 mx-auto">
            Schedule Implementation Call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
