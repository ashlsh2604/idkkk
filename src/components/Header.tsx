import React from 'react';
import { 
  Building2, 
  AlertTriangle, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  ShieldAlert, 
  FileText, 
  BarChart3, 
  Layers, 
  GitBranch, 
  Sliders, 
  Sparkles, 
  Upload
} from 'lucide-react';
import { CompanyOverviewData } from '../types';

interface HeaderProps {
  overview: CompanyOverviewData;
  activeTab: 'urgent-asks' | 'financials' | 'divisions' | 'files' | 'timeline' | 'scenarios' | 'ai-advisor';
  setActiveTab: (tab: 'urgent-asks' | 'financials' | 'divisions' | 'files' | 'timeline' | 'scenarios' | 'ai-advisor') => void;
  fileCount: number;
  onOpenUpload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  overview,
  activeTab,
  setActiveTab,
  fileCount,
  onOpenUpload,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 shadow-xl text-slate-100">
      {/* Top Emergency Status Bar */}
      <div className="bg-rose-950/80 border-b border-rose-800/60 px-4 py-1.5 text-xs text-rose-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 font-medium">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="font-semibold tracking-wide uppercase text-rose-300">Executive Alert:</span>
          <span>Board Emergency Session Active — Chapter 11 vs Acquisition vs Forensic Turnaround</span>
        </div>
        <div className="flex items-center space-x-4 text-xs font-mono">
          <span className="text-slate-300">HQ: Neo-Ghost City, Sector 7</span>
          <span className="text-amber-300 font-semibold">Cash Runway: ~3.6 Months Remaining</span>
        </div>
      </div>

      {/* Main Brand & Ticker Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Left Brand */}
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-950/50 border border-amber-400/30">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2.5">
              <h1 className="text-lg font-bold tracking-tight text-white font-sans">
                NovaCorp Industries
              </h1>
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-800 text-amber-400 border border-slate-700">
                NVC : ₡{overview.stockPrice.toFixed(2)}
              </span>
              <span className="flex items-center text-xs font-mono font-semibold text-rose-400 bg-rose-950/50 px-1.5 py-0.5 rounded border border-rose-900/50">
                <TrendingDown className="w-3 h-3 mr-1 inline" />
                {overview.stockChangeYTD}% YTD
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Cross-Divisional Crisis Intelligence & Turnaround Command Center
            </p>
          </div>
        </div>

        {/* Right Metric Quick-Chips */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Cash on Hand</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">{overview.cashOnHand}</span>
            <span className="text-[10px] text-rose-400 ml-1.5 font-mono">(-76% YoY)</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Total Debt</span>
            <span className="text-rose-400 font-bold font-mono text-sm">{overview.debt}</span>
            <span className="text-[10px] text-rose-300 ml-1.5 font-mono">(+64%)</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">FY35 Net Loss</span>
            <span className="text-amber-400 font-bold font-mono text-sm">{overview.netIncomeFY2035}</span>
          </div>

          <button
            id="btn-upload-trigger"
            onClick={onOpenUpload}
            className="flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-md shadow-amber-500/20 text-xs cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Load Files ({fileCount})</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto no-scrollbar border-t border-slate-800">
        <nav className="flex space-x-1 py-1" aria-label="Tabs">
          <button
            id="tab-urgent-asks"
            onClick={() => setActiveTab('urgent-asks')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'urgent-asks'
                ? 'bg-amber-500/15 text-amber-300 border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>1. Urgent Asks & Summary</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono">PRIORITY</span>
          </button>

          <button
            id="tab-financials"
            onClick={() => setActiveTab('financials')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'financials'
                ? 'bg-amber-500/15 text-amber-300 border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Financials & Burn Rate</span>
          </button>

          <button
            id="tab-divisions"
            onClick={() => setActiveTab('divisions')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'divisions'
                ? 'bg-amber-500/15 text-amber-300 border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>5 Divisions Triage</span>
          </button>

          <button
            id="tab-files"
            onClick={() => setActiveTab('files')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'files'
                ? 'bg-amber-500/15 text-amber-300 border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Investigation Files</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-800 text-slate-300 border border-slate-700">
              {fileCount}
            </span>
          </button>

          <button
            id="tab-timeline"
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-amber-500/15 text-amber-300 border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Crisis Timeline</span>
          </button>

          <button
            id="tab-scenarios"
            onClick={() => setActiveTab('scenarios')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'scenarios'
                ? 'bg-amber-500/15 text-amber-300 border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Turnaround Simulator</span>
          </button>

          <button
            id="tab-ai-advisor"
            onClick={() => setActiveTab('ai-advisor')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'ai-advisor'
                ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-400 font-bold'
                : 'text-purple-400 hover:text-purple-200 hover:bg-purple-950/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>AI War Room Copilot</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
