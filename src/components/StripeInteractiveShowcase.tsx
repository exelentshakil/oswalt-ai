'use client';

import React, { useState, useEffect } from 'react';
import {
  Network,
  HeartHandshake,
  BookOpen,
  ShieldCheck,
  Zap,
  CheckCircle2,
  RefreshCw,
  Sliders,
  DollarSign,
  Radio,
  Lock,
  Search,
  ExternalLink,
  LifeBuoy,
  Activity,
  Check,
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { siteConfig } from '@/config/site';

// Mock Sparkline Data for Cards
const RETRIEVAL_CURVES = {
  hybrid: [
    { t: '1', score: 92 },
    { t: '2', score: 95 },
    { t: '3', score: 94 },
    { t: '4', score: 98 },
    { t: '5', score: 99 },
    { t: '6', score: 98.6 },
  ],
  graph: [
    { t: '1', score: 88 },
    { t: '2', score: 91 },
    { t: '3', score: 90 },
    { t: '4', score: 93 },
    { t: '5', score: 95 },
    { t: '6', score: 94.2 },
  ],
  vector: [
    { t: '1', score: 80 },
    { t: '2', score: 84 },
    { t: '3', score: 82 },
    { t: '4', score: 86 },
    { t: '5', score: 89 },
    { t: '6', score: 88.1 },
  ],
};

const LATENCY_FAILOVER_STREAM = [
  { t: '10:01', ms: 74 },
  { t: '10:02', ms: 78 },
  { t: '10:03', ms: 76 },
  { t: '10:04', ms: 82 },
  { t: '10:05', ms: 142 }, // failover trigger
  { t: '10:06', ms: 68 },  // recovered
  { t: '10:07', ms: 71 },
];

const BUDGET_BREAKDOWN = [
  { name: 'FastAPI Cloud Run', pct: 38, cost: '$1,140' },
  { name: 'Vector DB & Graph', pct: 24, cost: '$720' },
  { name: 'LLM Inference', pct: 26, cost: '$780' },
  { name: 'Buffer / Staging', pct: 12, cost: '$360' },
];

export function StripeInteractiveShowcase() {
  const [mounted, setMounted] = useState(false);

  // Interactive State for Card 1: Hybrid Retrieval Simulator
  const [retrievalMode, setRetrievalMode] = useState<'hybrid' | 'graph' | 'vector'>('hybrid');

  // Interactive State for Card 2: Trauma-Informed Tone Evaluator
  const [tonePreset, setTonePreset] = useState<'empowering' | 'gentle' | 'clinical'>('empowering');

  // Interactive State for Card 4: Ephemeral Privacy Vault
  const [vaultPulse, setVaultPulse] = useState(true);

  // Interactive State for Card 5: Crisis Detection & Dual Provider
  const [activeProvider, setActiveProvider] = useState<'fastapi-openai' | 'fastapi-gemini'>('fastapi-openai');
  const [failoverActive, setFailoverActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTriggerFailover = () => {
    setFailoverActive(true);
    setTimeout(() => {
      setActiveProvider((prev) => (prev === 'fastapi-openai' ? 'fastapi-gemini' : 'fastapi-openai'));
      setFailoverActive(false);
    }, 500);
  };

  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-14 border-t border-[var(--color-border)] bg-[var(--color-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trauma-Informed AI Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Rigorous engineering for sensitive human moments.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Built to make OSWALT dependable, grounded, and safe within non-profit budgets.
            </span>
          </h2>
        </div>

        {/* 6-Card High-Density Interactive Grid (Fully Balanced, Zero Bottom Voids) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Hybrid Retrieval Engine (Neo4j Graph + Vector Embeddings) */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Hybrid Graph RAG
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Network className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Neo4j Graph + Vector Discovery
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Matches complex trauma themes across vetted articles without hallucinations.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center gap-1.5 p-1 bg-[var(--color-panel-subtle)] rounded border border-[var(--color-border)]">
                <button
                  type="button"
                  onClick={() => setRetrievalMode('hybrid')}
                  className={`flex-1 py-1 text-[11px] font-mono rounded transition-all cursor-pointer ${
                    retrievalMode === 'hybrid' ? 'bg-[#533AFD] text-white font-bold' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  Hybrid (Graph+Vector)
                </button>
                <button
                  type="button"
                  onClick={() => setRetrievalMode('graph')}
                  className={`flex-1 py-1 text-[11px] font-mono rounded transition-all cursor-pointer ${
                    retrievalMode === 'graph' ? 'bg-[#533AFD] text-white font-bold' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  Neo4j Graph
                </button>
                <button
                  type="button"
                  onClick={() => setRetrievalMode('vector')}
                  className={`flex-1 py-1 text-[11px] font-mono rounded transition-all cursor-pointer ${
                    retrievalMode === 'vector' ? 'bg-[#533AFD] text-white font-bold' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  Vector Only
                </button>
              </div>

              {/* Sparkline Chart Filling Visual Rhythm */}
              <div className="rounded bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[var(--color-text-muted)]">Relevance Precision:</span>
                  <span className="font-bold text-[#00D924]">
                    {retrievalMode === 'hybrid' ? '98.6% Grounded' : retrievalMode === 'graph' ? '94.2% Exact' : '88.1% Fuzzy'}
                  </span>
                </div>

                <div className="h-14 w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={RETRIEVAL_CURVES[retrievalMode]} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="retrievalGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#533AFD" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#533AFD" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="score" stroke="#533AFD" strokeWidth={2} fill="url(#retrievalGrad)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] text-[var(--color-text-secondary)] font-mono pt-1 border-t border-[var(--color-border)]/50">
                  <span className="truncate">Path: (Inquiry)→[:COHORT_VETERAN]→(Article RES-1041)</span>
                  <span className="text-[#00D924] shrink-0 font-semibold">Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Trauma-Informed Tone & Starter Questions */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Evaluation Framework
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <HeartHandshake className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Warmth &amp; Dignity Acceptance Suite
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Automated regression coverage measuring empathy, clarity, and agency across starter questions.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded border border-[var(--color-border)]">
                {(['empowering', 'gentle', 'clinical'] as const).map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setTonePreset(preset)}
                    className={`py-1 text-[11px] font-mono capitalize rounded transition-all cursor-pointer ${
                      tonePreset === preset ? 'bg-[#533AFD] text-white font-bold' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>

              <div className="rounded bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[var(--color-text-muted)]">Subject Matter Alignment:</span>
                  <span className="text-[#00D924] font-bold">Passed UAT Spec</span>
                </div>
                <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]/70">
                  <p className="text-[11px] text-[var(--color-text-primary)] italic leading-relaxed">
                    {tonePreset === 'empowering' && '"You are in control of what you explore here, at your own pace."'}
                    {tonePreset === 'gentle' && '"It takes real courage to read through this. There is no right or wrong order."'}
                    {tonePreset === 'clinical' && '"Trauma responses often manifest as hyper-arousal and emotional numbing."'}
                  </p>
                </div>
                {/* Visual Progress Bar for 148 Cases */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
                    <span>Regression Test Suite</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">148 / 148 Passing (100%)</span>
                  </div>
                  <div className="w-full bg-[var(--color-border)] h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Link Integrity & Citation Provenance */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Provenance Engine
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <BookOpen className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero Broken Citations &amp; Fast Fallbacks
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Controlled link integrity audit ensuring users never hit 404 dead ends on external guides.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="h-2 w-2 rounded-full bg-[#00D924] shrink-0" />
                    <span className="text-[11px] text-[var(--color-text-primary)] truncate">StrongAfter Vetted Articles</span>
                  </div>
                  <span className="text-[#00D924] font-bold text-[10.5px] shrink-0">HTTP 200 OK</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                    <span className="text-[11px] text-[var(--color-text-primary)] truncate">External Veteran Directory</span>
                  </div>
                  <span className="text-amber-500 font-bold text-[10.5px] shrink-0">Graceful Mirror</span>
                </div>
              </div>

              {/* Provenance Audit Metric Strip */}
              <div className="rounded bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[var(--color-text-muted)]">Inventory Audit:</span>
                  <span className="text-[var(--color-text-primary)] font-semibold">428 Checked • 0 Dead Ends</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span>Canonical Fallback Cache:</span>
                  <span>100% Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Ephemeral Privacy Vault */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Confidentiality Guard
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Lock className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero PII Retained in Memory or Logs
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Volatile in-memory sessions that guarantee user disclosures are never written to permanent disk.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs font-mono space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">Disclosures Persisted:</span>
                  <span className="text-[#00D924] font-bold">0 Records (Zero-Knowledge)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">Session Scrubbing:</span>
                  <span className="text-[var(--color-text-primary)] font-semibold">Automatic on socket close</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">NIST AI RMF 100-1:</span>
                  <span className="text-[#533AFD] font-bold">Compliant Posture</span>
                </div>
              </div>

              {/* Verified Privacy Shield Indicator */}
              <div className="flex items-center justify-between p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  Survivor Privacy Validated
                </span>
                <span className="text-[var(--color-text-muted)]">SOC-2 / HIPAA Aligned</span>
              </div>
            </div>
          </div>

          {/* Card 5: Crisis Sentinel & Dual Provider Failover */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Crisis Protocol &amp; Uptime
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <LifeBuoy className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Crisis Intercept &amp; Dual Engine Failover
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Deterministic 988 lifeline escalation paired with instant dual-LLM cloud failover.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-xs font-mono">
                <span className="text-[var(--color-text-muted)]">Active Core:</span>
                <span className="font-bold text-[#533AFD]">
                  {activeProvider === 'fastapi-openai' ? 'FastAPI + OpenAI gpt-4o' : 'FastAPI + Gemini 2.0 Flash'}
                </span>
              </div>

              {/* Failover Latency Chart */}
              <div className="h-12 w-full">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={LATENCY_FAILOVER_STREAM} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="ms" stroke="#00D924" strokeWidth={1.8} fill="#00D924" fillOpacity={0.15} />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>

              <button
                type="button"
                onClick={handleTriggerFailover}
                disabled={failoverActive}
                className="w-full py-1.5 px-3 rounded bg-[var(--color-surface)] hover:bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${failoverActive ? 'animate-spin text-[#533AFD]' : ''}`} />
                <span>{failoverActive ? 'Switching Routing Engine...' : 'Test Dual-Provider Failover'}</span>
              </button>
            </div>
          </div>

          {/* Card 6: Non-Profit Cloud Cost Budget Guard */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  OpEx Governance
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <DollarSign className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Affordable Non-Profit Cloud Architecture
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Containerized Google Cloud Run with scale-to-zero and local fixture evaluation to prevent cloud waste.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs font-mono space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">Monthly OpEx Ceiling:</span>
                  <span className="font-bold text-[#00D924]">$3,000 Cap Verified</span>
                </div>
                
                {/* Horizontal Budget Distribution Stack */}
                <div className="w-full bg-[var(--color-border)] h-2 rounded-full overflow-hidden flex">
                  <div className="bg-[#533AFD] h-full" style={{ width: '38%' }} title="Cloud Run: 38%" />
                  <div className="bg-teal-500 h-full" style={{ width: '24%' }} title="Vector DB: 24%" />
                  <div className="bg-emerald-500 h-full" style={{ width: '26%' }} title="Inference: 26%" />
                  <div className="bg-amber-400 h-full" style={{ width: '12%' }} title="Buffer: 12%" />
                </div>

                <div className="flex items-center justify-between text-[10px] text-[var(--color-text-muted)]">
                  <span>FastAPI Cloud Run (38%)</span>
                  <span>Inference (26%)</span>
                  <span>Vector DB (24%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[11px] font-mono">
                <span className="text-[var(--color-text-muted)]">Inference per session:</span>
                <span className="font-bold text-[#00D924]">&lt; $0.0035 / query</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
