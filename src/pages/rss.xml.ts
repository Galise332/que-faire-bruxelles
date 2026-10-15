import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const articles = (await getCollection('articles')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Que faire à Bruxelles',
    description: 'Un article par jour sur une adresse bruxelloise.',
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: articles.map(a => ({ title: a.data.title, description: a.data.description, pubDate: a.data.date, link: `${a.id}/` })),
  });
}
