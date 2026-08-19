import React, { useState } from 'react';
import { 
  AlertOctagon, 
  Flame, 
  ShieldAlert, 
  DollarSign, 
  Cpu, 
  Activity, 
  Lock, 
  Truck, 
  Database, 
  HeartPulse, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Sparkles, 
  ArrowRight,
  TrendingDown,
  Scale,
  Users,
  AlertTriangle,
  Layers
} from 'lucide-react';
import { CompanyOverviewData, DivisionFinancial } from '../types';

interface UrgentAsksViewProps {
  overview: CompanyOverviewData;
  divisions: DivisionFinancial[];
  onNavigateTab: (tab: 'urgent-asks' | 'financials' | 'divisions' | 'files' | 'timeline' | 'scenarios' | 'ai-advisor') => void;
  onAskAI: (prompt: string) => void;
}

export const UrgentAsksView: React.FC<UrgentAsksViewProps> = ({
  overview,
  divisions,
  onNavigateTab,
  onAskAI,
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'summary' | 'needs'>('all');

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Alert Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-amber-950/60 border border-rose-800/60 p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-900/60 border border-rose-700/60 text-rose-300 text-xs font-semibold uppercase tracking-wider">
              <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
              <span>Turnaround Command Briefing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              NovaCorp Industries: Strategic Summary & Urgent Needs
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Assessment of <code className="text-amber-300 font-mono font-semibold">00_company_overview.md</code>. NovaCorp faces a simultaneous multi-divisional solvency crisis driven by severe data silos, regulatory exposure, and operational fraud.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              id="btn-ask-gemini-turnaround"
              onClick={() => onAskAI("Summarize 00_company_overview.md and give me the prioritized 90-day turnaround plan for NovaCorp.")}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-4 py-2.5 rounded-xl text-xs shadow-lg shadow-purple-950/50 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Run AI Forensic Brief</span>
            </button>

            <button
              id="btn-goto-simulator"
              onClick={() => onNavigateTab('scenarios')}
              className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer"
            >
              <Activity className="w-4 h-4" />
              <span>Simulate Turnaround</span>
            </button>
          </div>
        </div>
      </div>

      {/* PART 1: COMPREHENSIVE SUMMARY OF 00_company_overview.md */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Part 1: Summary of <span className="text-amber-400 font-mono">00_company_overview.md</span>
              </h3>
              <p className="text-xs text-slate-400">
                Core corporate trajectory, financial contraction, and 5-division crisis profile
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('files')}
            className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center space-x-1 cursor-pointer"
          >
            <span>View Full Raw Document</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Snapshot Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">Revenue Drop</span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-lg font-bold font-mono text-rose-400">₡2.1B</span>
              <span className="text-xs text-rose-500 font-mono">(-38%)</span>
            </div>
            <span className="text-[10px] text-slate-400">Down from ₡3.4B peak</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">Cash on Hand</span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-lg font-bold font-mono text-emerald-400">₡210M</span>
              <span className="text-xs text-rose-500 font-mono">(-76%)</span>
            </div>
            <span className="text-[10px] text-amber-400 font-semibold">~3.6 mos runway</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">Surging Debt</span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-lg font-bold font-mono text-rose-400">₡1.8B</span>
              <span className="text-xs text-rose-400 font-mono">(+64%)</span>
            </div>
            <span className="text-[10px] text-slate-400">Up from ₡1.1B</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">Net Income FY35</span>
            <div className="mt-1">
              <span className="text-lg font-bold font-mono text-rose-400">(₡420M)</span>
            </div>
            <span className="text-[10px] text-rose-400">Operating margin: -8%</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">Stock Price (NVC)</span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-lg font-bold font-mono text-amber-400">₡41.20</span>
              <span className="text-xs text-rose-400 font-mono">(-47%)</span>
            </div>
            <span className="text-[10px] text-slate-400">Down from ₡88 IPO</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">Headcount Cut</span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-lg font-bold font-mono text-slate-200">4,200</span>
              <span className="text-xs text-rose-400 font-mono">(-28%)</span>
            </div>
            <span className="text-[10px] text-slate-400">Down from 5,800 peak</span>
          </div>
        </div>

        {/* Narrative Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Historical Rise and Systemic Decline</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Founded in 2031 with ₡12M seed funding, NovaCorp grew rapidly on the breakthrough <strong className="text-white">Synapse-7 neural interface</strong> (34% market share). The company went public in 2033 at ₡88/share, reaching a <strong className="text-white">₡5.2B peak valuation</strong> in Q4 2034. The unraveling began in Q1 2035 through cascading product defects, security coverups, unmaintained servers, and supply chain fraud.
            </p>
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Status: <span className="text-rose-400 font-semibold">Board Emergency Restructuring</span></span>
              <span>Headquarters: <span className="text-slate-200">Sector 7, Neo-Ghost City</span></span>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>The Root Cause: Fatal Divisional Silos</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              As stated in the corporate assessment: <em className="text-amber-200/90 font-serif">“No single system aggregated warning signals into actionable intelligence. Each division operated its own data, and cross-divisional visibility was limited to quarterly board reviews.”</em> Early flags (cost spikes, quality anomalies, incident alerts) were buried in divisional silos for 18 months before collapsing the company.
            </p>
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Leadership: <span className="text-slate-200">CEO Absent, CFO Forensic Audit</span></span>
              <button 
                onClick={() => onNavigateTab('divisions')}
                className="text-amber-400 hover:text-amber-300 font-medium cursor-pointer"
              >
                Inspect 5 Divisions &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 5 Divisions Breakdown Grid */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Status of NovaCorp's 5 Core Operating Divisions</span>
            </h4>
            <span className="text-xs text-slate-400">Derived from 00_company_overview.md</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Cyberware */}
            <div className="bg-slate-900/90 border border-rose-900/40 p-3.5 rounded-xl space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs flex items-center space-x-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cyberware</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800/60">CRITICAL</span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-3">
                Synapse-7 Rev B has <strong className="text-rose-300">12% failure rate</strong>, 47 injuries, ₡95M recall, and active NGCSB standards board investigation.
              </p>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                VP: <span className="text-slate-200">Dmitri Volkov</span> | Rev: <span className="text-amber-300">₡680M</span>
              </div>
            </div>

            {/* NetSec */}
            <div className="bg-slate-900/90 border border-amber-900/40 p-3.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs flex items-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  <span>NetSec</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800/60">HIGH RISK</span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-3">
                Lost 4 major clients (<strong className="text-amber-200">Meridian Financial ₡85M/yr</strong>, Titan, Pacific Rim) after <strong className="text-rose-300">Incident #47</strong> coverup leaked.
              </p>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                VP: <span className="text-slate-200">Sarah Chen</span> | Rev: <span className="text-amber-300">₡420M</span>
              </div>
            </div>

            {/* LogiChain */}
            <div className="bg-slate-900/90 border border-rose-900/40 p-3.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs flex items-center space-x-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>LogiChain</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800/60">CRITICAL</span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-3">
                <strong className="text-rose-300">34% delays &gt; 2 weeks</strong>, vendor costs +28% YoY on flat volume. CFO active forensic audit into payment kickbacks.
              </p>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                VP: <span className="text-slate-200">Viktor Kozlov</span> | Rev: <span className="text-amber-300">₡510M</span>
              </div>
            </div>

            {/* DataVault */}
            <div className="bg-slate-900/90 border border-amber-900/40 p-3.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs flex items-center space-x-1.5">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span>DataVault</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800/60">HIGH RISK</span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-3">
                4 major outages in 6 mos including <strong className="text-rose-300">72-hour downtime</strong> (1,200 clients affected). Retention collapsed from 89% to 61%.
              </p>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                VP: <span className="text-slate-200">Tomoko Sato</span> | Rev: <span className="text-amber-300">₡340M</span>
              </div>
            </div>

            {/* BioTech */}
            <div className="bg-slate-900/90 border border-rose-900/40 p-3.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs flex items-center space-x-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                  <span>BioTech</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800/60">CRITICAL</span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-3">
                <strong className="text-rose-300">₡380M class action</strong> on ECHO cardiac regulator (<strong className="text-rose-300">12 deaths</strong>, 200+ events; defect known 8 months prior).
              </p>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                VP: <span className="text-slate-200">Dr. Yuki Tanaka</span> | Rev: <span className="text-amber-300">₡150M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: WHAT NOVACORP NEEDS MOST */}
      <section className="space-y-5">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
                <span>Part 2: What NovaCorp Needs Most</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-950 text-rose-300 border border-rose-800">
                  THE 5 URGENT IMPERATIVES
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Prioritized triage imperatives required to prevent Chapter 11 bankruptcy and survive the next 90 days
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('scenarios')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>Model in Turnaround Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* The 5 Urgent Needs Cards */}
        <div className="space-y-4">
          {/* 1. Cross-Divisional Signal Aggregation Hub */}
          <div className="bg-slate-900 border-l-4 border-amber-500 border-y border-r border-slate-800 p-5 rounded-r-2xl shadow-lg hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-bold font-mono">1</span>
                  <h4 className="text-base font-bold text-white">
                    Unified Cross-Divisional Crisis Intelligence & Signal Ingestion Hub
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">CORE DEFECT FIX</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                  <strong>The Root Failure:</strong> NovaCorp’s collapse occurred because divisional silos hid 18 months of compounding warning signals. NetSec hid Incident #47; Cyberware suppressed Synapse-7 thermal defect data; LogiChain masked vendor price inflation; BioTech withheld ECHO cardiac failure reports.
                </p>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">Required Urgent Action:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li><strong>Continuous File & Log Ingestion:</strong> Ingest all divisional CSVs, audit memos, customer defect complaints, and server uptime logs into this single platform (use the <em>Investigation Files</em> hub).</li>
                    <li><strong>Real-time AI Forensic Cross-Correlation:</strong> Automatically flag multi-divisional risk chains (e.g. LogiChain vendor delays triggering Cyberware production shortcuts).</li>
                    <li><strong>Board Audit Transparency:</strong> Provide unfiltered live risk scorecards to CFO Diana Frost and the Board Turnaround Committee.</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('files')}
                className="shrink-0 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Load Investigation Files</span>
              </button>
            </div>
          </div>

          {/* 2. Cash Preservation & Runway Stabilization */}
          <div className="bg-slate-900 border-l-4 border-rose-500 border-y border-r border-slate-800 p-5 rounded-r-2xl shadow-lg hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs font-bold font-mono">2</span>
                  <h4 className="text-base font-bold text-white">
                    Emergency Cash Preservation & Liquidity Runway Defense
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800">SOLVENCY THREAT</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                  <strong>The Math:</strong> Cash has plunged to <strong className="text-emerald-400">₡210M</strong> (-76%) against <strong className="text-rose-400">₡1.8B debt</strong>. With a quarterly net loss of <strong>-₡145M</strong> and operating cash burn of <strong>~₡58M-₡88M/quarter</strong>, NovaCorp has only <strong>3.6 months of cash runway</strong> before default without emergency intervention.
                </p>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wide">Required Urgent Action:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li><strong>Immediate Capex Freeze:</strong> Freeze all non-essential corporate overhead (₡41.3M corporate burn) and secondary R&D expenditures.</li>
                    <li><strong>Emergency Credit Line Extension:</strong> Negotiate standstill covenants with primary debt syndicates before Q2 board review.</li>
                    <li><strong>Cash Reallocation to Positive ROI Units:</strong> Protect NetSec (86.2% margin, +₡37.5M op income) and DataVault (+₡13.7M op income).</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('financials')}
                className="shrink-0 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Inspect Burn Trends</span>
              </button>
            </div>
          </div>

          {/* 3. BioTech Lawsuit & Cyberware Recall Firewalls */}
          <div className="bg-slate-900 border-l-4 border-rose-600 border-y border-r border-slate-800 p-5 rounded-r-2xl shadow-lg hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-rose-600/20 text-rose-400 flex items-center justify-center text-xs font-bold font-mono">3</span>
                  <h4 className="text-base font-bold text-white">
                    BioTech Lawsuit (₡380M) & Cyberware Recall (12% Defect) Legal-Regulatory Firewalls
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800">FATAL LIABILITY</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                  <strong>The Existential Exposure:</strong> Patient v. NovaCorp (Case #NGC-2036-00847) demands <strong className="text-rose-400">₡380M</strong> for 12 deaths and 200+ adverse events linked to the ECHO cardiac regulator, which exceeds total cash on hand. Meanwhile, Cyberware faces a <strong>₡95M recall</strong> and NGCSB license revocation for 47 Synapse-7 burn injuries.
                </p>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wide">Required Urgent Action:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li><strong>Structured Multi-Year Settlement:</strong> Negotiate a structured insurance-backed settlement (e.g. ₡140M over 4 years) to prevent an immediate lump-sum default.</li>
                    <li><strong>Full Voluntary Global Product Recall:</strong> Remove all defective ECHO and Synapse-7 Rev B hardware from market immediately to halt compounding punitive damages.</li>
                    <li><strong>Leadership Accountability:</strong> Institute independent clinical oversight ombudsman in BioTech; replace defensive posture in Cyberware.</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onAskAI("Draft a legal risk containment and structured settlement strategy for the BioTech ₡380M class action lawsuit.")}
                className="shrink-0 bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-800 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>AI Legal Strategy</span>
              </button>
            </div>
          </div>

          {/* 4. LogiChain Forensic Audit & Cost Clawback */}
          <div className="bg-slate-900 border-l-4 border-amber-600 border-y border-r border-slate-800 p-5 rounded-r-2xl shadow-lg hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600/20 text-amber-300 flex items-center justify-center text-xs font-bold font-mono">4</span>
                  <h4 className="text-base font-bold text-white">
                    LogiChain Vendor Fraud Elimination & +28% Price Gouging Clawback
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">FRAUD & REVENUE BLEED</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                  <strong>The Operational Parasite:</strong> LogiChain is running a <strong className="text-rose-400">-₡24.7M operating deficit</strong> on ₡85.2M OpEx. Delivery delays hit 34% while vendor procurement surged <strong>+28% YoY on flat volume</strong>. CFO Diana Frost's audit reveals <strong>₡42M paid to paper shell companies</strong> with deliberate approval threshold bypasses.
                </p>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">Required Urgent Action:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li><strong>Vendor Payment Freeze:</strong> Immediately block disbursements to the 3 flagged entities (Apex Logistics, Hyperion Freight, Sector 9 Routing).</li>
                    <li><strong>Clawback & Criminal Referral:</strong> File recovery actions for the ₡42M in fraudulent disbursements and refer internal managers for criminal prosecution.</li>
                    <li><strong>Re-tender Open Logistics Auction:</strong> Reset vendor contracts to competitive benchmark tariffs, immediately saving ~₡25M/quarter.</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('files')}
                className="shrink-0 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>View Vendor Audit File</span>
              </button>
            </div>
          </div>

          {/* 5. NetSec Trust Recovery & DataVault Infrastructure Capex */}
          <div className="bg-slate-900 border-l-4 border-blue-500 border-y border-r border-slate-800 p-5 rounded-r-2xl shadow-lg hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold font-mono">5</span>
                  <h4 className="text-base font-bold text-white">
                    NetSec Client Trust Rehabilitation & DataVault Infrastructure Modernization
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950 text-blue-300 border border-blue-800">REVENUE DEFENSE</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                  <strong>The Margin Engines:</strong> NetSec (86.2% margin, +₡37.5M op income) and DataVault (+₡13.7M op income) are NovaCorp's only profitable divisions, yet both are self-destructing. NetSec lost <strong>₡150M+ ARR</strong> (including Meridian Financial ₡85M) due to Incident #47 secrecy. DataVault client retention crashed from 89% to <strong>61%</strong> due to zero capex upgrades since 2033 and a <strong>72-hour system outage</strong>.
                </p>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wide">Required Urgent Action:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li><strong>Declassify Incident #47 Post-Mortem:</strong> Publish verified third-party security remediation report to win back Meridian and Titan Defense.</li>
                    <li><strong>Emergency ₡18M Capex for DataVault:</strong> Modernize obsolete 2033 hardware nodes into fault-tolerant containerized clusters to guarantee 99.99% SLA.</li>
                    <li><strong>Empower Division VPs Chen & Sato:</strong> Remove CTO/CEO administrative roadblocks preventing operational modernization.</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('divisions')}
                className="shrink-0 bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Database className="w-3.5 h-3.5" />
                <span>View NetSec & DataVault</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Launchpad to Next Actions */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-base font-bold text-white">Ready to deep-dive into the investigation?</h4>
          <p className="text-xs text-slate-400">
            Load custom CSVs/logs, model turnaround cash flow scenarios, or run AI forensic queries.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => onNavigateTab('files')}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
          >
            Load Investigation Files
          </button>
          <button
            onClick={() => onNavigateTab('financials')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            Explore Financial Dashboards
          </button>
          <button
            onClick={() => onNavigateTab('ai-advisor')}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer"
          >
            Ask AI Turnaround Copilot
          </button>
        </div>
      </div>
    </div>
  );
};
