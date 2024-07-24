import MarkDownView from '@/components/blog/MarkDownView';
import { getArticleBySlug } from '@/lib/github';

/*move to utiles or something */
async function fetchMarkdown(fileUrl) {
  try {
    const file = decodeURIComponent(fileUrl);
    const response = await fetch(`${file}`, { cache: 'no-store' });
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
  }
  return '';
}

export async function generateMetadata({ params })
{
  const blogslug = params.slug;
  const article = await getArticleBySlug(blogslug);

  return {
    title: article.title,
    description: article.intro,
    image: article.thumbnailImageUrl
  }

}


export default async function ArticlePage({ params }) {
  const blogslug = params.slug;
  const article = await getArticleBySlug(blogslug);
  const markdown = await fetchMarkdown(article.articleUrl);



  return (
    <>
      <div style={{ marginTop: 'var(--navigationBarHight)' }}>
        <MarkDownView rawMdText={markdown}></MarkDownView>
      </div>
    </>
  )
}