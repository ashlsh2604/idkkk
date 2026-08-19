import React, { useState } from 'react';
import { 
  COMPANY_PROFILE, 
  DIVISION_FINANCIALS, 
  QUARTERLY_METRICS, 
  TIMELINE_EVENTS, 
  LEADERSHIP_ROSTER, 
  INITIAL_LOADED_FILES, 
  CRISIS_SCENARIOS 
} from './data/initialData';
import { LoadedCorporateFile } from './types';
import { Header } from './components/Header';
import { UrgentAsksView } from './components/UrgentAsksView';
import { FinancialDashboard } from './components/FinancialDashboard';
import { DivisionsView } from './components/DivisionsView';
import { FileIngestionHub } from './components/FileIngestionHub';
import { IncidentTimeline } from './components/IncidentTimeline';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { AiTurnaroundAdvisor } from './components/AiTurnaroundAdvisor';

export default function App() {
  const [activeTab, setActiveTab] = useState<'urgent-asks' | 'financials' | 'divisions' | 'files' | 'timeline' | 'scenarios' | 'ai-advisor'>('urgent-asks');
  const [loadedFiles, setLoadedFiles] = useState<LoadedCorporateFile[]>(INITIAL_LOADED_FILES);
  const [activeAiPrompt, setActiveAiPrompt] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddFile = (newFile: LoadedCorporateFile) => {
    setLoadedFiles(prev => [newFile, ...prev]);
    showToast(`Loaded "${newFile.name}" into Investigation Hub.`);
  };

  const handleRemoveFile = (fileId: string) => {
    setLoadedFiles(prev => prev.filter(f => f.id !== fileId));
    showToast('File removed from active corpus.');
  };

  const handleAskAI = (prompt: string) => {
    setActiveAiPrompt(prompt);
    setActiveTab('ai-advisor');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-amber-400/80 text-amber-300 px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Persistent Global Header */}
      <Header
        overview={COMPANY_PROFILE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        fileCount={loadedFiles.length}
        onOpenUpload={() => setActiveTab('files')}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'urgent-asks' && (
          <UrgentAsksView
            overview={COMPANY_PROFILE}
            divisions={DIVISION_FINANCIALS}
            onNavigateTab={setActiveTab}
            onAskAI={handleAskAI}
          />
        )}

        {activeTab === 'financials' && (
          <FinancialDashboard
            divisionFinancials={DIVISION_FINANCIALS}
            quarterlyMetrics={QUARTERLY_METRICS}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'divisions' && (
          <DivisionsView
            divisions={DIVISION_FINANCIALS}
            leadership={LEADERSHIP_ROSTER}
            onAskAI={handleAskAI}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'files' && (
          <FileIngestionHub
            files={loadedFiles}
            onAddFile={handleAddFile}
            onRemoveFile={handleRemoveFile}
            onAskAI={handleAskAI}
          />
        )}

        {activeTab === 'timeline' && (
          <IncidentTimeline
            events={TIMELINE_EVENTS}
            onAskAI={handleAskAI}
          />
        )}

        {activeTab === 'scenarios' && (
          <ScenarioSimulator
            scenarios={CRISIS_SCENARIOS}
            onAskAI={handleAskAI}
          />
        )}

        {activeTab === 'ai-advisor' && (
          <AiTurnaroundAdvisor
            loadedFiles={loadedFiles}
            activePrompt={activeAiPrompt}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 px-4 text-center text-xs text-slate-600 font-mono">
        NovaCorp Industries Turnaround Intelligence System &bull; Neo-Ghost Exchange Ticker: NVC &bull; Confidential Board Planning Record
      </footer>
    </div>
  );
}
