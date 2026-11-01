import type { MetadataRoute } from "next";
import { projects, notes } from "@/data/editorial";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://atharvarathi.com", priority: 1 },
    ...projects.map((p) => ({
      url: `https://atharvarathi.com/projects/${p.slug}`,
      priority: 0.8,
    })),
    ...notes.map((n) => ({
      url: `https://atharvarathi.com/notes/${n.slug}`,
      priority: 0.6,
    })),
  ];
}
