import { NextResponse } from 'next/server'

/**
 * Fetch projects from Vercel API
 * Requires VERCEL_API_TOKEN environment variable
 * 
 * Usage: GET /api/projects
 * Returns: Array of projects from Vercel account
 */
export async function GET() {
  const vercelToken = process.env.VERCEL_API_TOKEN
  
  if (!vercelToken) {
    // Return local projects if no token is set
    return NextResponse.json({
      source: 'local',
      message: 'Using local projects. Set VERCEL_API_TOKEN to fetch live data.',
    })
  }

  try {
    // Fetch projects from Vercel API
    const response = await fetch('https://api.vercel.com/v9/projects', {
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Vercel API error: ${response.status}`)
    }

    const data = await response.json()

    // Transform Vercel projects to match our project structure
    const projects = (data.projects || []).map((project: any) => ({
      id: project.id,
      title: project.name,
      description: project.description || 'A Vercel project',
      tech: extractTechFromProject(project),
      liveUrl: getProjectUrl(project),
      githubUrl: project.link?.github ? `https://github.com/${extractGithubRepo(project.link.github)}` : '',
      image: 'vercel-project',
      vercelUrl: `https://vercel.com/dashboard/paul6244/${project.name}`,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    }))

    return NextResponse.json({
      source: 'vercel',
      projects,
      total: projects.length,
    })
  } catch (error) {
    console.error('Error fetching Vercel projects:', error)
    return NextResponse.json(
      {
        source: 'error',
        message: 'Failed to fetch projects from Vercel',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

/**
 * Extract technology stack from Vercel project metadata
 */
function extractTechFromProject(project: any): string[] {
  const tech: Set<string> = new Set()
  
  // Check build settings for framework info
  if (project.framework) {
    tech.add(project.framework)
  }
  
  // Add common tech based on naming patterns
  const name = project.name.toLowerCase()
  if (name.includes('next')) tech.add('Next.js')
  if (name.includes('react')) tech.add('React')
  if (name.includes('vue')) tech.add('Vue')
  if (name.includes('svelte')) tech.add('Svelte')
  if (name.includes('dashboard')) tech.add('Chart.js')
  if (name.includes('ecommerce') || name.includes('store')) tech.add('Stripe')
  
  return Array.from(tech)
}

/**
 * Get the live project URL
 */
function getProjectUrl(project: any): string {
  if (project.alias && project.alias.length > 0) {
    return `https://${project.alias[0]}`
  }
  return `https://${project.name}.vercel.app`
}

/**
 * Extract GitHub repository from GitHub URL
 */
function extractGithubRepo(githubUrl: string): string {
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/)
  return match ? match[1] : ''
}
