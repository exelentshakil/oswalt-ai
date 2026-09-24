'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, HeartHandshake, BookOpen } from 'lucide-react';
import { mediaConfig } from '@/config/media';
import { siteConfig } from '@/config/site';

export function EnterpriseMediaShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // 3 Fully Bespoke, Domain-Specific Editorial Architectural Pillars for StrongAfter OSWALT
  const architecturalPillars = [
    {
      id: 'pillar-retrieval',
      tag: 'Neo4j + Vector Hybrid RAG',
      title: 'Precision Resource Discovery Without Hallucinations',
      description: 'Combines Neo4j relationship graphs with dense semantic embeddings in Python FastAPI, mapping user inquiries to curated articles with 100% verified source provenance.',
    },
    {
      id: 'pillar-trauma',
      tag: 'Trauma-Informed Evaluation',
      title: 'Empathetic Tone & Dignified Starter Questions',
      description: 'Systematic acceptance testing across suggested starter prompts and free-form questions, ensuring warmth, dignity, agency, and zero intrusive pressure.',
    },
    {
      id: 'pillar-governance',
      tag: 'Privacy & Cost Controls',
      title: 'Zero PII Retention & Affordable Non-Profit Cloud',
      description: 'Containerized FastAPI on Google Cloud Run with ephemeral session state, offline local test fixtures, and automated link integrity monitors that respect non-profit budgets.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part 1: Ambient Stage with High-Contrast Typography Scrim */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-black shadow-xl min-h-[420px] sm:min-h-[480px] flex items-end">
          {/* Looping Ambient HD Video with Dark Gradient Scrim */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              src={mediaConfig.ambientVideo.videoUrl}
              poster={mediaConfig.ambientVideo.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
            />
            {/* Multi-Layer Deep Scrim to Ensure 100% Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Foreground High-Contrast Controls & Copy */}
          <div className="relative z-10 w-full p-6 sm:p-10 flex flex-col justify-between gap-8">
            {/* Top Bar: Live Status & Controls */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-white border border-white/20 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse" />
                <span className="font-semibold tracking-wide" style={{ color: '#ffffff' }}>OSWALT Verification Pipeline Active</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300" style={{ color: '#CBD5E1' }}>FastAPI + Angular Staging</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-md cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-md cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>

            {/* Bottom Copy: High-Contrast Dark Card Scrim for Pristine Contrast */}
            <div className="max-w-2xl rounded-xl bg-black/85 backdrop-blur-md border border-white/20 p-6 sm:p-7 shadow-2xl space-y-3">
              <div
                style={{ color: '#00D4FF' }}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider !text-[#00D4FF] font-bold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                Trauma-Informed Engineering Standard
              </div>
              <h2
                style={{ color: '#ffffff' }}
                className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight !text-white leading-tight drop-shadow-sm"
              >
                Safe, trustworthy AI engineering for {siteConfig.name}.
              </h2>
              <p
                style={{ color: '#E2E8F0' }}
                className="text-xs sm:text-sm !text-slate-200 leading-relaxed font-normal"
              >
                Grounding vulnerable user inquiries in vetted clinical material, preserving total privacy, and empowering healing with dignity, choice, and verified source provenance.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: 3 Editorial Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {architecturalPillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                  {idx === 0 && <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />}
                  {idx === 1 && <HeartHandshake className="w-4 h-4 text-[var(--color-accent)]" />}
                  {idx === 2 && <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)] font-mono">
                <span>Phase {idx + 1} Deliverable</span>
                <span className="text-[var(--color-accent)] font-semibold">UAT Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
