# Vercel Projects Integration Guide

This portfolio website can automatically fetch your live projects from Vercel and display them on the portfolio.

## Setup Instructions

### 1. Generate a Vercel API Token

1. Go to [Vercel Settings → Tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Give it a name (e.g., "Portfolio API")
4. Select scope: **Full Access** or at minimum **Read** access to projects
5. Copy the generated token

### 2. Add Token to Your Environment

#### Option A: Local Development
Create a `.env.local` file in the project root:

```bash
VERCEL_API_TOKEN=your_token_here
```

#### Option B: Vercel Deployment
1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add a new variable:
   - **Name**: `VERCEL_API_TOKEN`
   - **Value**: Your token from step 1
   - **Environments**: Production, Preview, Development
4. Redeploy your site

### 3. Restart Development Server

```bash
pnpm dev
```

## How It Works

The portfolio includes an API endpoint `/api/projects` that:

1. **Fetches** your projects from Vercel API
2. **Transforms** the data to match the portfolio format
3. **Extracts** technology stack, GitHub links, and project URLs
4. **Falls back** to local hardcoded projects if token is not set

The Projects component will:
- Show a loading spinner while fetching
- Display live Vercel projects if the token is set
- Show the default portfolio projects if no token is available
- Handle errors gracefully with fallback content

## What Gets Displayed

For each project, the portfolio shows:
- **Project Name** → Used as title
- **Description** → From Vercel project settings
- **Tech Stack** → Extracted from project metadata
- **Live URL** → `https://[projectName].vercel.app` or custom domain
- **GitHub Link** → If connected to your GitHub account
- **Vercel Dashboard Link** → Direct link to manage the project

## Troubleshooting

### Projects not showing up?

1. **Check the token**: Verify the token is correctly set in environment variables
   ```bash
   # This should NOT output anything in production (for security)
   echo $VERCEL_API_TOKEN
   ```

2. **Check API response**: Visit `/api/projects` in your browser to see the raw response

3. **Check browser console**: Look for any fetch errors

4. **Verify projects exist**: Make sure you have published projects in your Vercel account

### Token errors?

- Ensure the token has at least **Read** access to projects
- The token should be for your personal account (paul6244)
- Tokens expire after 24 hours if not used - generate a new one if needed

## Security Notes

⚠️ **Never commit the token to git!**

- Always use `.env.local` for local development
- Use Vercel's environment variables for production
- Tokens are sensitive - treat them like passwords
- Consider regenerating tokens periodically

## Example API Response

When successfully configured, visiting `/api/projects` returns:

```json
{
  "source": "vercel",
  "projects": [
    {
      "id": "abc123",
      "title": "My App",
      "description": "My awesome project",
      "tech": ["Next.js", "React", "TypeScript"],
      "liveUrl": "https://my-app.vercel.app",
      "githubUrl": "https://github.com/paul6244/my-app",
      "image": "vercel-project",
      "vercelUrl": "https://vercel.com/dashboard/paul6244/my-app"
    }
  ],
  "total": 1
}
```

## Manual Project Updates

To manually update projects without Vercel integration:

Edit `/lib/constants.ts` and update the `projects` array:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    liveUrl: 'https://your-project.vercel.app',
    githubUrl: 'https://github.com/paul6244/project',
    image: 'project-image',
  },
  // ... more projects
]
```
