# Website Management Concepts

A Next.js application showcasing website management concepts with a clean interface featuring a header and side navigation.

## Features

- Header displaying "Website Management Concepts" at the top
- Side navigation with concept links
- "Websites" concept page with routing
- Responsive and clean design
- Built with Next.js 16 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with header and navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── websites/
│       └── page.tsx        # Websites concept page
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Technology Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **React**: 19.2.4
- **Styling**: CSS

## License

ISC