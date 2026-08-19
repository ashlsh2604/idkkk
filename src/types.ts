export interface CompanyOverviewData {
  legalName: string;
  ticker: string;
  founded: number;
  headquarters: string;
  employees: number;
  peakEmployees: number;
  revenueFY2035: string;
  peakRevenueFY2034: string;
  stockPrice: number;
  stockChangeYTD: number;
  operatingMarginFY2035: number;
  netIncomeFY2035: string;
  cashOnHand: string;
  debt: string;
  status: string;
}

export interface DivisionFinancial {
  division: string;
  revenue: number;
  cogs: number;
  grossMargin: number;
  operatingExpenses: number;
  operatingIncome: number;
  headcount: number;
  revenuePerEmployee: number;
  riskLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  vp: string;
  vpTenure: string;
  crisisSummary: string;
  keyIssues: string[];
  immediateNeeds: string[];
}

export interface QuarterlyMetric {
  quarter: string;
  totalRevenue: number;
  grossMarginPct: number;
  operatingExpenses: number;
  netIncome: number;
  cashOnHand: number;
  burnRate: number;
  debtLevel: number;
}

export interface TimelineEvent {
  id: string;
  date: string;
  quarter: string;
  division: string;
  title: string;
  description: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO';
  impact: string;
  category: 'Product Failure' | 'Client Loss' | 'Legal/Compliance' | 'Operational' | 'Financial' | 'Governance';
}

export interface LoadedCorporateFile {
  id: string;
  name: string;
  type: 'markdown' | 'csv' | 'json' | 'log' | 'text';
  category: string;
  size: string;
  lastUpdated: string;
  isBuiltIn: boolean;
  content: string;
  summary?: string;
  riskLevel?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  affectedDivisions?: string[];
  keyFindings?: string[];
  financialImpact?: string;
  urgentActions?: string[];
  parsedData?: any;
}

export interface LeadershipMember {
  name: string;
  title: string;
  tenure: string;
  background: string;
  notes: string;
  statusRisk: 'HIGH' | 'MEDIUM' | 'LOW';
  division?: string;
}

export interface CrisisScenario {
  id: string;
  title: string;
  category: string;
  description: string;
  cashDeltaQuarterly: number; // in millions
  debtDelta: number;
  runwayImpactMonths: number;
  riskScore: number;
  viability: 'High' | 'Moderate' | 'Low' | 'Extreme';
  pros: string[];
  cons: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
}
