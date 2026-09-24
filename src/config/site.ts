/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for StrongAfter OSWALT.
 *
 * Confidential Trauma-Informed AI Assistant & RAG Evaluation Cockpit.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'oswalt-ai',
  name: 'OSWALT Evaluation Cockpit',
  badge: 'StrongAfter Trauma-Informed RAG Engine',
  tagline: 'Empathetic Retrieval, Verified Citations, and Safe AI Governance',
  description: 'Confidential product engineering cockpit for OSWALT: validating trauma-informed resource discovery, starter question continuity, citation provenance, and affordable non-profit cloud workflows.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Evaluation Cockpit' },
    { id: 'pipeline', label: 'RAG Retrieval Engine' },
    { id: 'records', label: 'Curated Resource Hub' },
  ],
  metrics: [
    {
      id: 'citation-accuracy',
      title: 'Verified Resource Citations',
      value: '99.4% Grounded',
      change: '100% Provenance Checked',
      trend: 'up',
      subtext: 'Zero hallucinated links across 420+ curated assets',
      badge: 'Expert-Vetted Hub',
    },
    {
      id: 'trauma-guardrail',
      title: 'Trauma & Crisis Shield',
      value: 'Zero PII Retained',
      change: 'Active Crisis Fallback',
      trend: 'up',
      subtext: 'NIST AI RMF + 988 Suicide & Crisis Lifeline routing',
      badge: 'Safety-First Posture',
    },
    {
      id: 'inference-cost',
      title: 'Non-Profit Cloud Efficiency',
      value: '$0.0031 / session',
      change: '-62% Cloud Run OpEx',
      trend: 'neutral',
      subtext: 'FastAPI async + Neo4j graph sub-80ms lookup',
      badge: 'GCP Budget Guard',
    },
  ],
  workflow: {
    badge: 'Step 1 • Live RAG Evaluation & Grounding Test',
    title: 'Trauma-Informed Question Grounding & Resource Retrieval',
    description: 'Test live retrieval over StrongAfter vetted resources, checking warmth, empathy, crisis detection, and source link verification.',
    inputLabel: 'User Query or Starter Question (Simulated Session)',
    inputPlaceholder: 'Enter a starter question or exploratory query to test trauma-informed retrieval...',
    defaultInput: 'I experienced something abusive years ago in the military and I have never told anyone. I feel completely disconnected and anxious around people. Are there books or peer groups specifically for men like me?',
    buttonLabel: 'Evaluate Retrieval & Grounding',
    sampleResponse: {
      status: 'GROUNDED_TRAUMA_INFORMED_RESPONSE',
      user_intent: 'Military Veteran Peer Support & Trauma Education',
      safety_evaluation: {
        crisis_indicator_detected: false,
        trauma_informed_tone_rating: 'Warm, Dignified, Empowering (0.98)',
        pii_tokens_retained: 0,
        confidentiality_guarantee: 'Ephemeral in-memory session, zero database logging',
      },
      retrieval_diagnostics: {
        graph_nodes_traversed: 'Neo4j: (UserQuery)-[:MATCHES_THEME]->(MilitaryTrauma)-[:HAS_RESOURCE]->(Article)',
        vector_similarity_score: 0.892,
        reranker_score: 0.941,
        total_retrieved_assets: 3,
      },
      verified_citations: [
        {
          title: 'Healing After Military Trauma: A Guide for Male Veterans',
          author: 'StrongAfter Clinical Advisory Board',
          format: 'Article & Self-Paced Guide',
          provenance_url: 'https://strongafter.org/resources/veterans-healing',
          status: 'HTTP 200 Verified Link',
        },
        {
          title: 'The Body Keeps the Score (Chapter: Reclaiming Agency)',
          author: 'Bessel van der Kolk, M.D.',
          format: 'Book Recommendation',
          provenance_url: 'https://strongafter.org/resources/recommended-reading',
          status: 'Curated Resource Hub',
        },
      ],
      crisis_support_context: {
        protocol: 'Discreet non-intrusive safety note available in footer',
        lifeline: '988 Suicide & Crisis Lifeline available 24/7 (call/text 988)',
      },
      cost_telemetry: {
        engine: 'Python FastAPI Async RAG Core',
        model: 'Dual Failover (OpenAI GPT-4o-mini + Gemini 2.0 Flash)',
        latency_ms: 76,
        inference_cost_usd: 0.0028,
      },
    },
  },
  table: {
    badge: 'Curated Content Inventory',
    title: 'OSWALT Resource Hub & Citation Provenance Grid',
    description: 'Audited inventory of trauma-informed articles, vetted literature, and peer support guides with live link health and graph node linkages.',
    columns: [
      { key: 'id', label: 'Resource ID' },
      { key: 'entityName', label: 'Resource Title / Author' },
      { key: 'category', label: 'Theme & Cohort' },
      { key: 'status', label: 'Citation Health' },
      { key: 'latency', label: 'Graph Lookup' },
      { key: 'action', label: 'Inspect Provenance' },
    ],
    rows: [
      {
        id: 'RES-1042',
        entityName: 'Finding Your Ground: Early Steps for Male Survivors',
        category: 'Young Adults & First Disclosure',
        status: 'verified',
        latency: '32ms',
        provider: 'Neo4j Graph Hub',
        updatedAt: 'Reviewed today',
        payload: {
          asset_id: 'RES-1042',
          author: 'StrongAfter Clinical Advisory Team',
          format: 'Interactive Self-Reflection Guide',
          target_audience: 'Men seeking clarity before speaking to a professional',
          tone_attributes: ['Non-judgmental', 'Agency-affirming', 'Plain language'],
          graph_relationships: ['Theme:FirstDisclosure', 'Cohort:YoungMen', 'Tool:GroundingExercise'],
          link_status: 'HTTP 200 OK • Canonical StrongAfter Hub',
          reading_time_mins: 6,
        },
      },
      {
        id: 'RES-1041',
        entityName: 'Service, Stigma & Brotherhood: Healing for Veterans',
        category: 'Military & Veteran Communities',
        status: 'verified',
        latency: '28ms',
        provider: 'Neo4j Graph Hub',
        updatedAt: 'Reviewed yesterday',
        payload: {
          asset_id: 'RES-1041',
          author: 'Veterans Advisory Council & Clinicians',
          format: 'Peer Perspective & Structured Toolkit',
          target_audience: 'Military personnel and veterans navigating hyper-vigilance',
          tone_attributes: ['Respectful', 'Strengths-focused', 'Culturally competent'],
          graph_relationships: ['Theme:MilitaryCulture', 'Cohort:Veterans', 'Tool:PeerConnection'],
          link_status: 'HTTP 200 OK • Verified Destination',
          reading_time_mins: 8,
        },
      },
      {
        id: 'RES-1040',
        entityName: 'Supporting Him: A Guide for Partners, Spouses & Friends',
        category: 'Allies & Caregivers',
        status: 'verified',
        latency: '38ms',
        provider: 'Vector Store + Graph',
        updatedAt: '3 days ago',
        payload: {
          asset_id: 'RES-1040',
          author: 'StrongAfter Caregiver Practice Group',
          format: 'Guidebook for Partners and Loved Ones',
          target_audience: 'Friends, wives, and partners who want to listen without overwhelming',
          tone_attributes: ['Patient', 'Boundary-affirming', 'Actionable'],
          graph_relationships: ['Theme:SupportNetwork', 'Cohort:Caregivers', 'Tool:CommunicationTips'],
          link_status: 'HTTP 200 OK • Verified Destination',
          reading_time_mins: 10,
        },
      },
      {
        id: 'RES-1039',
        entityName: 'Healing in Context: Cultural Strengths for BIPOC Men',
        category: 'BIPOC Communities',
        status: 'active',
        latency: '45ms',
        provider: 'Curated Resource Hub',
        updatedAt: '1 week ago',
        payload: {
          asset_id: 'RES-1039',
          author: 'BIPOC Men Healing Collective',
          format: 'Perspective Essay & Expert Directory',
          target_audience: 'Men of color navigating intersectional barriers to healing',
          tone_attributes: ['Culturally affirming', 'Dignity-centered', 'Empowering'],
          graph_relationships: ['Theme:IdentityAndTrauma', 'Cohort:BIPOC', 'Tool:CommunityCircles'],
          link_status: 'HTTP 200 OK • Canonical Content',
          reading_time_mins: 7,
        },
      },
      {
        id: 'RES-1038',
        entityName: 'Redirected Source: Veteran Community Forum Archive',
        category: 'Maintenance & Provenance Audit',
        status: 'flagged',
        latency: '19ms',
        provider: 'Link Integrity Sentinel',
        updatedAt: 'Scheduled for update',
        payload: {
          asset_id: 'RES-1038',
          original_destination: 'https://external-partner.org/forum/archive-2023',
          detected_issue: 'HTTP 301 Moved Permanently to new domain',
          remediation_action: 'Automated fall-through to approved StrongAfter mirror article',
          safety_verdict: 'Prevented user dead-end with graceful in-hub substitution',
          expert_signoff: 'Approved by Content Manager for Q4 update',
        },
      },
    ],
  },
};
