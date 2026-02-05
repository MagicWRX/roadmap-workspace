<!-- START GLOBAL CONTEXT -->
# AMAZING BUSINESS - Copilot Universal Profile

> **Usage:** This content should be included or referenced in the `.github/copilot-instructions.md` of every child workspace (`MagicWRX`, `mxn-chat`, `ADMIN`, etc.).

## 🌐 The "Amazing Business" Ecosystem Context

You are working within the **Amazing Business Ecosystem**, a family of interconnected projects. While you are currently focused on a specific workspace, you must respect the global architecture.

### 🧠 Single Source of Truth (SSOT)
- **The Brain:** `DOCs/BUSINESS/BUSINESS_WORKSPACES.md` is the master registry and architectural guide.
- **The Control Plane:** `ADMIN` workspace manages all tenants.
- **The Foundation:** `SHARED` workspace contains reusable tools (`auth-tool`, `blog-engine`, etc.).

### 🤝 Shared Code Protocol
- **Don't Duplicate:** Before building a generic tool (Auth, Blog, Media), check `SHARED/`.
- **Surface Improvements:** If you improve a tool in a child workspace, suggest moving it to `SHARED` so other projects benefit.
- **Monetization:** Tools built here often become products for `MagicWRX` customers.
- **Registry:** Use `@magicwrx/*` packages from GitHub Packages. Do NOT use `file:` paths in production.
- **Monorepo:** `SHARED` is a monorepo. When working there, respect the workspace structure and build orchestration.

### 🛠️ Development Standards
- **Git Branching:** Target `main` (or `master` if legacy). Use short-lived feature branches.
- **Secrets:** NEVER commit `.env` files.
- **Unity:** Ensure naming conventions (camelCase for JS/TS, snake_case for DB) align with the broader family standards defined in `DOCs`.

### Roadmap & Strategy Alignment
**You are the Guardian of the Roadmap.**
- **Check Local:** Before starting work, read the local `*_ROADMAP.md` (e.g., `MXN_ROADMAP.md`).
- **Check Global:** Ensure alignment with `DOCs/BUSINESS/BUSINESS_ROADMAP.md`.
- **Current Focus:**
    1.  **MVP Polish:** Polish SHARED tools to production readiness.
    2.  **Variant System:** Implement `variantX` routing for stable tool sets.
    3.  **House Cleaning:** Maintain strict separation between Localhost Business and Customer Admin (see `DOCs/BUSINESS/BUSINESS_WORKSPACES.md` for canonical ports).
- **Update:** If you complete a task, mark it as `[x]` in the roadmap.
- **Drift Check:** If a user asks for a feature NOT on the roadmap, warn them: *"This is not on the current roadmap. Should we add it or is this an exploration?"*

### The Ironclad Workflow (Mandatory)
Every task must follow this cycle to prevent drift and ensure quality:

1.  **Discovery (Read First):**
    - Check `DOCs/` for existing standards or similar features.
    - Check `SHARED/` for reusable code.
    - **Goal:** Do not reinvent the wheel.

2.  **Development (Test First):**
    - Write code -> **Run Local Tests** -> Verify.
    - **Never** push broken code to `main`.
    - Use `npm run dev` or `npm test` to validate changes locally.

3.  **Documentation (Consolidate & Prune):**
    - **Update:** If you change code, update the relevant SSOT in `DOCs/`.
    - **Prune:** If a doc is obsolete, mark it `status: deprecated` or merge it into a parent doc.
    - **Create:** Only create a new doc if no existing home exists. Use `DOCS_TEMPLATE.md`.
    - **Link:** Every new doc must link back to its Parent SSOT (e.g., `BUSINESS_WORKSPACES.md`).

4.  **Source Control (Clean Git):**
    - `git checkout -b feat/my-feature`
    - Commit often with clear messages.
    - `git push` -> Open PR -> Squash & Merge.
    - Delete branch after merge.

---
<!-- END GLOBAL CONTEXT -->

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# 🌐 AMAZING BUSINESS ECOSYSTEM CONTEXT
> **Parent SSOT:** `DOCs/BUSINESS/BUSINESS_WORKSPACES.md`
> **Role:** You are a developer in the Amazing Business family.
> **Shared Code:** Check `SHARED/` before building generic tools. Surface improvements to `SHARED`.
> **Unity:** Respect the global architecture defined in the Parent SSOT.

# ROADMAP Project Instructions

This is a Next.js application for managing and executing modular scripts from the Amazing Business ecosystem. It provides a web interface for running, monitoring, and chaining scripts in a stacked/pipeline fashion.

## Project Architecture

**Frontend**: Next.js App Router with TypeScript, Tailwind CSS
**Backend**: Node.js API routes for script execution
**Script System**: Modular script registry with metadata (inputs, outputs, dependencies)
**State Management**: React Context for script pipelines and execution state

## Core Features

- **Script Registry**: Centralized catalog of all ecosystem scripts with metadata
- **Pipeline Builder**: Visual interface for chaining scripts into workflows
- **Execution Engine**: Safe script execution with logging and error handling
- **Dashboard**: Real-time monitoring of script runs and pipeline status
- **Script Marketplace**: Browse and import scripts from SHARED/

## Script Modularity System

Scripts are defined as modules with:
- **Metadata**: Name, description, category, author, version
- **Inputs**: Required parameters with types and validation
- **Outputs**: Generated artifacts or data
- **Dependencies**: Other scripts that must run first
- **Execution Context**: Environment requirements (Node.js, shell, etc.)

## Development Workflow

**Local Development**:
```bash
npm run dev          # Starts on port 3015
npm run build        # Production build
npm run script:lint  # Validate script registry
```

**Script Integration**:
- Scripts live in `src/scripts/` with metadata files
- Use `src/lib/script-runner.js` for execution
- Pipeline definitions in `src/pipelines/`

## Code Conventions

**Script Structure**:
```typescript
// script-metadata.json
{
  "name": "doc-lint",
  "category": "validation",
  "inputs": [
    { "name": "targetDir", "type": "string", "required": true }
  ],
  "outputs": ["lint-report.json"],
  "dependencies": []
}

// script.js
export async function execute(inputs) {
  // Implementation
  return { success: true, outputs: {...} };
}
```

**Pipeline Composition**:
- Scripts can be chained where output of one becomes input of next
- Conditional execution based on previous results
- Parallel execution for independent scripts

## Security & Safety

- **Sandbox Execution**: Scripts run in isolated containers
- **Permission System**: Role-based access to script execution
- **Audit Logging**: All script runs are logged with timestamps and users
- **Input Validation**: Strict validation of all script inputs

## Retirement Notice
**Firebase and Firebase Emulators have been retired.** Do not add new Firebase integrations or rely on Firebase emulators for local development. Use approved alternatives listed in the SSOT (`DOCs/BUSINESS/BUSINESS_WORKSPACES.md`) and the `SHARED/` workspace for replacement tooling. Update any workspace environment variables or docs that reference Firebase.

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# 🌐 AMAZING BUSINESS ECOSYSTEM CONTEXT
> **Parent SSOT:** `DOCs/BUSINESS/BUSINESS_WORKSPACES.md`
> **Role:** You are a developer in the Amazing Business family.
> **Shared Code:** Check `SHARED/` before building generic tools. Surface improvements to `SHARED`.
> **Unity:** Respect the global architecture defined in the Parent SSOT.

# ROADMAP Project Instructions

This is the ROADMAP workspace for managing Amazing Business roadmap tasks and AI prompt generation.

## Core Functionality
- **Modular Scripts**: `lib/parseRoadmap.js` parses BUSINESS_ROADMAP.md for pending tasks
- **AI Prompt Generation**: `lib/generatePrompt.js` formats tasks into structured prompts
- **Main Script**: `scripts/run_roadmap_business.js` orchestrates the process

## Guardrails
- **SSOT Adherence**: Always read from `DOCs/BUSINESS/BUSINESS_ROADMAP.md` - never maintain local copies
- **Modular Design**: Keep parsing and generation logic separate for reusability
- **No Direct Edits**: Do not edit BUSINESS_ROADMAP.md directly; use proper workflow
- **Stackable Scripts**: Design scripts to be composable with other ecosystem tools

## Development Workflow
- Test scripts with `node scripts/run_roadmap_business.js`
- Ensure modular functions are exported for reuse
- Update `DOCs/SCRIPTS/SCRIPTS_REGISTRY.md` when adding new scripts