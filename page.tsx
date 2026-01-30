import Link from 'next/link';
import { BarChart3, Calculator, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Vetiva Intelligence Suite
          </h1>
          <p className="text-slate-400 text-lg">
            Strategic AI Adoption & Revenue Leakage Analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dashboard Link */}
          <Link href="/dashboard" className="group p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all">
            <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Competitive Dashboard</h2>
            <p className="text-slate-400 mb-6">Analyze Vetiva's AI maturity vs. Risevest, Cowrywise, and Bamboo.</p>
            <div className="flex items-center text-blue-500 font-semibold">
              Enter Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Calculator Link */}
          <Link href="/calculator" className="group p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all">
            <Calculator className="w-12 h-12 text-orange-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Leakage Calculator</h2>
            <p className="text-slate-400 mb-6">Real-time tracking of the ₦11.9M daily opportunity cost.</p>
            <div className="flex items-center text-orange-500 font-semibold">
              Open Calculator <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}