import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  Cell
} from 'recharts';
import { 
  DollarSign, 
  TrendingDown, 
  Flame, 
  AlertTriangle, 
  Users, 
  Calculator, 
  BarChart3, 
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { DivisionFinancial, QuarterlyMetric } from '../types';

interface FinancialDashboardProps {
  divisionFinancials: DivisionFinancial[];
  quarterlyMetrics: QuarterlyMetric[];
  onNavigateTab: (tab: any) => void;
}

export const FinancialDashboard: React.FC<FinancialDashboardProps> = ({
  divisionFinancials,
  quarterlyMetrics,
  onNavigateTab,
}) => {
  // Solvency Simulator State
  const [currentCash, setCurrentCash] = useState<number>(210); // in millions
  const [quarterlyBurn, setQuarterlyBurn] = useState<number>(58.2); // in millions
  const [vendorSavings, setVendorSavings] = useState<number>(25); // in millions
  const [corpSavings, setCorpSavings] = useState<number>(15); // in millions
  const [biotechSettlementQtr, setBiotechSettlementQtr] = useState<number>(10); // in millions

  // Calculated runway
  const effectiveBurn = Math.max(5, quarterlyBurn - vendorSavings - corpSavings + biotechSettlementQtr);
  const projectedRunwayMonths = ((currentCash / effectiveBurn) * 3).toFixed(1);
  const baselineRunwayMonths = ((currentCash / quarterlyBurn) * 3).toFixed(1);

  // Formatting colors
  const divisionColorMap: Record<string, string> = {
    Cyberware: '#38bdf8',
    NetSec: '#3b82f6',
    LogiChain: '#f59e0b',
    DataVault: '#a855f7',
    BioTech: '#f43f5e',
    'Corporate/Unallocated': '#64748b',
    TOTAL: '#94a3b8'
  };

  const customTooltipStyle = {
    backgroundColor: '#0f172a',
    borderColor: '#334155',
    borderRadius: '0.75rem',
    color: '#f8fafc',
    fontSize: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-amber-400" />
            <span>Financial Forensics & Cash Burn Analysis</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Reconstructed financial trajectory from <code className="text-amber-300 font-mono">01_division_financials.csv</code> and <code className="text-amber-300 font-mono">02_quarterly_metrics.csv</code>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950/80 text-rose-300 border border-rose-800 flex items-center space-x-1.5">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>Current Burn: ₡{quarterlyBurn}M / quarter</span>
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-800">
            Runway: ~{baselineRunwayMonths} Months
          </span>
        </div>
      </div>

      {/* Primary KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Total Revenue Run-Rate</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-black font-mono text-white">₡480.2M</span>
            <span className="text-xs font-mono text-rose-400">(-38% from peak)</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400">
            Top generator: <strong className="text-slate-200">Cyberware (₡140.2M)</strong>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Consolidated Op Income</span>
            <TrendingDown className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-black font-mono text-rose-400">-₡21.2M</span>
            <span className="text-xs font-mono text-rose-300">Deficit</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400">
            Drag: <strong className="text-rose-400">LogiChain (-₡24.7M) & Corp (-₡41.3M)</strong>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Remaining Cash Pool</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-black font-mono text-emerald-400">₡210.0M</span>
            <span className="text-xs font-mono text-rose-400">(-76% YoY)</span>
          </div>
          <div className="mt-2 text-[11px] text-amber-400 font-medium">
            Down from ₡892.1M peak
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Debt to Cash Ratio</span>
            <AlertTriangle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-black font-mono text-rose-400">8.57x</span>
            <span className="text-xs font-mono text-rose-300">₡1.8B Debt</span>
          </div>
          <div className="mt-2 text-[11px] text-rose-400 font-semibold">
            Violating standard credit covenants
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Divisional Revenue vs Operating Income */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Division Revenue vs Operating Income (₡M)
              </h3>
              <p className="text-xs text-slate-400">Highlights profit drivers (NetSec) vs cash drains (LogiChain, Corp)</p>
            </div>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
              01_division_financials.csv
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={divisionFinancials.filter(d => d.division !== 'TOTAL')}
                margin={{ top: 10, right: 10, left: -10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis 
                  dataKey="division" 
                  stroke="#64748b" 
                  fontSize={11} 
                  tickLine={false}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="revenue" name="Revenue (₡M)" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="operatingExpenses" name="Operating Expenses (₡M)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="operatingIncome" name="Operating Income (₡M)" fill="#f43f5e" radius={[4, 4, 0, 0]}>
                  {divisionFinancials.filter(d => d.division !== 'TOTAL').map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.operatingIncome >= 0 ? '#10b981' : '#f43f5e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
            💡 <strong className="text-slate-200">Key Finding:</strong> NetSec generates <strong>₡37.5M</strong> in operating profit on 86.2% gross margin, but its gains are completely swallowed by LogiChain’s <strong>-₡24.7M</strong> deficit and Corporate unallocated burn of <strong>-₡41.3M</strong>.
          </div>
        </div>

        {/* Chart 2: Historical Quarterly Cash on Hand vs Debt */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Quarterly Cash Reserves vs Surging Debt (₡M)
              </h3>
              <p className="text-xs text-slate-400">The 10-quarter liquidity squeeze leading to emergency board action</p>
            </div>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
              02_quarterly_metrics.csv
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={quarterlyMetrics}
                margin={{ top: 10, right: 10, left: -10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis 
                  dataKey="quarter" 
                  stroke="#64748b" 
                  fontSize={10} 
                  tickLine={false}
                  angle={-20}
                  textAnchor="end"
                />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="cashOnHand" name="Cash on Hand (₡M)" fill="#10b98120" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="debtLevel" name="Debt Level (₡M)" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="burnRate" name="Quarterly Burn (₡M)" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
            ⚠️ <strong className="text-rose-300">Solvency Alert:</strong> In Q4 2032, Cash (₡892M) exceeded Debt (₡320M) by 2.8x. By Q1 2036, Debt exploded to ₡1.8B while Cash cratered to ₡210M — creating an immediate solvency cliff.
          </div>
        </div>
      </div>

      {/* Headcount Efficiency & Margin Compression */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Division Efficiency & Margin Matrix
            </h3>
            <p className="text-xs text-slate-400">Headcount allocation vs Gross Margin % vs Revenue per Employee</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-3">Division</th>
                <th className="py-3 px-3">Headcount</th>
                <th className="py-3 px-3">Revenue (₡M)</th>
                <th className="py-3 px-3">COGS (₡M)</th>
                <th className="py-3 px-3">Gross Margin</th>
                <th className="py-3 px-3">OpEx (₡M)</th>
                <th className="py-3 px-3">Op Income</th>
                <th className="py-3 px-3">Rev / Employee</th>
                <th className="py-3 px-3">Risk Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-slate-200">
              {divisionFinancials.map((row) => (
                <tr key={row.division} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-sans font-bold text-white flex items-center space-x-2">
                    <span 
                      className="w-2 h-2 rounded-full inline-block" 
                      style={{ backgroundColor: divisionColorMap[row.division] || '#94a3b8' }} 
                    />
                    <span>{row.division}</span>
                  </td>
                  <td className="py-3 px-3 text-slate-300">{row.headcount.toLocaleString()}</td>
                  <td className="py-3 px-3 text-slate-100 font-semibold">₡{row.revenue.toFixed(1)}M</td>
                  <td className="py-3 px-3 text-slate-400">₡{row.cogs.toFixed(1)}M</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      (row.revenue > 0 ? (row.grossMargin / row.revenue) * 100 : 0) > 60 
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60' 
                        : (row.revenue > 0 ? (row.grossMargin / row.revenue) * 100 : 0) > 35
                        ? 'bg-amber-950 text-amber-300 border border-amber-800/60'
                        : 'bg-rose-950 text-rose-300 border border-rose-800/60'
                    }`}>
                      {row.revenue > 0 ? ((row.grossMargin / row.revenue) * 100).toFixed(1) : '0.0'}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-300">₡{row.operatingExpenses.toFixed(1)}M</td>
                  <td className="py-3 px-3 font-bold">
                    <span className={row.operatingIncome >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                      {row.operatingIncome >= 0 ? '+' : ''}₡{row.operatingIncome.toFixed(1)}M
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-300">₡{row.revenuePerEmployee.toFixed(1)}k</td>
                  <td className="py-3 px-3 font-sans">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      row.riskLevel === 'CRITICAL' 
                        ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                        : row.riskLevel === 'HIGH'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {row.riskLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Turnaround Cash Runway Modeler */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 p-6 rounded-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Interactive Liquidity & Turnaround Runway Calculator
              </h3>
              <p className="text-xs text-slate-400">
                Adjust savings and settlement parameters to see how long NovaCorp can survive without emergency Chapter 11
              </p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl flex items-center space-x-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Baseline Runway</span>
              <span className="text-rose-400 font-mono font-bold text-sm">~{baselineRunwayMonths} Months</span>
            </div>
            <div className="h-6 w-px bg-slate-800"></div>
            <div>
              <span className="text-[10px] text-emerald-400 uppercase font-semibold block">Turnaround Runway</span>
              <span className="text-emerald-400 font-mono font-bold text-base">~{projectedRunwayMonths} Months</span>
            </div>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">LogiChain Vendor Clawback & Savings:</span>
              <span className="text-amber-400 font-mono font-bold">+₡{vendorSavings}M / qtr</span>
            </div>
            <input
              type="range"
              min="0"
              max="45"
              step="1"
              value={vendorSavings}
              onChange={(e) => setVendorSavings(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Freezes shell entity disbursements and renegotiates logistics tariffs.</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Corporate Overhead Rationalization:</span>
              <span className="text-emerald-400 font-mono font-bold">+₡{corpSavings}M / qtr</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={corpSavings}
              onChange={(e) => setCorpSavings(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Eliminates redundant executive layers and trims ₡41.3M unallocated OpEx.</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">BioTech Structured Settlement Outlay:</span>
              <span className="text-rose-400 font-mono font-bold">-₡{biotechSettlementQtr}M / qtr</span>
            </div>
            <input
              type="range"
              min="0"
              max="35"
              step="1"
              value={biotechSettlementQtr}
              onChange={(e) => setBiotechSettlementQtr(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Quarterly cash contribution into structured ₡140M patient restitution fund.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80 text-xs">
          <div className="text-slate-300 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              Net Quarterly Burn Reduced From <strong className="text-rose-400 font-mono">₡{quarterlyBurn}M</strong> to <strong className="text-emerald-400 font-mono">₡{effectiveBurn.toFixed(1)}M</strong>
            </span>
          </div>
          <button
            onClick={() => onNavigateTab('scenarios')}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer text-xs"
          >
            Apply Scenario to Board Model &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
