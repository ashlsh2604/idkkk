import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

// Lazy initialize Google GenAI client
let aiClient: GoogleGenAI | null = null;
function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured. AI capabilities will be simulated or disabled until configured.");
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// AI War Room Chat endpoint
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, context, loadedFiles, conversationHistory } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getAI();
    
    const systemInstruction = `You are the Chief Turnaround Officer & Forensic Intelligence AI for NovaCorp Industries (Ticker: NVC, Neo-Ghost Exchange).
The company is in CRITICAL condition: Board evaluating Chapter 11 bankruptcy or emergency acquisition.
Key Financial Context:
- Revenue: ₡2.1B (-38% YoY), Net Income: -(₡420M), Cash: ₡210M (-76%), Debt: ₡1.8B (+64%), Stock: ₡41.20 (-47%).
- 5 Core Divisions:
  1. Cyberware (VP Dmitri Volkov): Synapse-7 Rev B 12% defect rate, 47 injuries, ₡95M recall cost, NGCSB investigation.
  2. NetSec (VP Sarah Chen): Lost 4 marquee clients (Meridian Financial ₡85M/yr, Titan Defense, Pacific Rim Health, Sector 12 Authority) after Incident #47 coverup leaked.
  3. LogiChain (VP Viktor Kozlov): 34% shipments delayed >2 weeks, vendor costs +28% YoY on flat volume, CFO forensic audit into vendor payment kickbacks/irregularities.
  4. DataVault (VP Tomoko Sato): 4 major outages in 6 months including 72h downtime affecting 1,200 clients, retention down to 61%, zero infra upgrades since 2033.
  5. BioTech (VP Dr. Yuki Tanaka): ₡380M class-action lawsuit (Patient v. NovaCorp NGC-2036-00847) over ECHO cardiac regulator (12 deaths, 200+ adverse events; defects known 8 months prior).
- Core Problem: Severe divisional data silos prevented aggregating cross-divisional warning signals into actionable intelligence.

Additional context from active corporate files:
${loadedFiles ? JSON.stringify(loadedFiles) : "No custom uploaded files attached yet."}

${context ? `Active View Context: ${context}` : ""}

Provide authoritative, crisp, strategic, and highly structured executive guidance. Cite specific metrics, divisions, executives, and risks. Give practical turnaround recommendations.`;

    const contents: any[] = [];
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.slice(-6).forEach((h: { role: string; text: string }) => {
        contents.push({
          role: h.role === "assistant" ? "model" : "user",
          parts: [{ text: h.text }],
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents as any,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({
      text: response.text || "No analysis returned.",
    });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    res.status(500).json({
      error: error.message || "Failed to generate AI response",
      fallbackText: "AI intelligence service encountered an issue. Ensure GEMINI_API_KEY is available in Settings.",
    });
  }
});

// Forensic File Ingestion & Analysis endpoint
app.post("/api/gemini/analyze-document", async (req, res) => {
  try {
    const { fileName, content, divisionTag } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    const ai = getAI();

    const prompt = `Analyze this newly loaded corporate file for NovaCorp Industries:
Filename: ${fileName}
Target Division / Scope: ${divisionTag || "General Corporate"}

File Content:
\`\`\`
${content.slice(0, 15000)}
\`\`\`

Perform an exhaustive forensic triage on this document and return a JSON object with:
1. "summary": Executive summary (2-3 sentences).
2. "riskLevel": "CRITICAL" | "HIGH" | "MEDIUM" | "LOW".
3. "affectedDivisions": Array of division names (Cyberware, NetSec, LogiChain, DataVault, BioTech, Corporate).
4. "keyFindings": Array of 3-5 concise bullet points highlighting hidden flags, financial liabilities, systemic negligence, or operational failures.
5. "financialImpact": Estimated monetary exposure or operational cost if unaddressed.
6. "urgentActions": Array of 2-3 immediate containment steps for the Turnaround Task Force.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    let parsed = {};
    try {
      parsed = JSON.parse(response.text || "{}");
    } catch {
      parsed = { summary: response.text, riskLevel: "HIGH", keyFindings: [] };
    }

    res.json(parsed);
  } catch (error: any) {
    console.error("Document Analysis Error:", error);
    // Intelligent local fallback if API key is not ready
    res.json({
      summary: `Analyzed ${req.body.fileName || "document"}. Contained operational logs and organizational signals relevant to NovaCorp turnaround.`,
      riskLevel: "HIGH",
      affectedDivisions: ["Corporate", "Cyberware", "LogiChain"],
      keyFindings: [
        "Identified operational anomalies and delayed reporting patterns.",
        "Cross-divisional data disconnect flagged in current audit cycle.",
        "Potential cash flow and reputational liability identified."
      ],
      financialImpact: "₡50M - ₡120M potential exposure",
      urgentActions: [
        "Isolate impacted operational streams immediately.",
        "Initiate cross-divisional forensic review with CFO Frost's audit team."
      ]
    });
  }
});

// Crisis Scenario Simulation endpoint
app.post("/api/gemini/simulate-scenario", async (req, res) => {
  try {
    const { scenarioTitle, scenarioDescription, actionType } = req.body;

    const ai = getAI();

    const prompt = `You are evaluating a strategic turnaround scenario for NovaCorp Industries (Cash: ₡210M, Debt: ₡1.8B, Annual Loss: -₡420M, Stock: ₡41.20).
Scenario: "${scenarioTitle}"
Action details: "${scenarioDescription}"
Action Category: "${actionType}"

Generate a rigorous financial, operational, and legal risk simulation. Return JSON with:
{
  "scenario": string,
  "projectedCashDelta": string (e.g. "+₡85M" or "-₡120M"),
  "newRunwayMonths": number (current is 3.6 months),
  "legalRiskScore": number (1-10, 10 being existential),
  "operationalViability": "High" | "Moderate" | "Low" | "Severe Risk",
  "boardRecommendation": "Approve with Stipulations" | "Reject Immediately" | "Fast-Track Immediate Execution" | "Seek Third-Party Mediation",
  "pros": string[],
  "cons": string[],
  "executiveQuote": string (simulated quote from CFO Diana Frost or CTO Rajan Patel)
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    let parsed = {};
    try {
      parsed = JSON.parse(response.text || "{}");
    } catch {
      parsed = { scenario: scenarioTitle, boardRecommendation: "Review under emergency committee" };
    }

    res.json(parsed);
  } catch (error: any) {
    console.error("Scenario Simulation Error:", error);
    res.json({
      scenario: req.body.scenarioTitle || "Emergency Restructuring",
      projectedCashDelta: "+₡65M / quarter",
      newRunwayMonths: 6.8,
      legalRiskScore: 7,
      operationalViability: "Moderate",
      boardRecommendation: "Approve with Stipulations",
      pros: ["Immediately slows cash bleed", "Demonstrates good-faith regulatory compliance"],
      cons: ["Short-term employee attrition risk", "Severance liabilities"],
      executiveQuote: "We must stop the cash hemorrhage before the Q3 board meeting or bankruptcy is inevitable. — Diana Frost, CFO"
    });
  }
});

// Vite middleware & Static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`NovaCorp Intelligence Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
