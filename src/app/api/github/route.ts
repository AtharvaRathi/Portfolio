import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "AtharvaRathi";
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) throw new Error("Failed to fetch GitHub data");
    
    const data = await res.json();
    
    // Fetch recent repos for more context
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`, {
      headers: { "Accept": "application/vnd.github.v3+json" },
      next: { revalidate: 3600 }
    });
    
    const repos = reposRes.ok ? await reposRes.json() : [];

    return NextResponse.json({
      followers: data.followers,
      public_repos: data.public_repos,
      html_url: data.html_url,
      repos: repos.map((r: { name: string, html_url: string, description: string, stargazers_count: number, language: string }) => ({
        name: r.name,
        url: r.html_url,
        description: r.description,
        stars: r.stargazers_count,
        language: r.language
      }))
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
