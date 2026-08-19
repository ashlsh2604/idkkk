import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Trash2, 
  Eye, 
  Download, 
  Layers, 
  Tag, 
  DollarSign, 
  ShieldAlert, 
  PlusCircle, 
  FileCode, 
  FileSpreadsheet, 
  FileCheck,
  RefreshCw
} from 'lucide-react';
import { LoadedCorporateFile } from '../types';

interface FileIngestionHubProps {
  files: LoadedCorporateFile[];
  onAddFile: (file: LoadedCorporateFile) => void;
  onRemoveFile: (id: string) => void;
  onAskAI: (prompt: string) => void;
}

export const FileIngestionHub: React.FC<FileIngestionHubProps> = ({
  files,
  onAddFile,
  onRemoveFile,
  onAskAI,
}) => {
  const [selectedFileId, setSelectedFileId] = useState<string>(files[0]?.id || 'file-00');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedFile = files.find(f => f.id === selectedFileId) || files[0];

  // Filtered file list
  const filteredFiles = files.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (f.summary && f.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || f.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['ALL', ...Array.from(new Set(files.map(f => f.category)))];

  // Process raw text file into LoadedCorporateFile with forensic extraction
  const processUploadedFile = async (name: string, content: string) => {
    setIsAnalyzing(true);
    const extension = name.split('.').pop()?.toLowerCase() || 'text';
    let type: LoadedCorporateFile['type'] = 'text';
    if (extension === 'md' || extension === 'markdown') type = 'markdown';
    else if (extension === 'csv' || extension === 'tsv') type = 'csv';
    else if (extension === 'json') type = 'json';
    else if (extension === 'log') type = 'log';

    const newId = `file-${Date.now()}`;
    const sizeKB = (content.length / 1024).toFixed(1) + ' KB';

    let triageResult: any = {
      summary: `Loaded investigatory file: ${name}. Contains ${content.split('\n').length} lines of corporate records.`,
      riskLevel: 'HIGH',
      affectedDivisions: ['Corporate'],
      keyFindings: ['File ingested into cross-divisional command hub.', 'Cross-reference analysis pending.'],
      financialImpact: 'Undetermined liability exposure',
      urgentActions: ['Review document contents with executive turnaround team.']
    };

    try {
      // Call server-side Gemini document analysis
      const res = await fetch('/api/gemini/analyze-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: name,
          content: content.slice(0, 15000),
          divisionTag: 'General Corporate'
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.summary) {
          triageResult = data;
        }
      }
    } catch (err) {
      console.warn('AI analysis fallback used:', err);
    }

    const newFileObj: LoadedCorporateFile = {
      id: newId,
      name,
      type,
      category: 'Investigation Documents',
      size: sizeKB,
      lastUpdated: new Date().toISOString().split('T')[0],
      isBuiltIn: false,
      content,
      summary: triageResult.summary,
      riskLevel: triageResult.riskLevel || 'HIGH',
      affectedDivisions: triageResult.affectedDivisions || ['Corporate'],
      keyFindings: triageResult.keyFindings || [],
      financialImpact: triageResult.financialImpact || 'Pending assessment',
      urgentActions: triageResult.urgentActions || []
    };

    onAddFile(newFileObj);
    setSelectedFileId(newId);
    setIsAnalyzing(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          processUploadedFile(file.name, content);
        }
      };
      reader.readAsText(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          if (content) {
            processUploadedFile(file.name, content);
          }
        };
        reader.readAsText(file);
      }
    }
  };

  // Sample file templates for quick injection
  const injectSampleFile = (type: 'whistleblower' | 'serverLogs' | 'customerReviews') => {
    if (type === 'whistleblower') {
      const content = `# CONFIDENTIAL INTERNAL WHISTLEBLOWER MEMORANDUM
Date: 2035-08-22
To: Special Investigation Committee
From: Senior Biomedical Quality Engineer (BioTech Division)
Subject: ECHO Cardiac Regulator Capacitor Batch Inconsistencies

During accelerated endurance testing in May 2035 (Batch #EC-9042), our lab recorded 18 instances of capacitor latch-up during elevated cardiac demand simulations (>140 BPM). 

Dr. Yuki Tanaka was briefed on 2035-06-02. Engineering recommended an immediate halt to commercial distribution. However, product management overrode the recommendation to meet Q2 revenue targets. 

Attached: 43 test failure logs and email timestamps proving executive knowledge 8 months prior to the public recall notice.`;
      processUploadedFile('06_whistleblower_echo_memo.md', content);
    } else if (type === 'serverLogs') {
      const content = `[2036-01-14 04:12:08 UTC] [ERROR] [DataVault-Core-Node-07] Unrecoverable memory parity fault in legacy 2033 hardware array.
[2036-01-14 04:12:09 UTC] [CRITICAL] [Failover-Daemon] Secondary cluster failed to initialize: insufficient capacity allocation.
[2036-01-14 04:12:15 UTC] [FATAL] [DataVault-Master] Cascading partition failure across Sector 7 datacenter. 1,200 enterprise tenants disconnected.
[2036-01-14 04:15:00 UTC] [WARN] [Incident-Manager] Automated ticket #DV-9941 generated. Outage duration exceeded 72 hours before manual node restoration.
Root Cause: Refusal of 2034-2035 hardware capex modernization requests.`;
      processUploadedFile('07_datavault_outage_syslog.log', content);
    } else if (type === 'customerReviews') {
      const content = `ClientName,Division,ContractValue,RetentionRisk,ReviewSentiment,IncidentRef
Meridian Financial Group,NetSec,₡85M/year,TERMINATED,Severe Distrust,"Incident #47 coverup leaked"
Titan Defense Systems,NetSec,₡40M/year,TERMINATED,Critical Breach,"Session tokens compromised"
Sector 12 Municipal Authority,NetSec,₡15M/year,TERMINATED,Reputational Risk,"Audit compliance failure"
Pacific Rim Health,NetSec,₡10M/year,TERMINATED,Patient Data Risk,"Telemetry anomaly unnotified"
Apex Cloud Solutions,DataVault,₡12M/year,AT RISK,Downtime SLA Breach,"72h outage killed trading engine"
BioCare Hospitals,BioTech,₡28M/year,CRITICAL,Malpractice Liability,"ECHO regulator recalls"`;
      processUploadedFile('08_enterprise_client_retention_loss.csv', content);
    }
  };

  // Helper to render CSV as table
  const renderCsvTable = (content: string) => {
    const lines = content.trim().split('\n');
    if (lines.length === 0) return null;
    const headers = lines[0].split(',').map(h => h.trim());
    const rows = lines.slice(1).map(line => line.split(',').map(c => c.trim()));

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-950 text-slate-300 uppercase font-semibold border-b border-slate-800">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="py-2.5 px-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-800/40">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-2 px-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header with Title and Fast Ingestion Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span>Investigation Document Hub & Ingestion Engine</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Load, parse, and cross-reference files (<code className="text-amber-300 font-mono">.md</code>, <code className="text-amber-300 font-mono">.csv</code>, <code className="text-amber-300 font-mono">.json</code>, <code className="text-amber-300 font-mono">.log</code>, <code className="text-amber-300 font-mono">.txt</code>) as your corporate triage progresses.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple
            accept=".md,.csv,.json,.txt,.log,.tsv"
            className="hidden"
          />
          <button
            id="btn-upload-files-hub"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Files</span>
          </button>
        </div>
      </div>

      {/* Drag and Drop Zone + Sample Ingestion Strip */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
          isDragging 
            ? 'border-amber-400 bg-amber-500/10' 
            : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-2 max-w-md mx-auto">
          <div className="p-3 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
            <Upload className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-white">
            Drag & drop investigation files here or browse
          </h3>
          <p className="text-xs text-slate-400">
            Supports corporate overviews, financial CSVs, incident logs, vendor sheets, and audit memos.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => injectSampleFile('whistleblower')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <PlusCircle className="w-3 h-3 text-amber-400" />
              <span>Inject Whistleblower Memo</span>
            </button>
            <button
              onClick={() => injectSampleFile('serverLogs')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 border border-slate-700 flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <PlusCircle className="w-3 h-3 text-purple-400" />
              <span>Inject DataVault Syslog</span>
            </button>
            <button
              onClick={() => injectSampleFile('customerReviews')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <PlusCircle className="w-3 h-3 text-blue-400" />
              <span>Inject Client Churn CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: File List on Left, Document Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: File Explorer (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Search & Filter */}
          <div className="space-y-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search files, findings, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* File Cards List */}
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filteredFiles.map((file) => {
              const isSelected = file.id === selectedFileId;
              return (
                <div
                  key={file.id}
                  onClick={() => setSelectedFileId(file.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-400 shadow-md'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2 min-w-0">
                      {file.type === 'csv' ? (
                        <FileSpreadsheet className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : file.type === 'log' ? (
                        <FileCode className="w-4 h-4 text-purple-400 shrink-0" />
                      ) : (
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                      )}
                      <span className="text-xs font-bold text-white truncate font-mono">
                        {file.name}
                      </span>
                    </div>

                    <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold shrink-0 ${
                      file.riskLevel === 'CRITICAL'
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : file.riskLevel === 'HIGH'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {file.riskLevel || 'INFO'}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-snug">
                    {file.summary || file.content.slice(0, 100)}
                  </p>

                  <div className="mt-2 pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>{file.size}</span>
                    <span>{file.category}</span>
                  </div>
                </div>
              );
            })}

            {filteredFiles.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-500 bg-slate-900/40 rounded-xl border border-slate-800">
                No matching files found.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Document Inspector & AI Triage (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {selectedFile ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              {/* File Title Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold text-white font-mono flex items-center space-x-2">
                      <FileCheck className="w-4 h-4 text-emerald-400" />
                      <span>{selectedFile.name}</span>
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {selectedFile.size}
                    </span>
                    {!selectedFile.isBuiltIn && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                        USER LOADED
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center space-x-3">
                    <span>Category: <strong className="text-slate-200">{selectedFile.category}</strong></span>
                    <span>Updated: <strong className="text-slate-200">{selectedFile.lastUpdated}</strong></span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="bg-slate-950 border border-slate-800 p-0.5 rounded-lg flex text-xs">
                    <button
                      onClick={() => setViewMode('formatted')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        viewMode === 'formatted' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Formatted
                    </button>
                    <button
                      onClick={() => setViewMode('raw')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        viewMode === 'raw' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Raw Text
                    </button>
                  </div>

                  {!selectedFile.isBuiltIn && (
                    <button
                      onClick={() => onRemoveFile(selectedFile.id)}
                      className="p-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-800/60 cursor-pointer transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* AI Forensic Triage Box */}
              <div className="bg-slate-950/80 border border-amber-500/30 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Forensic Intelligence Triage</span>
                  </div>
                  <button
                    onClick={() => onAskAI(`Perform an in-depth forensic risk assessment of the file '${selectedFile.name}'. Explain how its contents link to the wider multi-divisional crisis at NovaCorp.`)}
                    className="text-[11px] font-semibold text-purple-300 hover:text-purple-200 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Query in AI War Room &rarr;</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedFile.summary}
                </p>

                {selectedFile.keyFindings && selectedFile.keyFindings.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                      Key Risk Findings:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {selectedFile.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedFile.financialImpact && (
                  <div className="pt-1.5 text-xs text-slate-400 flex items-center space-x-2">
                    <DollarSign className="w-3.5 h-3.5 text-rose-400" />
                    <span>Estimated Financial Exposure: <strong className="text-rose-300 font-mono">{selectedFile.financialImpact}</strong></span>
                  </div>
                )}
              </div>

              {/* Document Content View */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 max-h-96 overflow-y-auto text-xs font-mono leading-relaxed text-slate-300">
                {viewMode === 'raw' ? (
                  <pre className="whitespace-pre-wrap font-mono text-[11px]">{selectedFile.content}</pre>
                ) : selectedFile.type === 'csv' ? (
                  renderCsvTable(selectedFile.content)
                ) : (
                  <div className="space-y-2 font-sans text-xs text-slate-200 leading-relaxed">
                    {selectedFile.content.split('\n\n').map((para, i) => {
                      if (para.startsWith('# ')) {
                        return <h1 key={i} className="text-base font-bold text-white border-b border-slate-800 pb-1 mt-3">{para.replace('# ', '')}</h1>;
                      }
                      if (para.startsWith('## ')) {
                        return <h2 key={i} className="text-sm font-bold text-amber-400 mt-2">{para.replace('## ', '')}</h2>;
                      }
                      if (para.startsWith('### ')) {
                        return <h3 key={i} className="text-xs font-bold text-cyan-300 mt-2">{para.replace('### ', '')}</h3>;
                      }
                      if (para.startsWith('- ')) {
                        return (
                          <ul key={i} className="list-disc list-inside space-y-1 text-slate-300">
                            {para.split('\n').map((li, lIdx) => (
                              <li key={lIdx}>{li.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={i} className="text-slate-300">{para}</p>;
                    })}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-500 text-xs">
              Select or upload a file to inspect its forensic contents.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
