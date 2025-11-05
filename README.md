# York Sports Analytics Club Website

Modern Next.js website for the York Sports Analytics Club (YSAC) - a student organization dedicated to exploring the intersection of sports and data analytics.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + shadcn/ui
- **Deployment:** Vercel (via GitHub Actions)

## Features

- 🎨 Modern, responsive design with dark mode support
- 📊 Customizable content via centralized data configuration
- 🎯 Event listings with modal details
- 📁 Project showcase
- 📱 Mobile-friendly navigation
- 🔗 Social media integration

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All site content is managed in **`src/lib/data.ts`**:

- **Club Info:** Name, tagline, description, logo
- **Events:** Upcoming workshops, panels, conferences
- **Projects:** Active club projects
- **Team:** Member profiles with roles and social links
- **Social Links:** Discord, LinkedIn, Instagram, Linktree

## Available Scripts

```bash
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm start       # Start production server
pnpm lint        # Run ESLint
pnpm lint --fix  # Fix linting issues
pnpm format      # Format code with Prettier
```

## Deployment

Automatically deploys to Vercel on push to `main` branch via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

## Contact

- **Email:** yorkusac@gmail.com
- **Discord:** [Join us](https://discord.gg/JnnmcpB3Ua)
- **LinkedIn:** [York Sports Analytics Club](https://www.linkedin.com/company/sports-analytics-club-at-yorku)
- **Instagram:** [@yorkusac](https://instagram.com/yorkusac)

## License

Private project for York Sports Analytics Club.
