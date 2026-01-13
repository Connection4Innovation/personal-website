# Cloudflare Deployment Setup

This repository is configured to automatically deploy to Cloudflare Pages (which uses Cloudflare Workers infrastructure) when changes are pushed to the `main` branch.

## Prerequisites

1. A Cloudflare account
2. Cloudflare API Token with appropriate permissions

## Setup Instructions

### 1. Get Your Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use the "Edit Cloudflare Workers" template or create a custom token with:
   - **Account** - `Cloudflare Pages:Edit` permission
   - **Zone** - `Zone:Read` permission (if using custom domain)
4. Copy the generated token

### 2. Get Your Account ID

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account
3. Copy the Account ID from the right sidebar

### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## How It Works

1. When you push to the `main` branch, the GitHub Action automatically:
   - Installs dependencies
   - Builds the Next.js application
   - Deploys to Cloudflare Pages

2. Cloudflare Pages with Next.js runtime supports:
   - Static page generation
   - Server-side rendering (SSR)
   - API routes
   - All Next.js features

3. The application is served using Cloudflare's edge network (Workers infrastructure) with automatic edge caching and optimization.

## Manual Deployment

You can also trigger the deployment manually:
1. Go to **Actions** tab in your GitHub repository
2. Select "Deploy to Cloudflare Pages" workflow
3. Click "Run workflow"

## Custom Domain

To add a custom domain:
1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Custom domains**
3. Add your domain and follow the DNS configuration instructions

## Notes

- The deployment uses Cloudflare Pages with Next.js runtime support
- Server-side rendered pages (like `/chi-siamo`) will work correctly
- The build output is in the `.next/` directory (gitignored)
- Images are configured with `unoptimized: true` for compatibility
