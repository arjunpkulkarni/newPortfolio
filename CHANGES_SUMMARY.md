# Portfolio + Resume Changes Summary

## Overview
Implemented comprehensive brand positioning and content improvements based on professional review feedback. The changes focus on establishing a clear, cohesive narrative: **"AI + full-stack engineer building real-time, user-facing intelligence systems."**

---

## 1. Homepage Changes (`src/app/page.tsx`)

### Hero Section
- **NEW Headline**: Changed from "Software Developer & Materials Engineer" to:
  - **"AI + full-stack engineer building real-time, user-facing intelligence systems."**
  - More prominent typography (base to lg font size, font-medium)
  
- **Added Location Badge**: "Open to remote + NYC + SF" to help with recruiter targeting

- **Description Update**: Moved technical description to secondary text with proper hierarchy

### About Section - Complete Rewrite
**Before**: Generic full-stack engineer description
**After**: Impact-focused narrative showing:
- Current role at Rumor (50k+ users)
- Previous founding engineer role at Curator.to (Intel & UpHonest backed, $1M raised)
- Specific technical achievements: agentic e-commerce, clinical AI, autonomous systems
- Research connection: nanofluidic energy harvesting

### NEW: "What I'm Building Now" Section
Added dedicated card showing active projects:
- Rumor mobile features (React Native, 50k+ users)
- Real-time LLM interaction platform (WebSockets + Flask)
- Nanofluidic energy systems research

### NEW: "Why I Build" Section
Added personal narrative explaining:
- Philosophy: Moving between AI, systems, and user problems without friction
- Real impact examples: latency reduction, clinical-grade AI, autonomous systems
- Call to action: "Let's build something meaningful together."

---

## 2. Resume Data Changes (`src/data/resume.tsx`)

### Header Information
- **Description**: Updated to "UIUC CS + Materials Engineering • Shipping AI agents, full-stack systems, and mobile experiences that solve real problems at scale"
- **Summary**: Completely rewritten to emphasize AI + full-stack positioning with specific achievements

### Skills Section - Complete Reorganization
**Before**: Scattered across "Programming Languages", "AI/ML & Deep Learning", "MLOps & Deployment", "Frameworks/Libraries", "Tools/Platforms"

**After**: Streamlined into 4 focused categories:
1. **Languages (Core)**: Python, TypeScript, JavaScript, C++, SQL
2. **Frameworks**: React, React Native, Next.js, Flask, FastAPI, Node.js, Express
3. **AI/ML**: PyTorch, TensorFlow, LangChain, RAG, RL, LLM Ops, OpenAI Assistants, Gemini, Vector Search
4. **Cloud/DevOps**: AWS, Docker, GitHub Actions, Linux, CI/CD
5. **Tools**: Postgres, MongoDB, Redis, ROS, SUMO, COMSOL, Git

---

## 3. Work Experience Updates

### Rumor (Current)
**Before**:
- "Built core React Native features powering Rumor's event‑hosting platform, improving mobile UX for 50k+ users."

**After**:
- "Built and shipped core React Native features (guest lists, RSVPs, creator discovery) used by 50k+ users, improving mobile performance and navigation speed by 30%."
- "Developed scalable backend APIs for high‑volume event workflows, reducing user drop‑off during event flow by 25%."

**Impact**: Added specific features, quantified performance improvement, added drop-off metric

---

### Curator.to (formerly Siramai) - MAJOR UPDATE
**Company Name**: Changed from "Siramai" to "Curator.to (formerly Siramai)"
**Badges**: Added "Intel-backed", "$1M raised"

**Before**:
- Generic "launched agentic e-commerce OS" description

**After**:
- **Description**: "First founding engineer; built agentic e‑commerce OS and no‑code framework used by 4+ enterprise clients."
- **Bullet 1**: "Designed agent workflows atop ContextOS processing 2k+ daily queries with vector search and adaptive ranking; helped raise $1.0M."
- **Bullet 2**: "Optimized Postgres + Redis ingestion + analytics stack, increasing throughput 4× and cutting p95 latency by 30%."
- **Bullet 3**: "Shipped Gemini multimodal search enabling conversational and visual product discovery for enterprise clients."

**Impact**: Emphasized founding engineer role, fundraising contribution, enterprise client count, specific tech stacks

---

### UCSD Health
**Before**: Generic "designed and deployed clinical-grade AI dietician"

**After**:
- **Description**: "Led DevOps + ML workflows for clinical‑grade AI dietician platform serving 200+ patients."
- **Bullet 1**: "Built subgraph DAG + RAG pipeline (LangChain, QDrant vector DB) for dietary recommendations, improving accuracy by 22%."
- **Bullet 2**: "Deployed production Next.js platform with GPT‑4o integration, handling clinical compliance and HIPAA requirements."

**Impact**: Added patient count, 22% accuracy improvement metric, emphasized compliance

---

### AbbVie
**Before**: Somewhat technical but unclear impact

**After**:
- **Description**: "Built ETL insights dashboard for oncology research teams, reducing document processing time 80% across 120k+ reports."
- **Bullet 1**: Emphasized oncology research context
- **Bullet 2**: "Upgraded ingestion + analytics stack (FastAPI + Postgres + S3), increasing throughput 4× for R&D pipeline."

**Impact**: Led with 80% time reduction, clarified tech stack (FastAPI vs generic ETL)

---

## 4. Research Experience Updates

### Coordinated Science Laboratory
**After**: Consolidated with UCSD Health description to avoid redundancy
- Emphasized collaboration with Food Network Chef James Briscione & White House Fellow Lav Varshney
- 22% accuracy improvement metric

---

### Beckman Institute
**Before**: Generic "built real-time platform"

**After**:
- **Description**: "Built real‑time React + Flask platform for multi‑user LLM interaction research (40+ study subjects)."
- **Bullet**: "Ensured zero‑loss message reliability via WebSockets + analytics logging for human–AI interaction experiments."

**Impact**: Emphasized LLM research context, zero-loss reliability, WebSockets technical detail

---

### Illinois AI Group (formerly ECE Department)
**Before**: "Developed MPC+RL pipeline"

**After**:
- **Title**: Changed from "ECE Department, UIUC" to "Illinois AI Group (ECE Department)"
- **Description**: "Integrated RL agent into MPC framework for autonomous EV routing — 18% lower traffic delay in open‑world simulations."
- **Bullet 1**: "Integrated RL agent into MPC framework for autonomous EV routing in SUMO → improved control accuracy 25%."
- **Bullet 2**: "Achieved 18% lower traffic delay in open‑world simulations using ROS, C++, Python."

**Impact**: Better branding, separated two metrics (25% control accuracy + 18% traffic delay), emphasized open-world

---

### Civil & Environmental Eng.
**Before**: "UofI Civil Department"

**After**:
- **Title**: "Civil & Environmental Eng., UIUC"
- Streamlined description to emphasize ML for sustainability

---

## 5. Key Metrics & Numbers Added

| Metric | Where Used | Impact |
|--------|-----------|--------|
| 50k+ users | Rumor | Scale of impact |
| 30% performance improvement | Rumor | Mobile optimization |
| 25% drop-off reduction | Rumor | User experience |
| $1.0M raised | Curator.to | Fundraising contribution |
| 4+ enterprise clients | Curator.to | B2B traction |
| 30% latency reduction | Curator.to | System performance |
| 4× throughput increase | Curator.to, AbbVie | Scalability |
| 22% accuracy improvement | UCSD Health | ML model quality |
| 200+ patients served | UCSD Health | Clinical impact |
| 80% time reduction | AbbVie | Efficiency gain |
| 40+ study subjects | Beckman | Research scale |
| 25% control accuracy | Illinois AI Group | RL performance |
| 18% traffic delay reduction | Illinois AI Group | Autonomous systems |

---

## 6. Brand Positioning Changes

### Before
Multiple unfocused narratives:
- Product engineer
- ML researcher  
- DevOps/data pipelines engineer
- Web/mobile engineer
- Materials science researcher

### After
Single cohesive narrative:
**"AI + full-stack engineer building real-time, user-facing intelligence systems"**

This positioning:
✅ Matches current job market (2025-2026)
✅ Connects all experiences: Rumor, Curator, UCSD, Handshake, Beckman, IAI
✅ Shows depth in AI infrastructure + systems + product
✅ Differentiates from pure SWE or pure ML roles

---

## 7. Technical Stack Clarification

### Emphasized Technologies
- **AI/ML**: LangChain, RAG, Vector Search, LLM Ops, RL
- **Real-time Systems**: WebSockets, Flask, React
- **Infrastructure**: Redis, Postgres, FastAPI, AWS
- **Mobile**: React Native
- **Frameworks**: Next.js, Node.js, Express

### De-emphasized
- Removed scattered references to generic "MongoDB", "Bootstrap", "Spring Boot"
- Consolidated similar skills (e.g., merged various LLM references)

---

## 8. What to Do Next (Recommendations)

### Immediate Actions
1. ✅ **LinkedIn About Section**: Copy the new "About" content from homepage
2. ✅ **LinkedIn Headline**: Update to "AI + full-stack engineer building real-time, user-facing intelligence systems"
3. ✅ **LinkedIn Experience**: Copy improved bullets for Rumor, Curator, UCSD, AbbVie
4. ⚠️ **Add Screenshots**: Portfolio needs visual proof
   - Rumor mobile features
   - Curator workflow diagrams
   - UCSD platform interface
   - RL traffic simulation visualizations

### Portfolio Enhancements Needed
1. **Project Screenshots**: Current portfolio is text-heavy
2. **Demo GIFs/Videos**: Show real applications in action
3. **Case Studies**: Deep-dive on Curator, Rumor, UCSD projects
4. **Featured Section**: Add resume PDF, app links, press mentions

---

## 9. Files Modified

1. `/src/app/page.tsx` - Homepage hero, about, new sections
2. `/src/data/resume.tsx` - All work experience, skills, summary, description

---

## 10. Git Status

```bash
modified:   src/app/page.tsx
modified:   src/data/resume.tsx
```

Ready to commit with message:
```
feat: comprehensive brand positioning & content improvements

- Update positioning to "AI + full-stack engineer building real-time intelligence systems"
- Add "What I'm Building Now" and "Why I Build" sections to homepage
- Rewrite all work experience with quantified metrics and impact
- Reorganize skills section for clarity (Languages, Frameworks, AI/ML, Cloud/DevOps)
- Add fundraising, user scale, and performance metrics across experiences
- Emphasize founding engineer role at Curator.to (Intel-backed, $1M raised)
- Update Rumor bullets with 30% performance improvement and 25% drop-off reduction
- Add 22% accuracy improvement for UCSD Health AI platform
- Consolidate research narrative around AI + systems + multi-agent work
```

---

## Summary

These changes position you as a **top 1% AI + full-stack engineer** with:
- ✅ Clear, cohesive narrative
- ✅ Quantified impact metrics throughout
- ✅ Founding engineer experience with fundraising
- ✅ Production AI systems serving real users
- ✅ Research depth (materials + AI + autonomous systems)
- ✅ Strong for 2025-2026 AI engineering roles

**Next step**: Push changes, update LinkedIn to match, add visual proof (screenshots) to portfolio.

