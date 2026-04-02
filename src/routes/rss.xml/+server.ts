import { getAllPosts } from '$lib/sanity';
import type { RequestHandler } from '@sveltejs/kit';

const SITE_URL = 'https://ggmtechnologies.co.ke';
const SITE_TITLE = 'GGM Technologies | Build. Grow. Scale.';
const SITE_DESCRIPTION = 'We build the digital infrastructure that drives real business growth — from high-performance websites and web apps to strategies that convert.';
const SITE_LANGUAGE = 'en-US';
const SITE_COPYRIGHT = `© ${new Date().getFullYear()} GGM Technologies. All rights reserved.`;
const SITE_AUTHOR = 'GGM Technologies Team';

// Replace this with a real DB/CMS fetch in production
 

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = async () => {
	const res= await getAllPosts();
    const articles:any[] = res.data || [];
	const items = articles
		.map(
			(article) => `
		<item>
			<title>${escapeXml(article.title)}</title>
			<link>${SITE_URL}/articles/${article.slug}</link>
			<guid isPermaLink="true">${SITE_URL}/articles/${article.slug}</guid>
			<description>${escapeXml(article.excerpt)}</description>
			<content:encoded><![CDATA[${article.content}]]></content:encoded>
			<pubDate>${new Date(article._createdAt)}</pubDate>
			<author>${escapeXml(article.author.name)}</author>
			<category>${escapeXml(article.category.title)}</category>
			<image:image>
				<image:url>${article.mainImage}</image:url>
				<image:title>${escapeXml(article.title)}</image:title>
				<image:link>${SITE_URL}/articles/${article.slug}</image:link>
			</image:image>
		</item>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
	<channel>
		<title>${escapeXml(SITE_TITLE)}</title>
		<link>${SITE_URL}</link>
		<description>${escapeXml(SITE_DESCRIPTION)}</description>
		<language>${SITE_LANGUAGE}</language>
		<copyright>${escapeXml(SITE_COPYRIGHT)}</copyright>
		<managingEditor>${escapeXml(SITE_AUTHOR)}</managingEditor>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
		<image>
			<url>${SITE_URL}/circularlogo.png</url>
			<title>${escapeXml(SITE_TITLE)}</title>
			<link>${SITE_URL}</link>
		</image>
		${items}
	</channel>
</rss>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=600, s-maxage=600'
		}
	});
};