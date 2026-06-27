import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alignedwest.com';

  // 1. Get all MDX blog post slugs
  const contentDirectory = path.join(process.cwd(), 'src/content');
  const files = fs.readdirSync(contentDirectory);
  
  const blogPosts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      url: `${baseUrl}/blog/${file.replace('.mdx', '')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // 2. Define your static pages
  const staticPages = [
    '',
    '/about',
    '/services/chiropractic',
    '/services/naet',
    '/services/soul-alignment',
    '/apprenticeship',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/accessibility',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8, // Home page gets highest priority
  }));

  return [...staticPages, ...blogPosts];
}