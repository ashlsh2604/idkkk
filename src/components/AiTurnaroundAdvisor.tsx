import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  FileText, 
  ShieldAlert, 
  HelpCircle, 
  Copy, 
  Check, 
  RotateCcw, 
  Flame, 
  Scale, 
  DollarSign
} from 'lucide-react';
import { ChatMessage, LoadedCorporateFile } from '../types';

interface AiTurnaroundAdvisorProps {
  loadedFiles: LoadedCorporateFile[];
  activePrompt?: string;
}

export const AiTurnaroundAdvisor: React.FC<AiTurnaroundAdvisorProps> = ({
  loadedFiles,
  activePrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      role: 'assistant',
      text: `Greetings, Chief Turnaround Officer. I am your NovaCorp Executive Forensic Intelligence AI.

I have full institutional context over all loaded corporate records, including:
- **00_company_overview.md**: ₡2.1B revenue (-38%), ₡210M cash, ₡1.8B debt, and 5-division crisis status.
- **01_division_financials.csv** & **02_quarterly_metrics.csv**: Granular P&L, burn rates, and margin compression.
- **Incident & Vendor Audits**: Incident #47 coverup, Synapse-7 12% defect, ECHO cardiac regulator class action, and ₡42M shell vendor payouts.

How would you like to direct our forensic investigation or board turnaround strategy?`,
      timestamp: 'Just now',
      suggestedActions: [
        'Summarize 00_company_overview.md & urgent needs',
        'What are our top 3 existential liabilities?',
        'Draft 90-day cash preservation plan',
        'Analyze LogiChain vendor kickback findings'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (activePrompt) {
      sendMessage(activePrompt);
    }
  }, [activePrompt]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          context: 'Executive Turnaround War Room',
          loadedFiles: loadedFiles.map(f => ({ name: f.name, summary: f.summary, risk: f.riskLevel })),
          conversationHistory: messages.map(m => ({ role: m.role, text: m.text }))
        })
      });

      if (res.ok) {
        const data = await res.json();
        const aiMessage: ChatMessage = {
          id: `msg-${Date.now() + 1}`,
          role: 'assistant',
          text: data.text || data.fallbackText || 'Analysis completed.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to reach AI service');
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        text: `**Executive Triage Summary for NovaCorp:**\n\n1. **Core Diagnosis:** NovaCorp is burning ~₡58M-₡88M per quarter with only ₡210M remaining cash against ₡1.8B debt. Solvency runway is ~3.6 months.\n2. **Immediate Turnaround Mandate:**\n   - **BioTech Firewalls:** Settle Patient v. NovaCorp (₡380M claim) via structured 4-year insurance settlement.\n   - **Vendor Audit Recovery:** Claw back ₡42M in illicit shell entity disbursements in LogiChain.\n   - **Data Modernization:** Allocate ₡18M capex for DataVault to halt 72h downtime events.\n   - **NetSec Trust Recovery:** Declassify Incident #47 audit report to protect ₡150M+ ARR.\n   - **Signal Hub Ingestion:** Keep ingesting cross-divisional files to eliminate the 18-month data blindness.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>AI Turnaround War Room & Chief Forensic Advisor</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Grounded intelligence assistant powered by Gemini 3.7 Flash with cross-divisional corporate context and live file indexing.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Indexed Files: <strong className="text-white">{loadedFiles.length}</strong></span>
        </div>
      </div>

      {/* Main Chat Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[650px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                  isUser 
                    ? 'bg-amber-500 text-slate-950 font-bold' 
                    : 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-2xl rounded-2xl p-4 text-xs leading-relaxed space-y-2 relative group ${
                  isUser
                    ? 'bg-amber-500/15 border border-amber-500/30 text-amber-100 font-medium'
                    : 'bg-slate-950 border border-slate-800/80 text-slate-200 shadow-inner'
                }`}>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pb-1 border-b border-slate-800/40">
                    <span>{isUser ? 'Turnaround Executive' : 'NovaCorp Forensic AI'}</span>
                    <div className="flex items-center space-x-2">
                      <span>{msg.timestamp}</span>
                      {!isUser && (
                        <button
                          onClick={() => handleCopy(msg.text, msg.id)}
                          className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                          title="Copy text"
                        >
                          {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Render text formatted with markdown/paragraphs */}
                  <div className="space-y-2 whitespace-pre-wrap font-sans">
                    {msg.text}
                  </div>

                  {/* Suggested Prompts if initial assistant message */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                        Recommended Forensic Queries:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestedActions.map((action, idx) => (
                          <button
                            key={idx}
                            onClick={() => sendMessage(action)}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-purple-300 border border-purple-800/50 text-[11px] font-medium transition-colors cursor-pointer"
                          >
                            {action} &rarr;
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl text-xs text-purple-300 flex items-center space-x-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span>Synthesizing corporate records and evaluating turnaround options...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputValue);
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask anything about NovaCorp's financials, incidents, divisions, or turnaround plan..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
