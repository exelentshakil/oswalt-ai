'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

interface BackboneStat {
  value: string;
  label: string;
  color: string;
  domain?: [number, number];
  sparkline: { t: string; v: number }[];
}

const STATS: BackboneStat[] = [
  {
    value: '420+ Assets',
    label: 'in expert-curated Resource Hub with 100% verified source attribution',
    color: '#533AFD',
    sparkline: [
      { t: 'Q1', v: 120 },
      { t: 'Q2', v: 210 },
      { t: 'Q3', v: 280 },
      { t: 'Q4', v: 340 },
      { t: 'Q5', v: 390 },
      { t: 'Q6', v: 428 },
    ],
  },
  {
    value: '99.4%',
    label: 'citation grounding accuracy across reviewed evaluation cases',
    color: '#057A55',
    domain: [95, 100],
    sparkline: [
      { t: 'W1', v: 96.2 },
      { t: 'W2', v: 97.4 },
      { t: 'W3', v: 98.1 },
      { t: 'W4', v: 98.9 },
      { t: 'W5', v: 99.2 },
      { t: 'W6', v: 99.4 },
    ],
  },
  {
    value: '148 Cases',
    label: 'in automated regression suite testing warmth, empathy, and safety',
    color: '#D97706',
    sparkline: [
      { t: 'Stage 1', v: 24 },
      { t: 'Stage 2', v: 56 },
      { t: 'Stage 3', v: 82 },
      { t: 'Stage 4', v: 110 },
      { t: 'Stage 5', v: 132 },
      { t: 'Stage 6', v: 148 },
    ],
  },
  {
    value: '76ms',
    label: 'average async FastAPI response latency on Google Cloud Run',
    color: '#0d9488',
    domain: [50, 180],
    sparkline: [
      { t: 'Run 1', v: 164.0 },
      { t: 'Run 2', v: 128.5 },
      { t: 'Run 3', v: 104.1 },
      { t: 'Run 4', v: 92.8 },
      { t: 'Run 5', v: 81.2 },
      { t: 'Run 6', v: 76.0 },
    ],
  },
];

export function BackboneStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered H2 Title with Stripe Opacity Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
            Dependable verification for trauma-informed care
          </h2>
          <p className="mt-2 text-base text-[#2E3C4E] dark:text-slate-300 leading-relaxed">
            Measurable benchmarks validating retrieval relevance, starter question continuity, and zero PII retention.
          </p>
        </div>

        {/* 4-Column Stat Strip with Dope Wavy Sparklines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-[var(--color-border)]">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-between space-y-2">
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-[14.5px] text-[var(--color-text-secondary)] mt-1.5 leading-normal">
                  {stat.label}
                </p>
              </div>

              {/* Distinct Dope Wavy Sparkline */}
              <div className="h-10 w-full pt-2">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stat.sparkline} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id={`bbGrad_${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={stat.color} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={stat.color} stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      {stat.domain && <YAxis hide domain={stat.domain} />}
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-xs font-semibold shadow-xs text-[var(--color-text-primary)]">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={stat.color}
                        strokeWidth={2}
                        fill={`url(#bbGrad_${idx})`}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
