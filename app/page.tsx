import Link from 'next/link';
import { BarChart3, Calculator, ArrowRight, Shield, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          <span>Strategic AI Intelligence Suite</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Vetiva <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Meridian AI</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Bridging the gap between institutional-quality research and high-scale retail distribution through data-driven AI adoption.
        </p>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Dashboard Link */}
          <Link href="/dashboard" className="group relative p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
            <div className="absolute top-6 right-8 text-slate-700 group-hover:text-blue-500 transition-colors">
              <BarChart3 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 text-left">Competitive Intelligence</h2>
            <p className="text-slate-400 text-left mb-8 leading-relaxed">
              Compare Vetiva's AI maturity against fintech disruptors and traditional managers. Track the #8 to #1 trajectory.
            </p>
            <div className="flex items-center text-blue-400 font-semibold">
              Enter Dashboard <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Calculator Link */}
          <Link href="/calculator" className="group relative p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]">
            <div className="absolute top-6 right-8 text-slate-700 group-hover:text-orange-500 transition-colors">
              <Calculator className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 text-left">Revenue Leakage Tracker</h2>
            <p className="text-slate-400 text-left mb-8 leading-relaxed">
              Real-time analysis of the ₦11.9M daily opportunity cost of delayed AI adoption and research distribution.
            </p>
            <div className="flex items-center text-orange-400 font-semibold">
              Open Calculator <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-20 flex items-center justify-center gap-6 text-slate-500 border-t border-slate-900 pt-10">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Confidential Analysis</span>
          </div>
          <span className="text-slate-800">|</span>
          <span className="text-sm">Internal Strategic Preview 2026</span>
        </div>
      </div>
    </div>
  );
}