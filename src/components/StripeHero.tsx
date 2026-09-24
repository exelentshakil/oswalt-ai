'use client';

import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Play,
  CheckCircle2,
  RefreshCw,
  Radio,
  Lock,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { StripeWaveCanvas } from '@/components/StripeWaveCanvas';

export function StripeHero({
  onLaunchCockpit,
  onExploreSchemas,
  onExplore,
}: {
  onLaunchCockpit?: () => void;
  onExploreSchemas?: () => void;
  onExplore?: () => void;
}) {
  const [streamSimulating, setStreamSimulating] = useState(false);
  const [simulatedChunks, setSimulatedChunks] = useState(18);

  const handleSimulateStream = () => {
    setStreamSimulating(true);
    setSimulatedChunks(0);
    const interval = setInterval(() => {
      setSimulatedChunks((prev) => {
        if (prev >= 24) {
          clearInterval(interval);
          setStreamSimulating(false);
          return 24;
        }
        return prev + 4;
      });
    }, 120);
  };

  return (
    <section className="relative isolate overflow-hidden pt-4 pb-6 sm:pt-8 sm:pb-8">
      {/* Stripe Authentic 3D WebGL Iridescent Wave Ribbon Canvas */}
      <div className="pointer-events-none absolute -top-8 right-0 -z-10 w-full lg:w-[54%] xl:w-[50%] h-[480px] sm:h-[600px] lg:h-[700px] opacity-100 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,transparent_8%,black_36%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_8%,black_36%,black_100%)]">
        <StripeWaveCanvas />
      </div>

      {/* Stripe Authentic Ambient Radial Glow Aura */}
      <div className="pointer-events-none absolute -top-24 right-0 -z-20 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#FF5E3A]/12 via-[#635BFF]/15 to-[#00D4FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 -z-20 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[#635BFF]/8 via-[#7A68FF]/6 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Two-Tone Typography, Value Prop & Direct Action Triggers */}
          <div className="lg:col-span-7 space-y-5">
            {/* Live Telemetry Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/95 px-3.5 py-1.5 text-xs sm:text-[13px] text-[var(--color-text-secondary)] shadow-2xs backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse shrink-0" />
              <span className="font-bold text-[var(--color-text-primary)]">StrongAfter OSWALT:</span>
              <span>Trauma-Informed RAG &amp; Safety Standard</span>
              <ChevronRight className="h-3.5 w-3.5 text-[var(--color-text-muted)]" />
            </div>

            {/* Master Stripe Two-Tone Typography Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.12]">
                Trauma-informed AI engine to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] via-[#7A68FF] to-[#00D4FF] font-bold">
                  explore healing with dignity.
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-[19px] text-[#425466] dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
                {siteConfig.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                onClick={onLaunchCockpit || onExplore}
                className="h-10 px-5 text-[14.5px] font-semibold bg-[#635BFF] hover:bg-[#533AFD] text-white shadow-xs rounded-[4px] transition-all cursor-pointer flex items-center gap-1.5"
              >
                Launch evaluation cockpit
                <ChevronRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                onClick={onExploreSchemas || onExplore}
                className="h-10 px-5 text-[14.5px] font-medium border-[var(--color-border)] bg-[var(--color-surface)]/90 hover:bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] rounded-[4px] shadow-2xs cursor-pointer flex items-center gap-1.5 backdrop-blur-xs"
              >
                Explore RAG pipeline
                <ChevronRight className="h-4 w-4 text-[var(--color-text-muted)]" />
              </Button>
            </div>

            {/* 4-Pillar Executive Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs font-medium max-w-2xl">
              <div className="flex items-center gap-1.5 p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70 text-[var(--color-text-primary)]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate text-[11px]">Zero PII Retained</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70 text-[var(--color-text-primary)]">
                <span className="h-2 w-2 rounded-full bg-[#533AFD] shrink-0" />
                <span className="truncate text-[11px]">Grounded Citations</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70 text-[var(--color-text-primary)]">
                <span className="h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                <span className="truncate text-[11px]">Neo4j Graph RAG</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70 text-[var(--color-text-primary)]">
                <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                <span className="truncate text-[11px]">GCP Cloud Run</span>
              </div>
            </div>

            {/* Stripe Institutional Tech Stack Strip */}
            <div className="pt-5 border-t border-[var(--color-border)]/80 max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2.5">
                Engineered with production-grade AI &amp; systems standards
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 opacity-90 grayscale hover:grayscale-0 transition-all">
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">FastAPI</span>
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Angular</span>
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Neo4j Graph</span>
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Google Cloud</span>
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Docker</span>
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">NIST AI RMF</span>
                <span className="text-[13px] sm:text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Python Async</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Glass Telemetry HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-xl p-5 shadow-xl space-y-3.5 relative">
              {/* Card Aura Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]/80 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00D924] animate-pulse shrink-0" />
                  <span className="text-sm font-bold text-[var(--color-text-primary)] truncate">
                    OSWALT Core • RAG Evaluation Bus
                  </span>
                </div>
                <span className="rounded-[4px] bg-[#533AFD]/10 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] px-2.5 py-0.5 text-xs font-semibold border border-[#533AFD]/20 shrink-0 whitespace-nowrap">
                  Sub-80ms Latency
                </span>
              </div>

              {/* Real-time Subsystem Status Rows */}
              <div className="space-y-2.5">
                {[
                  { label: 'TRAUMA RETRIEVAL ENGINE', value: 'Neo4j Graph + Vector RAG', metric: '99.4% Grounded', subtext: '0 hallucinated links' },
                  { label: 'AI INFERENCE GATEWAY', value: 'Dual Cloud Provider Failover', metric: '99.98% SLA', subtext: 'FastAPI + Vertex/OpenAI' },
                  { label: 'CONFIDENTIALITY SHIELD', value: 'Ephemeral Session Memory', metric: '0 PII Retained', subtext: 'NIST AI RMF Posture' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/80">
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)] truncate">{row.label}</div>
                      <div className="text-[13.5px] font-bold text-[var(--color-text-primary)] truncate">{row.value}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-[#057A55] dark:text-emerald-400">{row.metric}</div>
                      <div className="text-[11px] text-[var(--color-text-secondary)]">{row.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Stream Simulator */}
              <div className="pt-1">
                <div className="rounded-lg bg-[#0A0D14] text-slate-200 p-3 space-y-2 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-300 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Radio className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
                      Vetted Grounding Vector Buffer
                    </span>
                    <span className="font-mono text-xs text-slate-400">{simulatedChunks} / 24 Chunks</span>
                  </div>

                  {/* Buffer Progress Bar */}
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#533AFD] via-[#00D4FF] to-emerald-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(simulatedChunks / 24) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-[11px] text-slate-400 font-mono">
                      Throughput: <strong className="text-emerald-400 font-semibold">48.2 KB/s</strong>
                    </span>
                    <button
                      type="button"
                      disabled={streamSimulating}
                      onClick={handleSimulateStream}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {streamSimulating ? (
                        <>
                          <RefreshCw className="w-3 h-3 animate-spin" />
                          Streaming...
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3" />
                          Simulate Stream
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Pill Footer */}
              <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] pt-0.5 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D924]" />
                  Vetted Clinical Source Attribution
                </span>
                <span className="text-[var(--color-text-muted)] text-[11px]">FastAPI + Cloud Run</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
