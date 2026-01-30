import React, { useState } from 'react';
import { TrendingDown, AlertCircle, CheckCircle, XCircle, ArrowRight, BarChart3, Target, Lock } from 'lucide-react';

const CompetitiveDashboard = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState('risevest');

  // AI Maturity Scores (out of 10)
  const competitors = {
    risevest: {
      name: 'Risevest',
      score: 8,
      segment: 'Fintech Disruptor',
      userBase: '300,000+',
      features: {
        roboAdvisory: true,
        aiChatbot: false,
        predictiveAnalytics: true,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: true
      },
      highlights: [
        'Automated, personalized global portfolios',
        'Auto-invest engine for recurring investments',
        'Dollar-denominated wealth management',
        '7.5x more users than Vetiva'
      ]
    },
    cowrywise: {
      name: 'Cowrywise',
      score: 7,
      segment: 'Fintech Disruptor',
      userBase: '500,000+',
      features: {
        roboAdvisory: true,
        aiChatbot: false,
        predictiveAnalytics: true,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: true
      },
      highlights: [
        'Recognized in SEC robo-advisor discussions',
        'Automated savings and investment plans',
        'Lifestyle-based portfolio construction',
        '12.5x more users than Vetiva'
      ]
    },
    bamboo: {
      name: 'Bamboo',
      score: 7,
      segment: 'Fintech Disruptor',
      userBase: '200,000+',
      features: {
        roboAdvisory: false,
        aiChatbot: false,
        predictiveAnalytics: true,
        automatedResearch: true,
        aiCreditScoring: false,
        personalization: true
      },
      highlights: [
        'AI-driven market insights and alerts',
        'Fractional investing in US stocks',
        'Real-time opportunity notifications',
        'Rich portfolio analytics'
      ]
    },
    piggyvest: {
      name: 'PiggyVest',
      score: 6,
      segment: 'Fintech Disruptor',
      userBase: '4,000,000+',
      features: {
        roboAdvisory: false,
        aiChatbot: false,
        predictiveAnalytics: true,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: true
      },
      highlights: [
        'Advanced automation (Autosave, SafeLock)',
        'Experiments with AI-driven insights',
        '100x more users than Vetiva',
        'Personality-driven experiences'
      ]
    },
    coronation: {
      name: 'Coronation AM',
      score: 4,
      segment: 'Traditional Manager',
      userBase: '~50,000',
      features: {
        roboAdvisory: false,
        aiChatbot: false,
        predictiveAnalytics: false,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: false
      },
      highlights: [
        'Publishes AI thought leadership',
        'Recognizes robo-advisor potential',
        'No concrete AI products yet',
        'Concept-stage on AI adoption'
      ]
    },
    arm: {
      name: 'ARM Investments',
      score: 3,
      segment: 'Traditional Manager',
      userBase: '~60,000',
      features: {
        roboAdvisory: false,
        aiChatbot: false,
        predictiveAnalytics: false,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: false
      },
      highlights: [
        'Strong research and analytics',
        'Digital channels available',
        'No AI-branded features',
        'Focus on human expertise'
      ]
    },
    stanbic: {
      name: 'Stanbic IBTC AM',
      score: 3,
      segment: 'Traditional Manager',
      userBase: '~70,000',
      features: {
        roboAdvisory: false,
        aiChatbot: false,
        predictiveAnalytics: false,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: false
      },
      highlights: [
        'Digital channels and online access',
        'Group-level tech infrastructure',
        'No public AI features',
        'Traditional asset management model'
      ]
    },
    vetiva: {
      name: 'Vetiva Capital',
      score: 2.5,
      segment: 'Traditional/Fintech Hybrid',
      userBase: '~40,000',
      aum: '₦60-75B (est.)',
      etfNav: '₦17.15B (verified)',
      researchTeam: '5-6 analysts',
      features: {
        roboAdvisory: false,
        aiChatbot: false,
        predictiveAnalytics: false,
        automatedResearch: false,
        aiCreditScoring: false,
        personalization: false
      },
      highlights: [
        'Azure-based digital platforms',
        'Strong ETF capabilities (₦17.15B verified NAV)',
        'High-quality research GATED behind portals',
        'NO AI/ML features - research bottleneck'
      ]
    }
  };

  const vetivaScore = competitors.vetiva.score;
  const competitorData = competitors[selectedCompetitor];
  const scoreDifference = competitorData.score - vetivaScore;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Competitive Intelligence Dashboard
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-2">
            Nigerian Financial Services AI Adoption - January 2026
          </h2>
          <p className="text-gray-600">
            Based on verified Vetiva data + comprehensive industry research
          </p>
        </div>

        {/* The Brutal Truth - Vetiva's Core Problem */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-red-700 mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-10 h-10" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Vetiva's Core Problem: High-Quality Intelligence Trapped in Low-Distribution Models
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">What Vetiva Has (Strengths):</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>₦17.15B verified ETF NAV</strong> (VG 30, Banking, Consumer, Industrial, S&P Bond)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>₦60-75B estimated total AUM</strong> across 5 subsidiaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>A+(f) rated Money Market Fund</strong> by Agusto & Co</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>High-quality research</strong> (H2 2025 sector reports, macro analysis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>5-6 dedicated analysts</strong> (appropriate for ₦65B AUM)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">The Bottleneck (Critical Gap):</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Research gated behind portals</strong> (VetivaResearch.com, ResearchPool) - not scalable</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>5-6 analysts serving 5 subsidiaries</strong> + 40,000 clients = impossible scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>₦7.3B ETF valuation gap</strong> (market cap 42% below NAV) due to poor retail education</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>No AI-powered distribution</strong> - competitors with robo-advisors have 7-100x more users</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Manual processes everywhere</strong> - no force multiplier for lean team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-400/20 backdrop-blur rounded-xl p-4 border-2 border-yellow-300">
            <p className="text-lg font-bold text-center">
              📊 The Diagnosis: You have institutional-quality intelligence but retail-hostile distribution.
              <br/>AI transforms your gated research into scalable, personalized insights for every client segment.
            </p>
          </div>
        </div>

        {/* Overall Ranking */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-red-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Vetiva's AI Maturity Ranking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6">
              <div className="text-sm text-gray-600 mb-2">Vetiva's AI Maturity Score</div>
              <div className="text-6xl font-bold text-red-600 mb-4">
                {vetivaScore}<span className="text-3xl text-gray-400">/10</span>
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                Ranked #8 out of 8 Analyzed Firms
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Behind ALL fintech disruptors and most traditional managers
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-red-200">
                <div className="text-xs text-gray-500 mb-1">Verified Data:</div>
                <div className="text-sm space-y-1">
                  <div>• ETF NAV: {competitors.vetiva.etfNav}</div>
                  <div>• Est. AUM: {competitors.vetiva.aum}</div>
                  <div>• Research Team: {competitors.vetiva.researchTeam}</div>
                  <div>• User Base: {competitors.vetiva.userBase}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-semibold">Leaders (7-8/10):</span>
                <span className="text-sm text-gray-600">Risevest, Cowrywise, Bamboo</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-semibold">Middle (4-6/10):</span>
                <span className="text-sm text-gray-600">PiggyVest, Coronation</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="font-semibold">Laggards (3/10):</span>
                <span className="text-sm text-gray-600">ARM, Stanbic IBTC</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-100 rounded-lg border-2 border-red-300">
                <span className="font-bold text-red-700">Dead Last (2.5/10):</span>
                <span className="text-sm font-bold text-red-700">VETIVA</span>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="text-sm font-bold text-blue-900 mb-2">The Paradox:</div>
                <div className="text-xs text-gray-700">
                  Vetiva has BETTER fundamentals than most competitors (₦65B AUM, A+ rated funds, quality research)
                  but WORSE distribution technology. AI closes this gap in 90 days.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Comparison Selector */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Compare Vetiva Against:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(competitors)
              .filter(([key]) => key !== 'vetiva')
              .map(([key, comp]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCompetitor(key)}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    selectedCompetitor === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-sm">{comp.name}</div>
                  <div className="text-xs opacity-75 mt-1">{comp.score}/10 • {comp.userBase}</div>
                </button>
              ))}
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Vetiva Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Vetiva Capital</h3>
                <p className="text-sm text-gray-600">{competitors.vetiva.segment}</p>
                <p className="text-xs text-gray-500 mt-1">₦17.15B ETF NAV (verified) • ~40K users</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-red-600">{vetivaScore}</div>
                <div className="text-xs text-gray-500">AI Score</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">AI Capabilities:</div>
              <div className="space-y-2">
                {Object.entries(competitors.vetiva.features).map(([feature, hasIt]) => (
                  <div key={feature} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 capitalize">{feature.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="flex items-center gap-1">
                      {hasIt ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-semibold">YES</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-red-600" />
                          <span className="text-red-600 font-semibold">NO</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">Current State:</div>
              <ul className="space-y-1 text-sm text-gray-600">
                {competitors.vetiva.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Competitor Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{competitorData.name}</h3>
                <p className="text-sm text-gray-600">{competitorData.segment}</p>
                <p className="text-xs text-gray-500 mt-1">{competitorData.userBase} users</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-green-600">{competitorData.score}</div>
                <div className="text-xs text-gray-500">AI Score</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">AI Capabilities:</div>
              <div className="space-y-2">
                {Object.entries(competitorData.features).map(([feature, hasIt]) => (
                  <div key={feature} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 capitalize">{feature.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="flex items-center gap-1">
                      {hasIt ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-semibold">YES</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 font-semibold">NO</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">Competitive Advantages:</div>
              <ul className="space-y-1 text-sm text-gray-600">
                {competitorData.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* The Gap Analysis */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white shadow-2xl mb-8">
          <div className="text-center mb-6">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-2">The Competitive Gap</h3>
            <p className="text-lg opacity-90">
              {competitorData.name} is {scoreDifference.toFixed(1)} points ahead on AI maturity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-2">
                {Object.values(competitorData.features).filter(Boolean).length}
              </div>
              <div className="text-sm opacity-90">
                {competitorData.name}'s AI Features
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-2">
                {Object.values(competitors.vetiva.features).filter(Boolean).length}
              </div>
              <div className="text-sm opacity-90">
                Vetiva's AI Features
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center border-2 border-white/30">
              <div className="text-3xl font-bold mb-2">
                {Object.values(competitorData.features).filter(Boolean).length - 
                 Object.values(competitors.vetiva.features).filter(Boolean).length}
              </div>
              <div className="text-sm font-semibold">
                Feature Gap
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-lg font-bold mb-3">What Vetiva is Missing:</div>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(competitorData.features)
                .filter(([feature, hasIt]) => hasIt && !competitors.vetiva.features[feature])
                .map(([feature]) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4" />
                    <span className="capitalize">{feature.replace(/([A-Z])/g, ' $1')}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Market Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What This Gap Costs Vetiva (Daily)
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-300">
              <TrendingDown className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-700 mb-2">₦10M</div>
              <div className="text-sm text-gray-600 mb-3">ETF Valuation Gap Daily Cost</div>
              <div className="text-xs text-gray-500">
                ₦7.3B total gap (market cap 42% below NAV)<br/>
                Closing 50% in 18 months = ₦10M/day opportunity
              </div>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-xl border-2 border-red-200">
              <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-red-700 mb-2">₦821K</div>
              <div className="text-sm text-gray-600 mb-3">RoboWealth Gap Daily Cost</div>
              <div className="text-xs text-gray-500">
                40K users vs Cowrywise's 500K<br/>
                Missing ₦300M annual revenue opportunity
              </div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
              <Target className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-orange-700 mb-2">₦1.1M</div>
              <div className="text-sm text-gray-600 mb-3">Research + Griffin Gap</div>
              <div className="text-xs text-gray-500">
                Research bottleneck: ₦339K/day<br/>
                Griffin AI gap: ₦767K/day
              </div>
            </div>
          </div>

          <div className="mt-6 text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-300">
            <div className="text-4xl font-bold text-gray-900 mb-2">₦11.9M / DAY TOTAL</div>
            <div className="text-lg text-gray-600">₦4.35B annually • ₦21.75B over 5 years</div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              How Meridian AI Closes The Gap
            </h3>
            <p className="text-lg opacity-90">
              From #8 to #1 in 12 months with verified, data-driven AI infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">90 Days</div>
              <div className="text-sm opacity-90 mb-4">Research Copilot Live</div>
              <div className="text-xs">
                Unlocks gated research, 3x analyst productivity, scalable distribution to all 40K clients
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">9 Months</div>
              <div className="text-sm opacity-90 mb-4">RoboWealth Platform + ETF Push</div>
              <div className="text-xs">
                Close ₦7.3B valuation gap, match Cowrywise distribution, ₦750M+ new revenue
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">12 Months</div>
              <div className="text-sm opacity-90 mb-4">Griffin AI Underwriter Live</div>
              <div className="text-xs">
                ₦4B loan book (from ₦1.5B), 65% approval rate, 3% NPLs, ₦280M+ annual gain
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 mb-6">
              <div className="text-xl md:text-2xl font-bold mb-3">
                From AI Laggard (#8) to Market Leader (#1) in 12 Months
              </div>
              <div className="text-lg opacity-90 mb-2">
                ₦600M investment (