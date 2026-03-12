# Portfolio Launch Pad

A window-style portfolio UI that acts as a discovery and routing layer. All projects link out to Figma presentations.

## Architecture

### Single Source of Truth

All project data lives in `/src/content/projects/`:

- `schema.ts` - TypeScript type definitions
- `projects.ts` - Project data (4 featured projects)
- `prototypeConfig.ts` - Prototype tab configuration
- `helpers.ts` - Shared utilities and filters

### Components

- `PortfolioWindow` - Main container with tab navigation
- `ProjectGrid` - Work tab (2×2 grid of featured projects)
- `ChatPanel` - Deterministic conversational UI
- `PrototypePanel` - Embed, patch image, and carousel
- `AboutPanel` - Personal info + interactive widgets (Magic 8 Ball, Wordle)
- `ProjectCard` - Shared card component (used across Work, Prototype tabs)

### Tab Structure

1. **Work** - 2×2 grid of featured projects
2. **Chat** - Suggested prompts with predefined responses
3. **Prototype** - Iframe embed + patch area + project carousel
4. **About** - Bio + games (isolated from project data)

### Key Features

- All project cards open Figma presentations in new tabs
- Keyboard accessible (tab navigation, focus states)
- Responsive (desktop → mobile)
- No backend required
- Ready to swap Chat panel with [portfolio-navigator](https://github.com/bethanyrobertson/portfolio-navigator) approach

## Setup

```bash
npm install
npm run dev
```

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS
- Vite (recommended)

## File Structure

```
src/
├── content/
│   └── projects/
│       ├── schema.ts           # Type definitions
│       ├── projects.ts         # Project data
│       ├── prototypeConfig.ts  # Prototype config
│       └── helpers.ts          # Shared utilities
├── components/
│   └── portfolio/
│       ├── PortfolioWindow.tsx
│       ├── ProjectCard.tsx
│       ├── ProjectGrid.tsx
│       ├── ChatPanel.tsx
│       ├── PrototypePanel.tsx
│       ├── AboutPanel.tsx
│       └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Adding Projects

Edit `/src/content/projects/projects.ts` and add new project objects following the `Project` schema.

### Modifying Prototype Tab

Edit `/src/content/projects/prototypeConfig.ts` to change the embed, patch image, or carousel order.

### Chat Responses

Update the `getResponseForPrompt` function in `ChatPanel.tsx` to customize conversation logic.

### Widgets

Swap or add new widgets in `AboutPanel.tsx`. Current widgets are fully isolated from project data.

## Notes

- All images referenced are placeholder paths
- All Figma URLs are fake examples
- Replace with your actual assets and links
- The About tab is intentionally isolated from project data
