import { absoluteUrl, siteConfig, sitePages } from '@/lib/site';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const lastBuildDate = new Date().toUTCString();

  const items = sitePages
    .map(
      (page) => `
    <item>
      <title>${escapeXml(`${page.title} | ${siteConfig.name}`)}</title>
      <link>${escapeXml(absoluteUrl(page.path))}</link>
      <guid isPermaLink="true">${escapeXml(absoluteUrl(page.path))}</guid>
      <description>${escapeXml(page.description)}</description>
      <pubDate>${lastBuildDate}</pubDate>
    </item>`,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.title)}</title>
    <link>${escapeXml(siteConfig.url)}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>${siteConfig.language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js</generator>${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
