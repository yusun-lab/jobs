# Jobs

A minimal Vue 3 + TypeScript app scaffolded with Vue CLI, showcasing Vue Router 4 features such as named routes, dynamic route params, redirects, and a 404 catch‑all. The app includes simple navigation and examples of programmatic routing (go back/forward, redirect) from `App.vue`.

## Live Demo

- https://jobs-theta-eight.vercel.app/

## Tech Stack

- **Vue 3** (Composition API, Single File Components)
- **Vue Router 4** (history mode, named routes, dynamic params)
- **TypeScript**
- **Vue CLI 5**

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run serve
```

This starts a local dev server with hot-reload.

### Type check (no emit)

```bash
npm run type-check
```

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
  App.vue            # Top-level layout with nav and programmatic navigation buttons
  main.ts            # App bootstrap; installs router
  router/
    index.ts         # Routes: home, about, jobs, job details, redirect, 404
  views/
    HomeView.vue
    AboutView.vue
    NotFound.vue
    jobs/
      JobsView.vue
      JobDetailsView.vue
```

## Routing Overview

- `/` → `HomeView`
- `/about` → `AboutView`
- `/jobs` → `JobsView`
- `/jobs/:id` → `JobDetailsView` with `props: true` to receive `id`
- `/all-jobs` → redirects to `/jobs`
- `/:catchAll(.*)` → `NotFound` (404)

Programmatic navigation examples are implemented in `App.vue` using `useRouter()`:

- **Redirect to home** via named route `home`
- **Go back** using `router.go(-1)`
- **Go forward** using `router.go(1)`

## Configuration

- Vue CLI configuration: see `vue.config.js` and the Vue CLI docs.
- Browser support: see `.browserslistrc`.

## Deployment (Vercel)

This project is deployed on Vercel. Typical settings for Vue CLI builds:

- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install` (or default)

If you use the Vercel CLI:

```bash
npm i -g vercel
vercel                       # first-time setup (select project, link repo)
vercel --prod                # deploy production
```

Note: Vue Router is configured with HTML5 history. Vercel automatically serves `index.html` for 404s; if you customize rewrites, ensure unknown routes fall back to `/index.html`.
