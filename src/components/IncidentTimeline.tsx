import React, { useState } from 'react';
import { 
  Clock, 
  Filter, 
  AlertOctagon, 
  AlertTriangle, 
  Info, 
  Cpu, 
  Lock, 
  Truck, 
  Database, 
  HeartPulse, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TimelineEvent } from '../types';

interface IncidentTimelineProps {
  events: TimelineEvent[];
  onAskAI: (prompt: string) => void;
}

export const IncidentTimeline: React.FC<IncidentTimelineProps> = ({
  events,
  onAskAI,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('ALL');

  const divisions = ['ALL', 'Corporate', 'Cyberware', 'NetSec', 'LogiChain', 'DataVault', 'BioTech'];
  const severities = ['ALL', 'CRITICAL', 'HIGH', 'INFO'];

  const filteredEvents = events.filter(evt => {
    const matchesDiv = selectedDivision === 'ALL' || evt.division === selectedDivision;
    const matchesSev = selectedSeverity === 'ALL' || evt.severity === selectedSeverity;
    return matchesDiv && matchesSev;
  });

  const getSeverityBadge = (sev: string) => {
    switch (sev) {
      case 'CRITICAL':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800">CRITICAL</span>;
      case 'HIGH':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">HIGH</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">INFO</span>;
    }
  };

  const getDivisionIcon = (div: string) => {
    switch (div) {
      case 'Cyberware':
        return <Cpu className="w-3.5 h-3.5 text-cyan-400" />;
      case 'NetSec':
        return <Lock className="w-3.5 h-3.5 text-blue-400" />;
      case 'LogiChain':
        return <Truck className="w-3.5 h-3.5 text-amber-400" />;
      case 'DataVault':
        return <Database className="w-3.5 h-3.5 text-purple-400" />;
      case 'BioTech':
        return <HeartPulse className="w-3.5 h-3.5 text-rose-400" />;
      default:
        return <Building2 className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span>Forensic Crisis Timeline & Incident Log</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Chronological reconstruction of how operational breakdowns, product defects, and breach coverups led to the current solvency crisis.
          </p>
        </div>

        <button
          onClick={() => onAskAI("Analyze the timeline of events from 2034-Q4 peak to 2036-Q1 emergency board meeting. Identify the exact turning points where executive inaction compounded the crisis.")}
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Timeline Turning-Point Analysis</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2">Filter Division:</span>
          {divisions.map((div) => (
            <button
              key={div}
              onClick={() => setSelectedDivision(div)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                selectedDivision === div
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {div}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-400">Severity:</span>
          {severities.map((sev) => (
            <button
              key={sev}
              onClick={() => setSelectedSeverity(sev)}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                selectedSeverity === sev
                  ? 'bg-rose-500 text-white font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-6">
        {filteredEvents.map((evt, idx) => (
          <div key={evt.id} className="relative pl-6 md:pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-2.5 top-1.5 w-5 h-5 rounded-full border-2 bg-slate-950 flex items-center justify-center transition-all ${
              evt.severity === 'CRITICAL' 
                ? 'border-rose-500 shadow-lg shadow-rose-950' 
                : evt.severity === 'HIGH'
                ? 'border-amber-500'
                : 'border-slate-600'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                evt.severity === 'CRITICAL' ? 'bg-rose-500 animate-ping' : evt.severity === 'HIGH' ? 'bg-amber-500' : 'bg-slate-600'
              }`} />
            </div>

            {/* Event Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2 hover:border-slate-700 transition-all shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-amber-400">{evt.date}</span>
                  <span className="text-slate-500 text-xs font-mono">({evt.quarter})</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700 flex items-center space-x-1">
                    {getDivisionIcon(evt.division)}
                    <span>{evt.division}</span>
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-slate-400 font-mono">{evt.category}</span>
                  {getSeverityBadge(evt.severity)}
                </div>
              </div>

              <h4 className="text-sm font-bold text-white tracking-tight">
                {evt.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {evt.description}
              </p>

              <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="text-rose-300 font-medium">
                  Impact: {evt.impact}
                </span>
                <button
                  onClick={() => onAskAI(`Explain the full strategic and financial ramifications of the event '${evt.title}' (${evt.date}) on NovaCorp's overall stability.`)}
                  className="text-purple-400 hover:text-purple-300 text-[10px] font-medium flex items-center space-x-1 cursor-pointer"
                >
                  <span>Forensic Drilldown &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
