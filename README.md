# Princefarming — Decoupled Astro + Decap CMS Platform

A modern, high-performance static website and headless content management setup built for **princefarming**. The platform uses **Astro** for zero-JavaScript static site rendering and **Decap CMS** as a Git-based headless content manager.

---

## 🏗️ Architecture Overview

The site uses a decoupled, Git-based headless CMS architecture:

* **Frontend Framework:** [Astro](https://astro.build/) — Pre-renders content into ultra-fast, zero-JS static HTML/CSS.
* **Content Management:** [Decap CMS](https://decapcms.org/) — Single Page React Application hosted under `/public/admin/`.
* **Content Store & Single Source of Truth:** Markdown/MDX files stored directly inside `src/content/` within the Git repository.
* **Schema Validation:** Astro Content Collections powered by TypeScript and `zod` schema definitions (`src/content/config.ts`).
* **Deployment & Hosting:** Automated CI/CD pipelines deploying static assets globally to edge CDNs.

### How It Works
1. Content editors log into `/admin/` via Decap CMS.
2. Publishing an entry creates a Git commit directly in the GitHub repository.
3. The commit triggers the automated CI/CD build hook.
4. Astro validates frontmatter against TypeScript schemas and generates pre-rendered static pages.

---

## 🚀 Local Development Setup

To edit content locally without requiring live OAuth/GitHub production logins, run the Decap local proxy server alongside Astro.

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

### 2. Configuration Check
Ensure `public/admin/config.yml` contains local backend support:

```yaml
backend:
  name: git-gateway
  branch: main

# Enables local file system editing #
local_backend: true
```

### 3. Running the Project
Open two terminal windows:

Terminal 1: Decap Local Proxy Server
Runs the proxy server that syncs Decap CMS edits directly with your local Git repository:

```
Bash
npx decap-server
```
(If prompted to install decap-server, press y and Enter).

### 4. Start Astro Dev Server (Terminal 2): 
Open a second terminal window in the same project root and launch Astro:
```
Bash
npm run dev
```

### 5. Accessing the Local Admin
Open your browser to http://localhost:4321/admin/ (or your active local dev port).

Click "Log in with Local Backend".

You can now create, edit, and save content directly to your local codebase.

## 🛠️ Project Structure
Plaintext
├── public/
│   └── admin/
│       ├── index.html        # Decap CMS Single Page Application
│       └── config.yml        # Decap CMS collection & field configurations
├── src/
│   ├── content/              # Markdown/MDX content files
│   │   └── config.ts         # Astro Zod schema validations
│   ├── components/           # Reusable Astro components
│   └── pages/                # Astro routing & page templates
└── package.json

## 📄 License
All content and code rights reserved.