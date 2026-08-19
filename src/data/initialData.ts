import {
  CompanyOverviewData,
  DivisionFinancial,
  QuarterlyMetric,
  TimelineEvent,
  LeadershipMember,
  LoadedCorporateFile,
  CrisisScenario
} from '../types';

export const COMPANY_OVERVIEW_RAW_MD = `# NOVACORP INDUSTRIES — CORPORATE OVERVIEW

**Document Classification:** INTERNAL USE ONLY  
**Last Updated:** 2036-03-15  
**Prepared By:** Corporate Strategy Division  

---

## COMPANY PROFILE

| Field | Detail |
|---|---|
| **Legal Name** | NovaCorp Industries, Inc. |
| **Ticker** | NVC (Neo-Ghost Exchange) |
| **Founded** | 2031 |
| **Headquarters** | 1 NovaCorp Plaza, Sector 7, Neo-Ghost City |
| **Employees** | ~4,200 (down from 5,800 in 2034) |
| **Revenue (FY2035)** | ₡2.1B (down from ₡3.4B in 2034) |
| **Stock Price** | ₡41.20 (as of 2036-03-14) |
| **YTD Performance** | -47% |
| **Status** | CRITICAL — Board evaluating acquisition offers or Chapter 11 restructuring |

---

## HISTORY

NovaCorp Industries was founded in 2031 by Marcus Vane and three partners with ₡12M in seed funding from Neo-Ghost Ventures. The company's early success was built on the Synapse-7 neural interface, which captured 34% of the consumer cyberware market within 18 months of launch.

By 2033, NovaCorp had expanded into four additional divisions through a combination of organic growth and aggressive acquisitions. The company went public in Q2 2033 at ₡88/share, raising ₡1.2B. At its peak in Q4 2034, NovaCorp commanded a ₡5.2B market cap and employed 5,800 people across Neo-Ghost City, Shanghai, and Berlin.

The decline began in Q1 2035. A series of product failures, client losses, and operational failures have since reduced the company's valuation by over 60%.

---

## DIVISIONS

### 1. Cyberware Division
**VP:** Dmitri Volkov | **Employees:** ~1,100 | **Revenue:** ₡680M

Manufactures neural implants, cyberlimbs, and sensory augmentation devices. Flagship products include the Synapse-7 neural interface and the Kestrel-IV prosthetic arm line.

**Current Status:** Three product recalls in the last 12 months. The Synapse-7 Revision B units shipped in Q3 2035 have a 12% failure rate, resulting in 47 reported injuries and a ₡95M recall cost. Regulatory scrutiny from the Neo-Ghost Cyberware Standards Board (NGCSB) is ongoing.

---

### 2. NetSec Division
**VP:** Sarah Chen | **Employees:** ~800 | **Revenue:** ₡420M

Provides enterprise cybersecurity services, threat intelligence, and managed security operations. Serves government agencies and Fortune 500 equivalents.

**Current Status:** Lost four major clients in Q4 2035: Meridian Financial Group, Titan Defense Systems, Pacific Rim Health Cooperative, and the Sector 12 Municipal Authority. Root cause analysis attributed losses to service degradation and a critical incident (Incident #47) that was downplayed internally but leaked to the press.

---

### 3. LogiChain Division
**VP:** Viktor Kozlov | **Employees:** ~900 | **Revenue:** ₡510M

Manages supply chain operations, vendor relationships, and global logistics for all NovaCorp divisions and select third-party clients.

**Current Status:** 34% of orders delayed by more than 2 weeks over the past two quarters. Vendor costs have increased 28% year-over-year despite flat order volume. CFO has flagged irregularities in vendor payment records and is conducting a forensic audit.

---

### 4. DataVault Division
**VP:** Tomoko Sato | **Employees:** ~750 | **Revenue:** ₡340M

Offers cloud storage infrastructure, AI/ML services, and data analytics platforms.

**Current Status:** Four major service outages in the past six months, including a 72-hour downtime event in January 2036 that affected 1,200 enterprise clients. Client retention has fallen to 61%, down from 89% in 2034. Infrastructure has not been upgraded since 2033 due to budget constraints.

---

### 5. BioTech Division
**VP:** Dr. Yuki Tanaka | **Employees:** ~650 | **Revenue:** ₡150M

Develops medical cybernetics including cardiac regulators, neural prosthetics for patients with spinal injuries, and biosynthetic organ components.

**Current Status:** Facing a ₡380M class-action lawsuit (Patient v. NovaCorp Industries, Case #NGC-2036-00847) related to the ECHO cardiac regulator. The device has been linked to 12 patient deaths and 200+ adverse event reports. Internal documents suggest the defects were known 8 months before the delayed recall was issued.

---

## LEADERSHIP TEAM

| Name | Title | Tenure | Notes |
|---|---|---|---|
| Marcus Vane | CEO & Co-Founder | Since founding | Public face of the company; increasingly absent from investor calls |
| Diana Frost | CFO | Since 2032 | Former Meridian Financial; brought in to stabilize finances |
| Rajan Patel | CTO | Since 2033 | Oversees R&D and infrastructure; tensions with division VPs over budgets |
| Dmitri Volkov | VP, Cyberware | Since 2032 | Product engineering background; defensive about recall issues |
| Sarah Chen | VP, NetSec | Since 2034 | Former government cybersecurity; relatively new, limited internal influence |
| Viktor Kozlov | VP, LogiChain | Since 2032 | Operations veteran; vendor relationships under scrutiny |
| Tomoko Sato | VP, DataVault | Since 2033 | Infrastructure architect turned executive; requests consistently denied |
| Dr. Yuki Tanaka | VP, BioTech | Since 2033 | Medical doctor and researcher; focused on R&D over compliance |

---

## KEY EVENTS TIMELINE

| Date | Event |
|---|---|
| 2034-Q4 | Peak valuation: ₡5.2B market cap, 5,800 employees |
| 2035-Q1 | Synapse-7 Revision B units shipped; first failure reports surface within 6 weeks |
| 2035-Q1 | NetSec Incident #47 — unauthorized access detected in client network monitoring systems; incident classified as "minor system anomaly" in official reports |
| 2035-Q2 | First product recall (Synapse-7 Revision B, partial) |
| 2035-Q2 | Meridian Financial Group terminates NetSec contract (₡85M/year) |
| 2035-Q3 | LogiChain delays exceed 30% for first time; vendor costs begin rising sharply |
| 2035-Q3 | DataVault 72-hour outage; 1,200 enterprise clients affected |
| 2035-Q4 | Three additional client losses in NetSec; Titan Defense, Pacific Rim Health, Sector 12 Authority |
| 2035-Q4 | ECHO cardiac regulator linked to 12 patient deaths; BioTech issues delayed recall |
| 2036-Q1 | ₡380M class-action lawsuit filed against BioTech Division |
| 2036-Q1 | Stock drops below ₡50 for first time since 2033 |
| 2036-Q2 | Board of directors convenes emergency session; acquisition or bankruptcy options under review |
| 2036-Q3 | Employee headcount reduced to ~4,200 through layoffs and attrition |

---

## FINANCIAL SNAPSHOT (FY2035)

| Metric | FY2034 | FY2035 | Change |
|---|---|---|---|
| Revenue | ₡3.4B | ₡2.1B | -38% |
| Operating Margin | 14% | -8% | -22 pts |
| Net Income | ₡310M | (₡420M) | N/A |
| Cash on Hand | ₡890M | ₡210M | -76% |
| Debt | ₡1.1B | ₡1.8B | +64% |
| Headcount | 5,800 | 4,200 | -28% |

---

## ASSESSMENT

NovaCorp's decline was not sudden. Warning signs appeared across multiple divisions over 18 months — rising vendor costs, declining review sentiment, employee complaints, incident patterns, audit flags. No single system aggregated these signals into actionable intelligence. Each division operated its own data, and cross-divisional visibility was limited to quarterly board reviews.

The data in this package spans financials, incidents, employee feedback, customer reviews, audit findings, supply chain records, server logs, and more. The signals are there. Whether someone connects them is a different question.`;

export const COMPANY_PROFILE: CompanyOverviewData = {
  legalName: "NovaCorp Industries, Inc.",
  ticker: "NVC",
  founded: 2031,
  headquarters: "1 NovaCorp Plaza, Sector 7, Neo-Ghost City",
  employees: 4200,
  peakEmployees: 5800,
  revenueFY2035: "₡2.1B",
  peakRevenueFY2034: "₡3.4B",
  stockPrice: 41.20,
  stockChangeYTD: -47,
  operatingMarginFY2035: -8,
  netIncomeFY2035: "-₡420M",
  cashOnHand: "₡210M",
  debt: "₡1.8B",
  status: "CRITICAL — Board evaluating acquisition offers or Chapter 11 restructuring",
};

export const DIVISION_FINANCIALS: DivisionFinancial[] = [
  {
    division: "Cyberware",
    revenue: 140.2,
    cogs: 88.7,
    grossMargin: 51.5,
    operatingExpenses: 52.3,
    operatingIncome: -0.8,
    headcount: 3200,
    revenuePerEmployee: 43.8,
    riskLevel: "CRITICAL",
    vp: "Dmitri Volkov",
    vpTenure: "Since 2032",
    crisisSummary: "Synapse-7 Rev B 12% defect rate, 47 injuries, ₡95M recall, NGCSB regulatory inquiry.",
    keyIssues: [
      "3 product recalls in the last 12 months",
      "Synapse-7 Revision B units failure rate at 12%",
      "47 reported injuries from neural surges",
      "₡95M direct recall & replacement expense",
      "NGCSB (Neo-Ghost Cyberware Standards Board) license suspension risk"
    ],
    immediateNeeds: [
      "Halt Synapse-7 Rev B production line immediately",
      "Deploy field firmware patch & medical triage team",
      "Cooperate fully with NGCSB to avoid operating ban",
      "Replace defensive VP leadership or institute independent quality gate"
    ]
  },
  {
    division: "NetSec",
    revenue: 108.6,
    cogs: 22.4,
    grossMargin: 86.2,
    operatingExpenses: 48.7,
    operatingIncome: 37.5,
    headcount: 1800,
    revenuePerEmployee: 60.3,
    riskLevel: "HIGH",
    vp: "Sarah Chen",
    vpTenure: "Since 2034",
    crisisSummary: "Lost 4 marquee clients (₡150M+ ARR) after Incident #47 coverup leaked to press.",
    keyIssues: [
      "Lost Meridian Financial Group (₡85M/year ARR)",
      "Lost Titan Defense Systems, Pacific Rim Health, Sector 12 Authority",
      "Incident #47 coverup: classified as 'minor anomaly' despite root compromise",
      "Catastrophic enterprise trust erosion and leak to cybersecurity press"
    ],
    immediateNeeds: [
      "Publish comprehensive transparent Incident #47 post-mortem",
      "Engage third-party security auditor (e.g., CyberTrust Alliance)",
      "Offer Meridian & Titan remediation SLA guarantees & fee credits",
      "Empower VP Sarah Chen with direct board reporting authority"
    ]
  },
  {
    division: "LogiChain",
    revenue: 95.3,
    cogs: 34.8,
    grossMargin: 60.5,
    operatingExpenses: 85.2,
    operatingIncome: -24.7,
    headcount: 1200,
    revenuePerEmployee: 79.4,
    riskLevel: "CRITICAL",
    vp: "Viktor Kozlov",
    vpTenure: "Since 2032",
    crisisSummary: "34% orders delayed >2 wks, vendor costs +28% YoY, CFO forensic audit into kickbacks.",
    keyIssues: [
      "34% order delivery delays exceeding 14 days",
      "Vendor procurement costs surged +28% YoY on flat volumes",
      "CFO Diana Frost flagged fraudulent vendor invoicing & unverified suppliers",
      "Severe operational drag on Cyberware & BioTech manufacturing lines"
    ],
    immediateNeeds: [
      "Complete CFO Frost's forensic vendor audit within 14 days",
      "Freeze non-essential third-party vendor contracts",
      "Consolidate tier-1 logistics to vetted ISO-standard couriers",
      "Institute mandatory multi-signature PO approvals above ₡50,000"
    ]
  },
  {
    division: "DataVault",
    revenue: 81.4,
    cogs: 29.1,
    grossMargin: 52.3,
    operatingExpenses: 38.6,
    operatingIncome: 13.7,
    headcount: 950,
    revenuePerEmployee: 85.7,
    riskLevel: "HIGH",
    vp: "Tomoko Sato",
    vpTenure: "Since 2033",
    crisisSummary: "4 major outages in 6 months, 72h blackout hitting 1,200 clients, retention plummeted to 61%.",
    keyIssues: [
      "72-hour continuous downtime in Jan 2036 affecting 1,200 enterprise clients",
      "Client retention collapsed from 89% in 2034 to 61% in 2036",
      "Zero infrastructure capex upgrades since 2033 due to CTO/VP budget rejections",
      "Severe server degradation and cascading power failovers"
    ],
    immediateNeeds: [
      "Allocate emergency ₡18M capex for core cluster redundancy",
      "Migrate vulnerable legacy 2033 nodes to containerized cloud clusters",
      "Enact 99.99% uptime guarantee with client clawback incentives",
      "Align CTO Rajan Patel & VP Tomoko Sato on unified infrastructure roadmap"
    ]
  },
  {
    division: "BioTech",
    revenue: 54.7,
    cogs: 28.9,
    grossMargin: 25.8,
    operatingExpenses: 31.4,
    operatingIncome: -5.6,
    headcount: 1100,
    revenuePerEmployee: 49.7,
    riskLevel: "CRITICAL",
    vp: "Dr. Yuki Tanaka",
    vpTenure: "Since 2033",
    crisisSummary: "₡380M class action (Case #NGC-2036-00847) on ECHO regulator (12 deaths; defect concealed 8 mos).",
    keyIssues: [
      "ECHO cardiac regulator linked to 12 patient fatalities & 200+ adverse events",
      "₡380M class-action lawsuit filed in Neo-Ghost High Court",
      "Internal memos prove engineering knew of defect 8 months prior to recall",
      "Criminal liability risks for executive leadership & license revocation"
    ],
    immediateNeeds: [
      "Establish ₡150M escrow settlement fund with insurance syndicate",
      "Issue 100% voluntary global recall of all ECHO cardiac series units",
      "Appoint independent Bio-Ethics & Medical Safety ombudsman",
      "Cooperate with health prosecutors to mitigate punitive statutory damages"
    ]
  },
  {
    division: "Corporate / Unallocated",
    revenue: 0.0,
    cogs: 0.0,
    grossMargin: 0.0,
    operatingExpenses: 41.3,
    operatingIncome: -41.3,
    headcount: 250,
    revenuePerEmployee: 0.0,
    riskLevel: "HIGH",
    vp: "Executive Committee (Marcus Vane / Diana Frost)",
    vpTenure: "Founded",
    crisisSummary: "High overhead, siloed communications, lack of cross-divisional early warning systems.",
    keyIssues: [
      "₡41.3M corporate overhead burn with zero revenue offset",
      "CEO Marcus Vane increasingly disengaged and absent from investor calls",
      "Complete absence of unified intelligence platform to catch cross-divisional signals"
    ],
    immediateNeeds: [
      "Deploy cross-divisional Intelligence Command Center immediately",
      "Consolidate executive overhead & eliminate redundant administrative layers",
      "Establish Board Special Turnaround Committee"
    ]
  }
];

export const QUARTERLY_METRICS: QuarterlyMetric[] = [
  { quarter: "Q4 2032", totalRevenue: 582.4, grossMarginPct: 51.2, operatingExpenses: 248.6, netIncome: 47.3, cashOnHand: 892.1, burnRate: 12.4, debtLevel: 320.5 },
  { quarter: "Q1 2033", totalRevenue: 574.8, grossMarginPct: 50.8, operatingExpenses: 251.2, netIncome: 39.1, cashOnHand: 878.7, burnRate: 14.2, debtLevel: 325.8 },
  { quarter: "Q2 2033", totalRevenue: 538.2, grossMarginPct: 47.3, operatingExpenses: 264.7, netIncome: 12.4, cashOnHand: 842.1, burnRate: 22.8, debtLevel: 348.2 },
  { quarter: "Q3 2033", totalRevenue: 521.6, grossMarginPct: 45.1, operatingExpenses: 271.3, netIncome: -2.8, cashOnHand: 815.3, burnRate: 28.6, debtLevel: 372.4 },
  { quarter: "Q4 2033", totalRevenue: 504.3, grossMarginPct: 42.8, operatingExpenses: 289.4, netIncome: -18.7, cashOnHand: 768.2, burnRate: 35.4, debtLevel: 412.6 },
  { quarter: "Q1 2034", totalRevenue: 498.7, grossMarginPct: 41.2, operatingExpenses: 294.8, netIncome: -28.3, cashOnHand: 712.4, burnRate: 42.1, debtLevel: 448.3 },
  { quarter: "Q2 2034", totalRevenue: 487.1, grossMarginPct: 39.6, operatingExpenses: 298.2, netIncome: -38.9, cashOnHand: 643.7, burnRate: 49.8, debtLevel: 478.6 },
  { quarter: "Q3 2034", totalRevenue: 480.2, grossMarginPct: 38.4, operatingExpenses: 297.5, netIncome: -44.2, cashOnHand: 568.3, burnRate: 58.2, debtLevel: 512.4 },
  { quarter: "Q4 2035 (Est)", totalRevenue: 430.0, grossMarginPct: 32.1, operatingExpenses: 310.0, netIncome: -110.0, cashOnHand: 280.0, burnRate: 75.0, debtLevel: 1500.0 },
  { quarter: "Q1 2036 (Now)", totalRevenue: 390.0, grossMarginPct: 28.5, operatingExpenses: 325.0, netIncome: -145.0, cashOnHand: 210.0, burnRate: 88.0, debtLevel: 1800.0 }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "evt-1",
    date: "2031-01-15",
    quarter: "2031-Q1",
    division: "Corporate",
    title: "NovaCorp Founded",
    description: "Marcus Vane and 3 co-founders secure ₡12M seed funding from Neo-Ghost Ventures.",
    severity: "INFO",
    impact: "Initial launch pad for Synapse-7 R&D",
    category: "Financial"
  },
  {
    id: "evt-2",
    date: "2033-05-10",
    quarter: "2033-Q2",
    division: "Corporate",
    title: "Initial Public Offering (IPO)",
    description: "NVC lists on Neo-Ghost Exchange at ₡88/share, raising ₡1.2B for multi-divisional expansion.",
    severity: "INFO",
    impact: "Capitalizes NetSec, LogiChain, DataVault, and BioTech divisions",
    category: "Financial"
  },
  {
    id: "evt-3",
    date: "2034-11-20",
    quarter: "2034-Q4",
    division: "Corporate",
    title: "All-Time Peak Valuation",
    description: "NovaCorp reaches ₡5.2B market cap, ₡3.4B annual revenue, and 5,800 global employees.",
    severity: "INFO",
    impact: "Peak organizational scale before operational cracks begin surfacing",
    category: "Financial"
  },
  {
    id: "evt-4",
    date: "2035-01-12",
    quarter: "2035-Q1",
    division: "Cyberware",
    title: "Synapse-7 Rev B Rollout",
    description: "New cost-reduced Revision B units ship globally. First failure reports surface within 6 weeks.",
    severity: "HIGH",
    impact: "Initial neural overheating anomalies reported in consumer cyberware clinics",
    category: "Product Failure"
  },
  {
    id: "evt-5",
    date: "2035-02-28",
    quarter: "2035-Q1",
    division: "NetSec",
    title: "Incident #47 Network Breach",
    description: "Unauthorized access detected in client monitoring systems. Internally classified as 'minor anomaly' to preserve client contracts.",
    severity: "CRITICAL",
    impact: "Concealment later leads to massive breach leak and client revolts",
    category: "Operational"
  },
  {
    id: "evt-6",
    date: "2035-05-04",
    quarter: "2035-Q2",
    division: "Cyberware",
    title: "Synapse-7 Partial Recall",
    description: "First recall announced. Dmitri Volkov insists defect is limited to specific batch serials.",
    severity: "HIGH",
    impact: "₡22M initial charge; customer trust shaken",
    category: "Product Failure"
  },
  {
    id: "evt-7",
    date: "2035-06-18",
    quarter: "2035-Q2",
    division: "NetSec",
    title: "Meridian Financial Contract Termination",
    description: "Meridian Financial Group terminates ₡85M/year contract after finding undisclosed anomalies from Incident #47.",
    severity: "CRITICAL",
    impact: "Direct 20% loss of NetSec annual revenue run-rate",
    category: "Client Loss"
  },
  {
    id: "evt-8",
    date: "2035-08-11",
    quarter: "2035-Q3",
    division: "LogiChain",
    title: "Supply Chain Delays Exceed 30%",
    description: "LogiChain delivery bottlenecks hit 34%; vendor procurement costs jump +28% YoY.",
    severity: "HIGH",
    impact: "Production stalls across Cyberware & BioTech manufacturing centers",
    category: "Operational"
  },
  {
    id: "evt-9",
    date: "2035-09-24",
    quarter: "2035-Q3",
    division: "DataVault",
    title: "72-Hour DataVault Outage",
    description: "Unmaintained 2033 hardware clusters fail simultaneously, causing 3-day outage for 1,200 enterprise clients.",
    severity: "CRITICAL",
    impact: "Enterprise retention plummets from 89% to 61%",
    category: "Product Failure"
  },
  {
    id: "evt-10",
    date: "2035-11-15",
    quarter: "2035-Q4",
    division: "NetSec",
    title: "Exodus of Defense & Health Clients",
    description: "Titan Defense Systems, Pacific Rim Health, and Sector 12 Authority terminate multi-year contracts.",
    severity: "CRITICAL",
    impact: "Additional ₡65M ARR vaporized from NetSec division",
    category: "Client Loss"
  },
  {
    id: "evt-11",
    date: "2035-12-05",
    quarter: "2035-Q4",
    division: "BioTech",
    title: "ECHO Cardiac Regulator Recall & Deaths",
    description: "ECHO device linked to 12 patient deaths and 200+ adverse events; internal memos leak proving 8-month delay in disclosure.",
    severity: "CRITICAL",
    impact: "Massive public outcry, criminal investigation referral, total brand damage",
    category: "Legal/Compliance"
  },
  {
    id: "evt-12",
    date: "2036-01-20",
    quarter: "2036-Q1",
    division: "BioTech",
    title: "₡380M Class Action Lawsuit Filed",
    description: "Patient v. NovaCorp Industries (Case #NGC-2036-00847) filed in Neo-Ghost High Court seeking ₡380M in damages.",
    severity: "CRITICAL",
    impact: "Exceeds total cash reserves (₡210M); triggers default covenants",
    category: "Legal/Compliance"
  },
  {
    id: "evt-13",
    date: "2036-02-14",
    quarter: "2036-Q1",
    division: "Corporate",
    title: "NVC Stock Plunges Below ₡50",
    description: "Stock falls to ₡41.20 (-47% YTD), triggering institutional investor sell-offs and credit downgrades.",
    severity: "CRITICAL",
    impact: "Credit facilities frozen; debt climbs to ₡1.8B",
    category: "Financial"
  },
  {
    id: "evt-14",
    date: "2036-03-15",
    quarter: "2036-Q2",
    division: "Corporate",
    title: "Emergency Board Session Convened",
    description: "Board reviews immediate Chapter 11 bankruptcy filing vs emergency fire-sale acquisition or forensic turnaround.",
    severity: "CRITICAL",
    impact: "Turnaround Command Center established to execute emergency recovery plan",
    category: "Governance"
  }
];

export const LEADERSHIP_ROSTER: LeadershipMember[] = [
  {
    name: "Marcus Vane",
    title: "CEO & Co-Founder",
    tenure: "Since Founding (2031)",
    background: "Serial cybernetics entrepreneur, charismatic founder, led 2033 IPO.",
    notes: "Public face of company; increasingly disengaged, absent from investor calls, avoiding board accountability.",
    statusRisk: "HIGH"
  },
  {
    name: "Diana Frost",
    title: "Chief Financial Officer (CFO)",
    tenure: "Since 2032",
    background: "Former Managing Director at Meridian Financial; risk & restructuring specialist.",
    notes: "Leading the forensic audit into LogiChain vendor kickbacks; sounding alarm on ₡210M cash depletion.",
    statusRisk: "LOW"
  },
  {
    name: "Rajan Patel",
    title: "Chief Technology Officer (CTO)",
    tenure: "Since 2033",
    background: "Distributed systems architect; ex-Apex Dynamics.",
    notes: "Severe ongoing budget friction with division VPs; rejected DataVault 2034-2035 capex proposals.",
    statusRisk: "MEDIUM"
  },
  {
    name: "Dmitri Volkov",
    title: "VP, Cyberware Division",
    tenure: "Since 2032",
    background: "Neural hardware engineer, architect of original Synapse-7.",
    notes: "Extremely defensive regarding Synapse-7 Rev B failure rates; resisted initial NGCSB inquiries.",
    statusRisk: "HIGH",
    division: "Cyberware"
  },
  {
    name: "Sarah Chen",
    title: "VP, NetSec Division",
    tenure: "Since 2034",
    background: "Former Cyber Defense Commander, Sector 7 Municipal Authority.",
    notes: "Inherited Incident #47 coverup; frustrated by corporate secrecy; pushing for full external transparency.",
    statusRisk: "MEDIUM",
    division: "NetSec"
  },
  {
    name: "Viktor Kozlov",
    title: "VP, LogiChain Division",
    tenure: "Since 2032",
    background: "Global logistics veteran, high-frequency supply routing.",
    notes: "Under active internal forensic audit for unapproved vendor contract escalations (+28% cost markup).",
    statusRisk: "HIGH",
    division: "LogiChain"
  },
  {
    name: "Tomoko Sato",
    title: "VP, DataVault Division",
    tenure: "Since 2033",
    background: "Cloud infrastructure architect, fault-tolerant network design.",
    notes: "Repeatedly warned of 2033 hardware obsolescence; infrastructure upgrade requests were repeatedly denied.",
    statusRisk: "LOW",
    division: "DataVault"
  },
  {
    name: "Dr. Yuki Tanaka",
    title: "VP, BioTech Division",
    tenure: "Since 2033",
    background: "Cardiovascular surgeon & biomedical researcher.",
    notes: "Prioritized rapid R&D over clinical compliance; named in NGC-2036-00847 lawsuit for delayed ECHO recall.",
    statusRisk: "HIGH",
    division: "BioTech"
  }
];

export const INITIAL_LOADED_FILES: LoadedCorporateFile[] = [
  {
    id: "file-00",
    name: "00_company_overview.md",
    type: "markdown",
    category: "Corporate Strategy",
    size: "4.8 KB",
    lastUpdated: "2036-03-15",
    isBuiltIn: true,
    content: COMPANY_OVERVIEW_RAW_MD,
    summary: "Complete strategic profile of NovaCorp Industries detailing ₡2.1B revenue contraction (-38%), ₡420M net loss, ₡210M remaining cash, five divisional crises, and board emergency status.",
    riskLevel: "CRITICAL",
    affectedDivisions: ["Cyberware", "NetSec", "LogiChain", "DataVault", "BioTech", "Corporate"],
    keyFindings: [
      "Cash on hand dropped -76% to ₡210M against ₡1.8B debt load and quarterly burn of ~₡58M+.",
      "BioTech facing existential ₡380M class action over concealed ECHO cardiac defect (12 deaths).",
      "NetSec lost 4 anchor clients (including Meridian ₡85M/yr) following Incident #47 breach coverup.",
      "LogiChain vendor costs inflated +28% YoY under active forensic fraud audit.",
      "Root systemic breakdown: complete absence of cross-divisional signal aggregation."
    ],
    financialImpact: "₡590M+ immediate liability exposure (₡380M lawsuit + ₡95M recall + ₡115M client churn)",
    urgentActions: [
      "Deploy cross-divisional early-warning signal intelligence hub.",
      "Enact liquidity preservation plan to extend 3.6 month runway.",
      "Form Board Special Litigation Committee to settle BioTech suit."
    ]
  },
  {
    id: "file-01",
    name: "01_division_financials.csv",
    type: "csv",
    category: "Financial Audits",
    size: "1.2 KB",
    lastUpdated: "2036-03-10",
    isBuiltIn: true,
    content: `Division,Revenue,COGS,GrossMargin,OperatingExpenses,OperatingIncome,Headcount,RevenuePerEmployee
Cyberware,140.2,88.7,51.5,52.3,-0.8,3200,43.8
NetSec,108.6,22.4,86.2,48.7,37.5,1800,60.3
LogiChain,95.3,34.8,60.5,85.2,-24.7,1200,79.4
DataVault,81.4,29.1,52.3,38.6,13.7,950,85.7
BioTech,54.7,28.9,25.8,31.4,-5.6,1100,49.7
Corporate/Unallocated,0.0,0.0,0.0,41.3,-41.3,250,0.0
TOTAL,480.2,203.9,276.3,297.5,-21.2,8500,56.5`,
    summary: "Granular P&L breakdown by operating division. NetSec and DataVault generate positive operating income, while LogiChain (-₡24.7M), BioTech (-₡5.6M), Cyberware (-₡0.8M), and Corporate (-₡41.3M) drive heavy deficits.",
    riskLevel: "HIGH",
    affectedDivisions: ["LogiChain", "BioTech", "Cyberware", "Corporate", "NetSec", "DataVault"],
    keyFindings: [
      "LogiChain has massive OpEx (₡85.2M on ₡95.3M revenue) resulting in -₡24.7M operating deficit.",
      "Corporate overhead (₡41.3M) wipes out the positive operating profits of NetSec (₡37.5M) and DataVault (₡13.7M).",
      "Cyberware headcount (3,200) exhibits extremely low revenue productivity (₡43.8k/emp)."
    ],
    financialImpact: "Operating loss of -₡21.2M in current quarterly run-rate.",
    urgentActions: [
      "Rationalize LogiChain OpEx by auditing vendor pass-through fees.",
      "Downsize corporate administrative overhead by 40%."
    ]
  },
  {
    id: "file-02",
    name: "02_quarterly_metrics.csv",
    type: "csv",
    category: "Financial Audits",
    size: "1.4 KB",
    lastUpdated: "2036-03-01",
    isBuiltIn: true,
    content: `Quarter,TotalRevenue,GrossMarginPct,OperatingExpenses,NetIncome,CashOnHand,BurnRate,DebtLevel
Q4 2032,582.4,51.2,248.6,47.3,892.1,12.4,320.5
Q1 2033,574.8,50.8,251.2,39.1,878.7,14.2,325.8
Q2 2033,538.2,47.3,264.7,12.4,842.1,22.8,348.2
Q3 2033,521.6,45.1,271.3,-2.8,815.3,28.6,372.4
Q4 2033,504.3,42.8,289.4,-18.7,768.2,35.4,412.6
Q1 2034,498.7,41.2,294.8,-28.3,712.4,42.1,448.3
Q2 2034,487.1,39.6,298.2,-38.9,643.7,49.8,478.6
Q3 2034,480.2,38.4,297.5,-44.2,568.3,58.2,512.4
Q4 2035,430.0,32.1,310.0,-110.0,280.0,75.0,1500.0
Q1 2036,390.0,28.5,325.0,-145.0,210.0,88.0,1800.0`,
    summary: "Historical quarterly performance showing steady gross margin erosion (51.2% down to 28.5%), surging debt (₡320M to ₡1.8B), and cash depletion accelerating to ₡88M/quarter burn.",
    riskLevel: "CRITICAL",
    affectedDivisions: ["Corporate"],
    keyFindings: [
      "Gross margin collapsed 22.7 percentage points from peak.",
      "Quarterly net loss widened from -₡2.8M in Q3 2033 to -₡145.0M in Q1 2036.",
      "Cash reserves dropped from ₡892.1M to ₡210M (only ~2.4 to 3.6 months of runway remaining)."
    ],
    financialImpact: "Impending liquidity exhaustion within 100 days without intervention.",
    urgentActions: [
      "Execute immediate liquidity firewall.",
      "Freeze all non-essential capex and secondary hiring."
    ]
  },
  {
    id: "file-03",
    name: "03_incident_log_summary.md",
    type: "markdown",
    category: "Incident & Quality Logs",
    size: "3.2 KB",
    lastUpdated: "2036-03-12",
    isBuiltIn: true,
    content: `# NOVACORP INCIDENT & AUDIT SUMMARY LOG

### Incident #47 (NetSec)
- **Date:** 2035-02-28
- **Severity:** Level 1 Critical
- **Description:** Threat actor compromised remote telemetry node in NetSec cluster. Client session tokens for Meridian Financial and Titan Defense were accessed.
- **Root Cause:** Zero-day exploit unpatched due to delayed maintenance schedule.
- **Internal Action Taken:** Labeled as 'minor telemetry glitch' in customer communication. Leaked to TechVanguard journal 4 months later.

### Quality Alert QA-309 (Cyberware)
- **Date:** 2035-01-12
- **Product:** Synapse-7 Neural Interface (Revision B)
- **Defect:** Voltage regulator fluctuation causing cortical micro-thermal burns in 12% of implanted subjects.
- **Injuries:** 47 confirmed medical interventions.
- **Status:** NGCSB formal violation notice served. ₡95M estimated recall and restitution costs.

### Adverse Clinical Registry Case #NGC-2036-00847 (BioTech)
- **Date:** 2035-12-05
- **Product:** ECHO Cardiac Pulse Regulator
- **Defect:** Battery capacitor short-circuit during high cardiovascular stress events.
- **Adverse Events:** 200+ reports, 12 confirmed fatalities.
- **Litigation:** ₡380M class-action damages demand.`,
    summary: "Forensic incident log detailing Incident #47 coverup, Synapse-7 Revision B cortical thermal burn defects, and ECHO cardiac regulator fatal capacitor defects.",
    riskLevel: "CRITICAL",
    affectedDivisions: ["NetSec", "Cyberware", "BioTech"],
    keyFindings: [
      "Pattern of internal suppression of safety-critical anomalies before regulatory or public disclosure.",
      "Lack of direct whistleblower or safety escalation pipeline to the Board.",
      "Cross-divisional impact: Cyberware and BioTech quality failures compounded NetSec reputational collapse."
    ],
    financialImpact: "₡475M+ combined litigation, recall, and settlement costs.",
    urgentActions: [
      "Institute immediate independent quality & clinical safety ombudsman.",
      "Establish binding corporate disclosure protocols for all Level 1 incidents."
    ]
  },
  {
    id: "file-04",
    name: "04_vendor_audit_findings.md",
    type: "markdown",
    category: "Forensic Audits",
    size: "2.6 KB",
    lastUpdated: "2036-03-14",
    isBuiltIn: true,
    content: `# CFO FORENSIC VENDOR AUDIT — PRELIMINARY FINDINGS
**Auditor:** Diana Frost, CFO & Forensic Review Team  
**Scope:** LogiChain Division Procurement (2034-Q1 to 2036-Q1)

### Key Audit Findings:
1. **Unregistered Subcontractors:** ₡42M in payments routed to 3 newly formed shell entities (Apex Logistics Ltd, Hyperion Freight, Sector 9 Routing) with no physical warehouses or vehicle fleets.
2. **28% Price Inflation:** Standard transport tariff rates increased 28% YoY while benchmark market freight rates fell 4%.
3. **Approval Bypasses:** 147 purchase orders were split below the ₡100,000 dual-signature threshold to evade board scrutiny.
4. **Conflict of Interest:** Senior LogiChain procurement managers identified as beneficial owners of secondary subcontracting entities.

### Immediate Recommendations:
- Suspend payments to flagged vendor accounts pending independent counsel review.
- Refer findings to Neo-Ghost Commercial Crimes Authority.
- Enforce automated multi-division ERP cross-checks.`,
    summary: "CFO Diana Frost's preliminary audit revealing ₡42M in fraudulent vendor shell company disbursements, 28% tariff inflation, and deliberate PO split maneuvers.",
    riskLevel: "CRITICAL",
    affectedDivisions: ["LogiChain", "Corporate"],
    keyFindings: [
      "₡42M in illicit payments identified to paper shell companies.",
      "Systematic circumvention of dual-signature authorization limits.",
      "Procurement corruption directly drives LogiChain's -₡24.7M operating deficit."
    ],
    financialImpact: "₡42M direct recoverable capital + ₡25M annual cost reduction upon contract rebidding.",
    urgentActions: [
      "Freeze payments to the 3 shell vendors immediately.",
      "Initiate legal clawback proceedings and criminal referral.",
      "Re-tender logistics contracts on open competitive auction."
    ]
  }
];

export const CRISIS_SCENARIOS: CrisisScenario[] = [
  {
    id: "scen-1",
    title: "Aggressive Turnaround & Vendor Clawback",
    category: "Cost Reduction & Governance",
    description: "Terminate fraudulent LogiChain vendors, claw back ₡42M in improper billings, cut corporate overhead by 40%, and rebid logistics to market rates.",
    cashDeltaQuarterly: 48.5,
    debtDelta: 0,
    runwayImpactMonths: 4.5,
    riskScore: 3,
    viability: "High",
    pros: [
      "Immediately recovers ₡42M capital",
      "Stops ₡25M/quarter in fraudulent and inflated procurement costs",
      "Demonstrates decisive fiduciary action to the Board and creditors"
    ],
    cons: [
      "Potential short-term logistics supplier disruption (1-2 weeks)",
      "Litigation friction with terminated vendors"
    ]
  },
  {
    id: "scen-2",
    title: "BioTech Class-Action Structured Settlement",
    category: "Legal Firewalls",
    description: "Settle Patient v. NovaCorp (₡380M demand) at structured ₡140M over 4 years backed by product liability insurance syndicate.",
    cashDeltaQuarterly: -12.0,
    debtDelta: 140,
    runwayImpactMonths: 2.0,
    riskScore: 5,
    viability: "High",
    pros: [
      "Eliminates existential ₡380M single-judgment bankruptcy trigger",
      "Restores regulatory standing with Neo-Ghost Health Standards Bureau",
      "Unlocks insurance co-pay coverage (protecting cash on hand)"
    ],
    cons: [
      "Adds ₡140M structured debt liabilities over 4-year term",
      "Requires formal public apology and compliance oversight"
    ]
  },
  {
    id: "scen-3",
    title: "DataVault Infrastructure Modernization (₡18M Capex)",
    category: "Revenue Recovery",
    description: "Inject ₡18M into redundant containerized server nodes, restore 99.99% SLA, and launch customer win-back campaign with service credits.",
    cashDeltaQuarterly: 14.0,
    debtDelta: 18,
    runwayImpactMonths: 1.5,
    riskScore: 4,
    viability: "High",
    pros: [
      "Halts enterprise client churn (lifting retention from 61% back toward 85%)",
      "Protects DataVault's positive ₡13.7M operating profit",
      "Eliminates catastrophic 72-hour outage recurrence risk"
    ],
    cons: [
      "Upfront ₡18M cash outlay in Month 1",
      "6-week technical migration window with maintenance windows"
    ]
  },
  {
    id: "scen-4",
    title: "NetSec Transparency & Incident #47 Remediation",
    category: "Client Retention",
    description: "Release independent third-party audit of Incident #47, offer Meridian Financial and Titan Defense zero-cost security upgrades and executive oversight.",
    cashDeltaQuarterly: 28.0,
    debtDelta: 5,
    runwayImpactMonths: 3.2,
    riskScore: 2,
    viability: "High",
    pros: [
      "Chance to win back ₡45M-₡85M in terminated enterprise accounts",
      "NetSec is inherently high margin (86.2% gross margin, ₡37.5M op profit)",
      "Clears market rumors and restores enterprise credibility"
    ],
    cons: [
      "Requires acknowledging prior disclosure failures publicly",
      "₡5M third-party auditing and client onboarding cost"
    ]
  },
  {
    id: "scen-5",
    title: "Chapter 11 Bankruptcy Restructuring",
    category: "Insolvency",
    description: "File for Chapter 11 bankruptcy protection to stay the ₡380M BioTech lawsuit and cram down ₡1.8B in debt while shedding underperforming units.",
    cashDeltaQuarterly: 15.0,
    debtDelta: -900,
    runwayImpactMonths: 6.0,
    riskScore: 9,
    viability: "Low",
    pros: [
      "Automatic stay halts all active lawsuits and creditor foreclosures",
      "Ability to reject unprofitable leases and vendor contracts"
    ],
    cons: [
      "Wipes out existing equity holders (stock to ~₡0)",
      "Massive customer attrition and brand destruction across NetSec and DataVault",
      "Exorbitant restructuring advisor and legal fees (₡35M+)"
    ]
  }
];
