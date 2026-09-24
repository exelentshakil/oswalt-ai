hi Meredith, i built a working RAG evaluation and resource discovery cockpit for OSWALT so you can test live: https://oswalt-ai.vercel.app
code: https://github.com/exelentshakil/oswalt-ai | portfolio: https://shakilhq.com

it demonstrates hybrid graph and vector retrieval over curated trauma resources, starter question evaluation, automated citation link validation, and zero PII logging.

at $45/hr, your $3,000 monthly budget gives us ~66 hours (~16 hours/week), which fits your delivery priorities cleanly with daily github commits:
• week 1: audit current retrieval logs, build offline local test fixtures with non-sensitive queries, and map citation provenance
• week 2: fix retrieval gaps in the python fastapi core, add neo4j graph reranking, and tune suggested starter prompts
• week 3: wire up angular frontend citation cards, test link fallback behavior, and run uat regression runs
• week 4: cloud run production hardening, automated rollback checks, and release stabilization

which vector or embedding model is the fastapi backend currently querying (vertex ai text-embeddings, openai, or local sentence-transformers)?

happy to hop on a quick 10-minute call to walk through the live evaluation setup.

best,
Shak
