# Overview

This is a minimal JavaScript web scraper project that runs in the browser. The application uses Axios for making HTTP requests and is served via http-server. The project is in its early stages with a basic HTML page that loads a JavaScript module demonstrating Axios functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Browser-based JavaScript Application**
- Pure client-side execution using ES6 modules
- No build process or bundling - direct import of Axios from node_modules
- Single HTML entry point (index.html) loading main.js as a module

**Rationale**: This approach provides the simplest setup for testing and prototyping scraping logic directly in the browser without requiring a build pipeline. However, this limits the application to browser-compatible APIs and CORS-compliant requests.

**Pros**:
- Immediate feedback during development
- No compilation step needed
- Easy to debug in browser DevTools

**Cons**:
- CORS restrictions will limit scraping capabilities
- Cannot use Node.js-specific features
- Direct node_modules imports are not production-ready

## HTTP Client

**Axios for HTTP Requests**
- Using Axios v1.12.2 for making HTTP requests
- Imported as ES module from node_modules

**Rationale**: Axios provides a robust, promise-based HTTP client that works in both browser and Node.js environments, with features like automatic JSON transformation and request/response interceptors.

## Development Server

**http-server for Local Development**
- http-server v14.1.1 configured for serving static files
- VS Code launch configuration for Chrome debugging on localhost:8080

**Rationale**: http-server provides a zero-configuration static file server, allowing the application to be tested locally with proper HTTP protocol (avoiding file:// protocol limitations).

# External Dependencies

## NPM Packages

**axios (v1.12.2)**
- HTTP client for making requests
- Supports both browser and Node.js environments
- Provides features like request/response transformation, interceptors, and automatic JSON handling

**http-server (v14.1.1)**
- Static file server for local development
- Enables proper HTTP protocol testing and debugging
- Configured to run on localhost:8080 (based on VS Code launch config)

## Development Tools

**VS Code Chrome Debugger**
- Configured to launch Chrome against localhost:8080
- Enables step-through debugging of browser JavaScript
- webRoot set to workspace folder for source mapping