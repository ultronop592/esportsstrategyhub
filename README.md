# Esports Strategy Hub Frontend

A modern web application built with Vite, React, and TypeScript for sharing esports strategies and tutorials.

## Features

- Modern and responsive UI with Chakra UI
- Client-side routing with React Router
- Placeholder sections for YouTube video integration
- Sections for Maps, Weapons, Throwables, and Sensitivity guides

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Development

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── App.tsx        # Main application component
  ├── main.tsx       # Application entry point
  └── theme.ts       # Chakra UI theme customization
```

## Future Integrations

- YouTube video integration for each section
- Backend API integration
- User authentication
- Interactive tutorials
- Community features
