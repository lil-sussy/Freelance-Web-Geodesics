FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl git && \
    curl -sSL https://nixpacks.com/install.sh | bash

# Set working directory
WORKDIR /app

# Copy Nixpacks configuration
COPY nixpacks.toml /app/nixpacks.toml

# Install Nix and Nixpacks
RUN nix-env -iA nixpkgs.nix && \
    nix-env -iA nixpkgs.nixpacks

# Install Node.js, npm and other dependencies using Nix
COPY .nixpacks/nixpkgs-*.nix .nixpacks/
RUN nix-env -if .nixpacks/nixpkgs-*.nix && nix-collect-garbage -d

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm install && npm run build

# Start the application
CMD ["npm", "start"]
