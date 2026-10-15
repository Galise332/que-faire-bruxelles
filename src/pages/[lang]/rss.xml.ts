import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { LANG_CODES, T, type Lang } from '../../i18n';

export function getStaticPaths() { return LANG_CODES.map(lang => ({ params: { lang } })); }

export async function GET(context: { site: URL; params: { lang: string } }) {
  const lang = context.params.lang as Lang;
  const articles = (await getCollection('articles', a => a.id.startsWith(`${lang}/`))).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: T[lang].title,
    description: T[lang].rssDesc,
    site: new URL(`/${lang}/`, context.site),
    items: articles.map(a => ({ title: a.data.title, description: a.data.description, pubDate: a.data.date, link: `${a.id.slice(3)}/` })),
  });
}
