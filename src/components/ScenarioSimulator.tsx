import React, { useState } from 'react';
import { 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  DollarSign, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Scale, 
  PlusCircle, 
  Play, 
  RotateCcw
} from 'lucide-react';
import { CrisisScenario } from '../types';

interface ScenarioSimulatorProps {
  scenarios: CrisisScenario[];
  onAskAI: (prompt: string) => void;
}

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({
  scenarios,
  onAskAI,
}) => {
  const [activeScenarioIds, setActiveScenarioIds] = useState<string[]>(['scen-1', 'scen-2']);
  const [customTitle, setCustomTitle] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customCategory, setCustomCategory] = useState('Emergency Action');
  const [isSimulatingCustom, setIsSimulatingCustom] = useState(false);
  const [customScenarios, setCustomScenarios] = useState<CrisisScenario[]>([]);

  const allScenarios = [...scenarios, ...customScenarios];

  const toggleScenario = (id: string) => {
    if (activeScenarioIds.includes(id)) {
      setActiveScenarioIds(activeScenarioIds.filter(sId => sId !== id));
    } else {
      setActiveScenarioIds([...activeScenarioIds, id]);
    }
  };

  // Base metrics
  const baseCash = 210; // ₡M
  const baseBurn = 58.2; // ₡M / qtr
  const baseDebt = 1800; // ₡M

  // Calculate combined impact
  const selectedScenarios = allScenarios.filter(s => activeScenarioIds.includes(s.id));
  const totalCashDeltaQtr = selectedScenarios.reduce((acc, s) => acc + s.cashDeltaQuarterly, 0);
  const totalDebtDelta = selectedScenarios.reduce((acc, s) => acc + s.debtDelta, 0);

  const finalQuarterlyBurn = Math.max(5, baseBurn - totalCashDeltaQtr);
  const finalDebt = Math.max(0, baseDebt + totalDebtDelta);
  const projectedRunwayMonths = ((baseCash / finalQuarterlyBurn) * 3).toFixed(1);
  const baselineRunwayMonths = ((baseCash / baseBurn) * 3).toFixed(1);

  const handleSimulateCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle || !customDesc) return;
    setIsSimulatingCustom(true);

    try {
      const res = await fetch('/api/gemini/simulate-scenario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioTitle: customTitle,
          scenarioDescription: customDesc,
          actionType: customCategory
        })
      });

      if (res.ok) {
        const data = await res.json();
        const newScenario: CrisisScenario = {
          id: `custom-${Date.now()}`,
          title: customTitle,
          category: customCategory,
          description: customDesc,
          cashDeltaQuarterly: data.projectedCashDelta ? parseFloat(data.projectedCashDelta.replace(/[^0-9.-]/g, '')) || 20 : 20,
          debtDelta: 0,
          runwayImpactMonths: data.newRunwayMonths ? data.newRunwayMonths - parseFloat(baselineRunwayMonths) : 2.5,
          riskScore: data.legalRiskScore || 5,
          viability: data.operationalViability === 'High' ? 'High' : 'Moderate',
          pros: data.pros || ['Expands financial runway', 'Improves board confidence'],
          cons: data.cons || ['Execution risk', 'Short-term administrative burden']
        };

        setCustomScenarios(prev => [newScenario, ...prev]);
        setActiveScenarioIds(prev => [...prev, newScenario.id]);
        setCustomTitle('');
        setCustomDesc('');
      }
    } catch (err) {
      console.error('Custom simulation error:', err);
    } finally {
      setIsSimulatingCustom(false);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-amber-400" />
            <span>Turnaround Scenario Modeler & Board Playbook</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Simulate strategic intervention packages, cash burn reductions, and legal firewalls to evaluate board survival options.
          </p>
        </div>

        <button
          onClick={() => onAskAI("Evaluate the top 3 turnaround scenarios for NovaCorp Industries. Which combination delivers the highest survival probability while avoiding Chapter 11 bankruptcy?")}
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Board Strategy Synthesis</span>
        </button>
      </div>

      {/* Composite Impact Command Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/50 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Active Strategy Combination ({selectedScenarios.length} Scenarios Selected)
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Projected Solvency & Runway Extension
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveScenarioIds(['scen-1', 'scen-2', 'scen-3', 'scen-4'])}
              className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Select All Turnaround Actions
            </button>
            <button
              onClick={() => setActiveScenarioIds([])}
              className="p-1 text-slate-400 hover:text-slate-200 cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Quarterly Cash Flow Delta</span>
            <div className="mt-1 flex items-baseline space-x-2">
              <span className={`text-xl font-bold font-mono ${totalCashDeltaQtr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {totalCashDeltaQtr >= 0 ? '+' : ''}₡{totalCashDeltaQtr.toFixed(1)}M
              </span>
              <span className="text-[10px] text-slate-400">/ quarter</span>
            </div>
            <span className="text-[10px] text-slate-400">Net burn adjusted to ₡{finalQuarterlyBurn.toFixed(1)}M</span>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Turnaround Cash Runway</span>
            <div className="mt-1 flex items-baseline space-x-2">
              <span className="text-xl font-bold font-mono text-emerald-400">~{projectedRunwayMonths} Months</span>
              <span className="text-xs text-slate-400 font-mono">({baselineRunwayMonths} base)</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">
              +{(parseFloat(projectedRunwayMonths) - parseFloat(baselineRunwayMonths)).toFixed(1)} Months Extension
            </span>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Projected Total Debt</span>
            <div className="mt-1 flex items-baseline space-x-2">
              <span className="text-xl font-bold font-mono text-slate-200">₡{finalDebt.toFixed(0)}M</span>
              <span className="text-xs text-slate-400 font-mono">({totalDebtDelta >= 0 ? '+' : ''}₡{totalDebtDelta}M)</span>
            </div>
            <span className="text-[10px] text-slate-400">Includes structured liabilities</span>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Survival Probability</span>
            <div className="mt-1 flex items-baseline space-x-2">
              <span className={`text-xl font-bold font-mono ${parseFloat(projectedRunwayMonths) >= 6 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {parseFloat(projectedRunwayMonths) >= 8 ? '88%' : parseFloat(projectedRunwayMonths) >= 5 ? '68%' : '35%'}
              </span>
              <span className="text-xs text-slate-400 font-mono">Index</span>
            </div>
            <span className="text-[10px] text-slate-400">Exceeds minimum 90-day window</span>
          </div>
        </div>
      </div>

      {/* Scenario Cards List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          Available Turnaround Packages & Playbooks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allScenarios.map((scen) => {
            const isActive = activeScenarioIds.includes(scen.id);
            return (
              <div
                key={scen.id}
                onClick={() => toggleScenario(scen.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-amber-400 shadow-lg shadow-amber-950/30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-75'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isActive ? 'border-amber-400 bg-amber-500 text-slate-950 font-bold' : 'border-slate-600'
                      }`}>
                        {isActive ? '✓' : ''}
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {scen.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 block">{scen.category}</span>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    scen.viability === 'High'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : scen.viability === 'Moderate'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800'
                      : 'bg-rose-950 text-rose-300 border border-rose-800'
                  }`}>
                    {scen.viability} Viability
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                  {scen.description}
                </p>

                {/* Metrics Pill Row */}
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono">
                  <div className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                    Cash Delta: <strong className={scen.cashDeltaQuarterly >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                      {scen.cashDeltaQuarterly >= 0 ? '+' : ''}₡{scen.cashDeltaQuarterly}M/qtr
                    </strong>
                  </div>
                  <div className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                    Runway Delta: <strong className="text-amber-400">+{scen.runwayImpactMonths} mos</strong>
                  </div>
                  <div className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                    Risk: <strong className="text-slate-200">{scen.riskScore}/10</strong>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-[10px]">
                  <div className="space-y-1">
                    <span className="text-emerald-400 font-semibold uppercase">Pros:</span>
                    <ul className="space-y-0.5 text-slate-400">
                      {scen.pros.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <span className="text-rose-400 font-semibold uppercase">Cons:</span>
                    <ul className="space-y-0.5 text-slate-400">
                      {scen.cons.map((c, i) => (
                        <li key={i}>• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom AI Scenario Generator */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Simulate Custom Executive Restructuring Scenario with Gemini AI</span>
        </div>
        <p className="text-xs text-slate-400">
          Propose any custom operational restructuring, spinoff, or asset divestiture. Gemini will simulate financial deltas, runway expansion, and legal risks.
        </p>

        <form onSubmit={handleSimulateCustom} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Scenario Title (e.g., 'Emergency Spinoff of DataVault for ₡220M')"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <select
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-400"
              >
                <option value="Asset Divestiture">Asset Divestiture</option>
                <option value="Emergency Restructuring">Emergency Restructuring</option>
                <option value="Debt Refinancing">Debt Refinancing</option>
                <option value="Product Recall & Restitution">Product Recall & Restitution</option>
                <option value="M&A Defense">M&A Defense</option>
              </select>
            </div>
          </div>

          <textarea
            placeholder="Describe the operational actions, headcount impact, cost changes, or legal provisions..."
            value={customDesc}
            onChange={(e) => setCustomDesc(e.target.value)}
            rows={2}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSimulatingCustom || !customTitle || !customDesc}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold rounded-xl text-xs flex items-center space-x-1.5 shadow-md cursor-pointer transition-all"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isSimulatingCustom ? 'Simulating with Gemini...' : 'Run Scenario Simulation'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
