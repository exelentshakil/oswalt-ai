'use client';

import React from 'react';
import { LayoutGrid, Users, MessageSquare, ChevronRight } from 'lucide-react';

export interface StripeFeatureGridProps {
  onOpenGovernance?: () => void;
  onOpenPipeline?: () => void;
  onOpenLogs?: () => void;
  onSelectCard?: (action: string) => void;
}

interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  linkText: string;
  action: 'pipeline' | 'governance' | 'logs';
}

const FEATURES: FeatureItem[] = [
  {
    id: 'services',
    icon: LayoutGrid,
    title: 'Python & FastAPI RAG systems.',
    description: 'Disciplined hands-on engineering across async FastAPI backends, Angular TypeScript frontends, Neo4j graph relationships, and containerized Docker deployments.',
    linkText: 'View RAG evaluation pipeline',
    action: 'pipeline',
  },
  {
    id: 'certifications',
    icon: Users,
    title: 'Trauma-informed AI governance.',
    description: 'Securiti-certified architect in NIST AI RMF and LLM safety guardrails (Cert ID: 14B411BCE-14B411A3D-1451CFE76), ensuring zero PII retention and 24/7 crisis safety.',
    linkText: 'View safety certifications & audit',
    action: 'governance',
  },
  {
    id: 'retainers',
    icon: MessageSquare,
    title: 'Repeatable UAT & release quality.',
    description: 'Translating product and clinician feedback into automated regression tests, offline local fixtures, and cost-controlled GCP workflows that respect non-profit budgets.',
    linkText: 'View execution telemetry & SLA',
    action: 'logs',
  },
];

export function StripeFeatureGrid({
  onOpenGovernance,
  onOpenPipeline,
  onOpenLogs,
  onSelectCard,
}: StripeFeatureGridProps) {
  const handleClick = (e: React.MouseEvent, action: 'pipeline' | 'governance' | 'logs') => {
    e.preventDefault();
    e.stopPropagation();

    if (action === 'governance') {
      if (onOpenGovernance) onOpenGovernance();
      else if (onSelectCard) onSelectCard('governance');
    } else if (action === 'pipeline') {
      if (onOpenPipeline) onOpenPipeline();
      else if (onSelectCard) onSelectCard('pipeline');
    } else if (action === 'logs') {
      if (onOpenLogs) onOpenLogs();
      else if (onSelectCard) onSelectCard('logs');
    }
  };

  return (
    <section className="py-12 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Tone Section Headline with Stripe Opacity Balance */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
            Built for mission-critical non-profit impact.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Pairing trauma-informed clinical expertise with disciplined systems engineering.
            </span>
          </h2>
        </div>

        {/* 3-Column Card Grid with Stripe Outline Icon Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col justify-between space-y-4 rounded-[6px] p-2 hover:bg-[var(--color-panel-subtle)]/40 transition-colors"
              >
                <div className="space-y-3">
                  {/* Stripe Outline Micro-Icon Box */}
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-2xs">
                    <Icon className="h-4 w-4" />
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] opacity-90 leading-relaxed">
                    <strong className="font-bold text-[var(--color-text-primary)] font-sans mr-1.5">
                      {feature.title}
                    </strong>
                    {feature.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleClick(e, feature.action)}
                  className="inline-flex items-center text-xs font-semibold text-[#533AFD] dark:text-[#7A68FF] hover:text-[#432DE0] dark:hover:text-[#9283FF] transition-colors group cursor-pointer text-left w-fit"
                >
                  <span>{feature.linkText}</span>
                  <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
