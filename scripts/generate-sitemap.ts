/**
 * Dynamic Sitemap Generator
 * 
 * Generates sitemap.xml from:
 * - Static routes (from route configuration)
 * - Blog posts (from blogPosts.ts)
 * - Guide pages (from pillars)
 * - Author pages
 * 
 * Run: npx tsx scripts/generate-sitemap.ts
 * Or as part of build: npm run generate-sitemap && vite build
 */

import * as fs from 'fs';
import * as path from 'path';

// Since this runs at build time, we need to read the data files
// and extract the necessary information

const SITE_URL = 'https://invoicemonk.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages with their priorities
const staticPages: SitemapEntry[] = [
  // Main pages - highest priority
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/invoicing', priority: 0.9, changefreq: 'weekly' },
  { loc: '/expenses', priority: 0.9, changefreq: 'weekly' },
  { loc: '/payments', priority: 0.9, changefreq: 'weekly' },
  { loc: '/accounting', priority: 0.9, changefreq: 'weekly' },
  { loc: '/estimates', priority: 0.9, changefreq: 'weekly' },
  { loc: '/receipts', priority: 0.9, changefreq: 'weekly' },
  
  // Product & company pages
  { loc: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { loc: '/why-invoicemonk', priority: 0.8, changefreq: 'monthly' },
  { loc: '/compliance', priority: 0.8, changefreq: 'monthly' },
  { loc: '/about', priority: 0.7, changefreq: 'monthly' },
  { loc: '/contact', priority: 0.6, changefreq: 'monthly' },
  
  // Audience pages
  { loc: '/freelancers', priority: 0.8, changefreq: 'monthly' },
  { loc: '/consultants', priority: 0.8, changefreq: 'monthly' },
  { loc: '/contractors', priority: 0.8, changefreq: 'monthly' },
  { loc: '/small-businesses', priority: 0.8, changefreq: 'monthly' },
  
  // Feature pages
  { loc: '/features/client-management', priority: 0.7, changefreq: 'monthly' },
  { loc: '/free-invoice-generator', priority: 0.8, changefreq: 'monthly' },
  
  // Blog hub
  { loc: '/blog', priority: 0.8, changefreq: 'daily' },
  
  // Guide index
  { loc: '/guides', priority: 0.8, changefreq: 'weekly' },
  
  // Legal pages - lower priority
  { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { loc: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { loc: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
];

// Guide pages (pillars)
const guideSlugs = [
  'invoicing',
  'getting-paid',
  'business-finances',
  'tax-compliance',
  'freelancing',
  'estimates',
];

// Read blog posts from the data file
function getBlogPosts(): string[] {
  try {
    const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.ts');
    const content = fs.readFileSync(blogPostsPath, 'utf-8');
    
    // Extract slugs using regex
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (!slugMatches) return [];
    
    return slugMatches.map(match => {
      const slug = match.match(/['"]([^'"]+)['"]/);
      return slug ? slug[1] : '';
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Read authors from the data file
function getAuthors(): string[] {
  try {
    const authorsPath = path.join(__dirname, '../src/data/authors.ts');
    const content = fs.readFileSync(authorsPath, 'utf-8');
    
    // Extract slugs using regex
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (!slugMatches) return [];
    
    return slugMatches.map(match => {
      const slug = match.match(/['"]([^'"]+)['"]/);
      return slug ? slug[1] : '';
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading authors:', error);
    return [];
  }
}

function generateXML(entries: SitemapEntry[]): string {
  const urlEntries = entries.map(entry => {
    const lastmod = entry.lastmod || CURRENT_DATE;
    const changefreq = entry.changefreq || 'monthly';
    const priority = entry.priority !== undefined ? entry.priority : 0.5;
    
    return `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function main() {
  console.log('🗺️  Generating sitemap...');
  
  const allEntries: SitemapEntry[] = [...staticPages];
  
  // Add guide pages
  guideSlugs.forEach(slug => {
    allEntries.push({
      loc: `/guides/${slug}`,
      priority: 0.8,
      changefreq: 'weekly'
    });
  });
  
  // Add blog posts
  const blogSlugs = getBlogPosts();
  console.log(`📝 Found ${blogSlugs.length} blog posts`);
  
  blogSlugs.forEach(slug => {
    allEntries.push({
      loc: `/blog/${slug}`,
      priority: 0.7,
      changefreq: 'monthly'
    });
  });
  
  // Add author pages
  const authorSlugs = getAuthors();
  console.log(`👤 Found ${authorSlugs.length} authors`);
  
  authorSlugs.forEach(slug => {
    allEntries.push({
      loc: `/blog/author/${slug}`,
      priority: 0.5,
      changefreq: 'monthly'
    });
  });
  
  // Generate XML
  const xml = generateXML(allEntries);
  
  // Write to public folder
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  
  console.log(`✅ Sitemap generated with ${allEntries.length} URLs`);
  console.log(`📄 Output: ${outputPath}`);
}

main();
