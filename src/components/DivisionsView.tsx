import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Lock, 
  Truck, 
  Database, 
  HeartPulse, 
  Building2, 
  AlertOctagon, 
  User, 
  DollarSign, 
  Users, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { DivisionFinancial, LeadershipMember } from '../types';

interface DivisionsViewProps {
  divisions: DivisionFinancial[];
  leadership: LeadershipMember[];
  onAskAI: (prompt: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const DivisionsView: React.FC<DivisionsViewProps> = ({
  divisions,
  leadership,
  onAskAI,
  onNavigateTab,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);

  const getDivisionIcon = (name: string) => {
    switch (name) {
      case 'Cyberware':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'NetSec':
        return <Lock className="w-5 h-5 text-blue-400" />;
      case 'LogiChain':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'DataVault':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'BioTech':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      default:
        return <Building2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const getDivisionColorBorder = (level: string) => {
    switch (level) {
      case 'CRITICAL':
        return 'border-rose-800/80 bg-rose-950/20';
      case 'HIGH':
        return 'border-amber-800/80 bg-amber-950/20';
      default:
        return 'border-slate-800 bg-slate-900/60';
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>Divisional Crisis Dossiers & Forensic Triage</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Root cause analysis, VP accountability, and operational turnaround roadmaps for NovaCorp's 5 operating divisions.
          </p>
        </div>

        <button
          onClick={() => onAskAI("Rank all 5 NovaCorp divisions by their existential risk to the company, and provide a 30-day intervention mandate for each VP.")}
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md cursor-pointer transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Multi-Division Triage Audit</span>
        </button>
      </div>

      {/* Division Cards */}
      <div className="space-y-6">
        {divisions.map((div) => {
          const vpInfo = leadership.find(l => l.division === div.division || (div.division.includes('Corporate') && l.title.includes('CEO')));
          const isExpanded = selectedDivision === div.division || selectedDivision === null;

          return (
            <div 
              key={div.division}
              className={`border rounded-2xl p-6 shadow-xl transition-all ${getDivisionColorBorder(div.riskLevel)}`}
            >
              {/* Top Row: Division Title, VP, Risk Tag */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                    {getDivisionIcon(div.division)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {div.division} Division
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        div.riskLevel === 'CRITICAL' 
                          ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                          : div.riskLevel === 'HIGH'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {div.riskLevel} SEVERITY
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 flex items-center space-x-2">
                      <User className="w-3 h-3 text-slate-400" />
                      <span>VP: <strong className="text-slate-200">{div.vp}</strong> ({div.vpTenure})</span>
                    </div>
                  </div>
                </div>

                {/* Quick Financial Chips */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Revenue</span>
                    <span className="font-mono font-bold text-slate-100">₡{div.revenue.toFixed(1)}M</span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Op Income</span>
                    <span className={`font-mono font-bold ${div.operatingIncome >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {div.operatingIncome >= 0 ? '+' : ''}₡{div.operatingIncome.toFixed(1)}M
                    </span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Headcount</span>
                    <span className="font-mono font-bold text-slate-300">{div.headcount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Crisis Summary Banner */}
              <div className="mt-4 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 text-xs flex items-start space-x-2.5">
                <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-amber-300">Executive Crisis Diagnosis:</span>
                  <p className="text-slate-300 leading-relaxed">{div.crisisSummary}</p>
                  {vpInfo && (
                    <p className="text-[11px] text-slate-400 italic pt-1">
                      Leadership Note on {vpInfo.name}: {vpInfo.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Two Column Breakdown: Key Issues vs Immediate Needs */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left: Key Operational & Regulatory Issues */}
                <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 space-y-2.5">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Identified Operational & Legal Failures</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {div.keyIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-rose-500 font-bold shrink-0">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Immediate Turnaround Needs */}
                <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 space-y-2.5">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Immediate Turnaround Mandate</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {div.immediateNeeds.map((need, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400">
                  Gross Margin: <strong className="text-slate-200">{div.revenue > 0 ? ((div.grossMargin / div.revenue) * 100).toFixed(1) : 0}%</strong> | Productivity: <strong className="text-slate-200">₡{div.revenuePerEmployee}k / emp</strong>
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onAskAI(`Provide a comprehensive forensic investigation and leadership intervention plan for the ${div.division} division, addressing VP ${div.vp}'s tenure, specific defect/loss drivers, and cost recovery steps.`)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 border border-slate-700 font-medium flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>AI Audit {div.division}</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('timeline')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>View Timeline Events</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leadership Matrix Summary */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight flex items-center space-x-2">
              <User className="w-4 h-4 text-amber-400" />
              <span>NovaCorp Executive Leadership Accountability Matrix</span>
            </h3>
            <p className="text-xs text-slate-400">
              Overview of executive team tenure, role history, and fiduciary risk levels
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadership.map((member) => (
            <div key={member.name} className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{member.name}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                  member.statusRisk === 'HIGH' 
                    ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                    : member.statusRisk === 'MEDIUM'
                    ? 'bg-amber-950 text-amber-300 border border-amber-800'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                }`}>
                  {member.statusRisk} RISK
                </span>
              </div>
              <div className="text-[11px] text-amber-400 font-semibold">{member.title}</div>
              <div className="text-[10px] text-slate-400 font-mono">{member.tenure}</div>
              <p className="text-[11px] text-slate-300 pt-1 border-t border-slate-800/80 leading-snug">
                {member.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
