# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the Docusaurus site
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve globally to serve static files
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/build ./build

# Expose port 5000
EXPOSE 5000

# Serve the built site on port 5000
CMD ["serve", "-s", "build", "-l", "5000"]

