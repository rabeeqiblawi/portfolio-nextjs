import MarkDownView from '@/components/blog/MarkDownView';
export const config = { runtime: 'edge' };

async function fetchMarkdown(fileUrl) {
  try {
    const file = decodeURIComponent(fileUrl);
    console.log('File:', file);
    console.log('Fetching markdown:', `${file}`);
    const response = await fetch(`${file}`, { cache: 'no-store' });
    console.log('Response:', response);
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.error('Error fetching markdown:', error);
  }
  return '';
}

export default async function ArticlePage({ params }) {
  const fileUrl = params.slug;
  const markdown = await fetchMarkdown(fileUrl);

  return (
    <div>
      <MarkDownView rawMdText={markdown}>Hi</MarkDownView>
    </div>
  );
}