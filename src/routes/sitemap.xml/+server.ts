import { getAllPosts } from '$lib/sanity';
import type { RequestHandler } from '@sveltejs/kit';

const SITE_URL = 'https://ggmtechnologies.co.ke';

// -------------------------------------------------------------------
// Static pages — edit priorities and changefreq to match your content
// -------------------------------------------------------------------
const staticPages = [
	{ path: '/',               changefreq: 'weekly',  priority: '1.0' },
	{ path: '/about',          changefreq: 'monthly', priority: '0.8' },
	{ path: '/services',       changefreq: 'monthly', priority: '0.9' },
	{ path: '/services/seo',           changefreq: 'monthly', priority: '0.8' },
	{ path: '/services/social-media',  changefreq: 'monthly', priority: '0.8' },
	{ path: '/services/branding',      changefreq: 'monthly', priority: '0.8' },
	{ path: '/services/paid-ads',      changefreq: 'monthly', priority: '0.8' },
	{ path: '/portfolio',           changefreq: 'monthly', priority: '0.8' },
	{ path: '/articles',           changefreq: 'weekly',  priority: '0.9' },
	{ path: '/contact',        changefreq: 'yearly',  priority: '0.7' },
	{ path: '/careers',        changefreq: 'monthly', priority: '0.6' },
	{ path: '/privacy-policy', changefreq: 'yearly',  priority: '0.3' },
	{ path: '/terms',          changefreq: 'yearly',  priority: '0.3' },
];

 
 

function today(): string {
	return new Date().toDateString();
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = async () => {
	const res = await getAllPosts()
	 
const blogPosts:any[] = res.data || [];
	// Static URLs
	const staticUrls = staticPages
		.map(
			({ path, changefreq, priority }) => `
	<url>
		<loc>${SITE_URL}${path}</loc>
		<lastmod>${today()}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
		.join('');

	// Blog post URLs (with image sitemap extension)
	const blogUrls  = blogPosts
		.map(
			(post) => `
	<url>
		<loc>${SITE_URL}/articles/${post.slug}</loc>
		<lastmod>${new Date(post._createdAt)}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.7</priority>
		<image:image>
			<image:loc>${escapeXml(post.mainImage)}</image:loc>
			<image:title>${escapeXml(post.title)}</image:title>
		</image:image>
	</url>`
		)
		.join('');

 

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>${staticUrls}${blogUrls} 
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=3600, s-maxage=3600',
		},
	});
};