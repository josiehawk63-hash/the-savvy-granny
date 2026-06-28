import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS feed of all published recipes. Auto-pinning tools (Tailwind, Publer, etc.)
// and readers can subscribe to this to pick up new recipes automatically.
export async function GET(context) {
  const recipes = (await getCollection('recipes', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'The Savvy Granny — Budget-Friendly Recipes',
    description:
      'Budget-friendly recipes shared by the The Savvy Granny community. Eat well, spend less.',
    site: context.site,
    xmlns: { media: 'http://search.yahoo.com/mrss/' },
    items: recipes.map((r) => {
      const imageUrl = r.data.image ? new URL(r.data.image, context.site).href : undefined;
      return {
        title: r.data.title,
        description: r.data.description,
        pubDate: r.data.pubDate,
        link: `/recipes/${r.id}/`,
        // Image included two ways so pinning tools reliably find it.
        ...(imageUrl
          ? {
              enclosure: { url: imageUrl, length: 0, type: 'image/jpeg' },
              customData: `<media:content url="${imageUrl}" medium="image" />`,
            }
          : {}),
      };
    }),
  });
}
