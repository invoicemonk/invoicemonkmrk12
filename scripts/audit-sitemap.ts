/**
 * Sitemap Audit Script
 * 
 * Compares blog posts in blogPosts.ts against sitemap.xml
 * to find missing entries.
 * 
 * Run: npx tsx scripts/audit-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://invoicemonk.com';

// Read blog posts from the data file
function getBlogSlugs(): string[] {
  const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.ts');
  const content = fs.readFileSync(blogPostsPath, 'utf-8');
  
  const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
  if (!slugMatches) return [];
  
  return slugMatches.map(match => {
    const slug = match.match(/['"]([^'"]+)['"]/);
    return slug ? slug[1] : '';
  }).filter(Boolean);
}

// Read sitemap and extract blog URLs
function getSitemapBlogSlugs(): string[] {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  
  const locMatches = content.match(/<loc>https:\/\/invoicemonk\.com\/blog\/([^<]+)<\/loc>/g);
  if (!locMatches) return [];
  
  return locMatches.map(match => {
    const slug = match.match(/\/blog\/([^<]+)/);
    return slug ? slug[1] : '';
  }).filter(slug => slug && !slug.includes('author/'));
}

function main() {
  console.log('🔍 Auditing sitemap...\n');
  
  const blogSlugs = getBlogSlugs();
  const sitemapSlugs = getSitemapBlogSlugs();
  
  console.log(`📝 Blog posts in blogPosts.ts: ${blogSlugs.length}`);
  console.log(`🗺️  Blog URLs in sitemap.xml: ${sitemapSlugs.length}`);
  console.log('');
  
  // Find missing from sitemap
  const missingFromSitemap = blogSlugs.filter(slug => !sitemapSlugs.includes(slug));
  
  // Find in sitemap but not in blog posts (orphaned)
  const orphanedInSitemap = sitemapSlugs.filter(slug => !blogSlugs.includes(slug));
  
  if (missingFromSitemap.length > 0) {
    console.log(`❌ Missing from sitemap (${missingFromSitemap.length}):`);
    missingFromSitemap.forEach(slug => console.log(`   - /blog/${slug}`));
    console.log('');
  } else {
    console.log('✅ All blog posts are in the sitemap\n');
  }
  
  if (orphanedInSitemap.length > 0) {
    console.log(`⚠️  In sitemap but not in blogPosts.ts (${orphanedInSitemap.length}):`);
    orphanedInSitemap.forEach(slug => console.log(`   - /blog/${slug}`));
    console.log('');
  }
  
  // Summary
  console.log('📊 Summary:');
  console.log(`   Total blog posts: ${blogSlugs.length}`);
  console.log(`   In sitemap: ${sitemapSlugs.length}`);
  console.log(`   Missing: ${missingFromSitemap.length}`);
  console.log(`   Orphaned: ${orphanedInSitemap.length}`);
  
  if (missingFromSitemap.length > 0) {
    console.log('\n💡 Run "npx tsx scripts/generate-sitemap.ts" to regenerate the sitemap');
  }
}

main();
