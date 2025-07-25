# School Management System

## Overview

This is a full-stack web application built as a School Management System with Progressive Web App (PWA) capabilities. The system provides a comprehensive administrative interface for managing students, teachers, events, and notifications in an educational environment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth UI transitions
- **PWA Features**: Service worker registration, offline caching, push notifications

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Storage**: PostgreSQL-based session store with connect-pg-simple
- **Development**: Hot module replacement with Vite middleware integration

### Project Structure
- **Monorepo Layout**: Shared code between client and server
- **client/**: React frontend application
- **server/**: Express.js backend API
- **shared/**: Common TypeScript types and database schemas
- **migrations/**: Database migration files

## Key Components

### Frontend Components
1. **Dashboard**: Main administrative overview with statistics cards, quick actions, and recent activities
2. **Sidebar Navigation**: Collapsible sidebar with responsive design for mobile/desktop
3. **Theme System**: Light/dark mode toggle with persistent preferences
4. **PWA Features**: Installable app with offline capabilities and push notifications
5. **UI Components**: Complete set of reusable components from shadcn/ui

### Backend Components
1. **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database migration)
2. **Route Handler**: Centralized route registration system
3. **Development Server**: Integrated Vite development server with HMR
4. **Error Handling**: Centralized error handling middleware
5. **Request Logging**: Detailed API request/response logging

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Extensible Design**: Schema structure ready for additional entities (students, teachers, events)

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Abstraction**: IStorage interface allows switching between in-memory and database storage
4. **Database Operations**: Drizzle ORM provides type-safe database interactions
5. **Response Handling**: Standardized JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **express**: Web application framework
- **react**: Frontend UI library
- **vite**: Build tool and development server

### UI Dependencies
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Development Dependencies
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR and middleware integration
- **Database**: Environment variable-based PostgreSQL connection
- **Hot Reloading**: Full-stack hot reloading with Vite and tsx

### Production Build
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets in production
4. **Database Migrations**: Drizzle handles schema migrations with `db:push`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Port**: Configurable server port (default: 3000)

### PWA Deployment
- **Service Worker**: Caches static assets for offline functionality
- **Manifest**: Configures app installation and appearance
- **Push Notifications**: Browser-based notification system for real-time updates

## Key Architectural Decisions

### Storage Abstraction
**Problem**: Need flexibility to switch between development and production storage solutions
**Solution**: IStorage interface with in-memory implementation, easily replaceable with database implementation
**Rationale**: Allows rapid development while maintaining production readiness

### Monorepo Structure
**Problem**: Code sharing between frontend and backend while maintaining separation
**Solution**: Shared directory for common types and schemas, separate client/server directories
**Rationale**: Enables type safety across the full stack while keeping concerns separated

### PWA Implementation
**Problem**: Need offline functionality and native app-like experience
**Solution**: Service worker registration, manifest configuration, and push notification APIs
**Rationale**: Provides modern web app capabilities expected by users

### Component Architecture
**Problem**: Need consistent, accessible UI components
**Solution**: shadcn/ui built on Radix UI primitives with Tailwind styling
**Rationale**: Provides high-quality, accessible components with full customization control