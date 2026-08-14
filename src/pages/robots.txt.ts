import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(
    'sitemap.xml',
    new URL(import.meta.env.BASE_URL, site),
  );

  return new Response(
    [`User-agent: *`, `Allow: /`, `Sitemap: ${sitemapUrl.href}`, ``].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
