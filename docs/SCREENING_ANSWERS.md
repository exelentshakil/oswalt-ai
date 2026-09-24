# StrongAfter OSWALT Screening Answers

## Question 1: Describe a project you personally took from an unclear goal to production. What did you build, deliberately leave out, and later reconsider?

At Legiit ($1M ARR marketplace with 400k users), the leadership team wanted an automated operations command center to handle disputed deliverables, freelancer payouts, and high-risk transactions. The initial brief was vague: "make a smart system that flags bad orders and speeds up support."

Instead of jumping into a massive AI model or rebuilding the admin dashboard from scratch, i started by mapping the actual failure points in the database. I built a deterministic event-driven pipeline using Python, PostgreSQL, and Inngest background queues that ingested webhook events, evaluated transaction risk thresholds, and routed flagged orders into a clean triage queue for human operators.

What i deliberately left out was automated decision-making and auto-refunds. For sensitive money movements, false positives destroy user trust. I kept humans firmly in the loop with 1-click approval actions.

What i later reconsidered: after two months of clean production data and zero false escalations, we automated the low-risk routine payouts under $100 while keeping the multi-signature human review strictly for disputed orders. That kept development lean, avoided risky rollouts, and gave the team immediate operational relief.



## Question 2: An AI app gives fluent answers but misses relevant articles. With four hours to investigate, what would you inspect, and what evidence would change your approach?

Here is exactly how i would split those four hours:

Hour 1: Inspect the raw retrieval pipeline before the LLM prompt. I pull 20 historical queries where relevant articles were missed. I check the top-k chunks returned by the retriever and log the exact similarity scores. The goal is to answer one question: did the retriever fail to find the article, or did the retriever find it but the LLM generation prompt ignored or pruned it?

Hour 2: If the retriever never retrieved the article, i inspect embedding generation, chunk boundaries, and metadata filters. I check if strict category filters or date thresholds quietly excluded the document, or if chunk sizes cut key contextual sentences in half. I run a quick lexical BM25 test side by side with the vector search on those 20 queries to see if exact keywords would have found it.

Hour 3: If the article was retrieved in the top-k but the model failed to cite it, i inspect the prompt template, context window positioning, and citation formatting instructions. LLMs frequently suffer from "lost in the middle" effects when context is bloated with 10+ chunks. I test reducing context to the top 3-4 high-signal passages and making the citation instruction explicit and unambiguous.

Hour 4: Synthesize the evidence. The evidence that would change my approach is vocabulary mismatch. If users are searching using vulnerable, emotional, everyday phrases while the curated articles use clinical or formal terminology, pure vector similarity will consistently score low. If that is what the logs show, i would immediately shift from pure vector search to hybrid retrieval: combining Neo4j graph relationships (mapping user feelings to clinical topics) with dense embeddings and a lightweight cross-encoder reranker.



## Question 3: At your rate, how would you structure your first month within our $3,000 budget? Include available hours, priorities, and what you’d defer.

At my rate of $45/hr, a $3,000 budget gives us 66.6 billable hours, which works out to roughly 16 to 17 hours per week. That fits your delivery schedule comfortably while keeping budget utilization completely predictable.

Here is how i would structure the first month:

Week 1 (16 hours): Baseline audit and local offline test suite. I set up representative, non-sensitive test fixtures locally so we can run automated evaluations without burning paid cloud API credits. I inspect the existing Python backend retrieval logs, map the current citation inventory, and confirm baseline quality metrics with your product owner.

Week 2 (18 hours): Core retrieval and starter question improvements (Milestones 1 and 2). Fix the retrieval gaps identified in discovery, implement hybrid ranking in FastAPI, and run repeatable quality checks across suggested starter questions to ensure warm, trauma-informed continuity.

Week 3 (16 hours): Citation maintenance and Angular UI validation (Milestone 3). Implement the verified inventory updates, add graceful handling for moved or archived links so users never see a broken destination, and verify the Angular frontend citation cards and responsiveness.

Week 4 (16.6 hours): Production release readiness and UAT (Milestones 4 and 5). Prepare the GCP Cloud Run deployment configuration, verify rollback and recovery procedures, document local test commands, and support the team through UAT signoff.

What i would deliberately defer:
I would defer expanding the content library to external unvetted sources, scraping new web resources, or building complex automated scrapers. Those add unnecessary surface area before the core product is accepted and stable in production.



## Question 4: Give a specific example of an AI-generated solution you corrected or rejected. How did you catch the problem, and what did the initial tests miss?

While implementing an async document retrieval service in Python, an AI coding assistant generated a batch processing function using an async ORM loop. The code looked clean and idiomatic, and the initial unit tests passed with 100% green checks.

The problem was that the tests used a mock database with only three records in memory. When i reviewed the actual SQL query logs under load, the generated code was executing an N+1 query pattern: firing one database roundtrip for each retrieved chunk instead of executing a single vectorized batch query with proper joins. In production with real traffic, that would have choked database connection pools and caused latency spikes over 800ms.

Initial tests missed it because they only asserted that the final output list matched the expected mock output. They did not assert query count, connection pool saturation, or latency under concurrency.

I caught it by inspecting the generated diff with skeptical senior judgment, running a quick concurrency benchmark with 50 simulated requests, and watching the database connection telemetry. I rejected the AI's loop implementation, replaced it with a single bulk query with eager relationship loading, and added an automated test asserting that total database queries remain constant regardless of chunk count.



## Question 5: What feature or fix could you walk us through live using a non-confidential artifact? Specify your personal contribution and how you verified it worked.

I can walk you through the live OSWALT evaluation cockpit i built for this proposal:
Live Demo: https://oswalt-ai.vercel.app
GitHub Repository: https://github.com/exelentshakil/oswalt-ai

My personal contributions on this artifact:
1. Hybrid retrieval architecture: I structured the evaluation pipeline showing how user inquiries traverse Neo4j graph nodes (connecting sensitive themes like veteran experiences or first disclosure to curated articles) paired with vector similarity scores.
2. Citation provenance and link integrity: I built the resource inventory grid that tracks live HTTP status, ensuring that if an external link changes or redirects, the system automatically falls back to an approved canonical mirror rather than stranding a user on a 404 page.
3. Trauma-informed safety and privacy guard: I implemented the zero-PII confidentiality verification showing that sensitive user inputs remain strictly ephemeral in memory and are never persisted to long-term storage or exposed in server logs.

How i verified it worked:
I verified the implementation using Next.js production builds, simulated latency telemetry across dual providers (OpenAI gpt-4o-mini and Google Gemini failover), and curl verification scripts confirming clean HTTP 200 responses and authentic domain binding.
