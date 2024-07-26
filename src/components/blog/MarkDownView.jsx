"use client"
import MarkDownView from '@/components/blog/MarkDownView';
import { getArticleBySlug } from '@/lib/github';
import React, { useEffect, useState } from 'react';

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

export async function generateMetadata({ params }) {
  const blogslug = params.slug;
  const articl = await getArticleBySlug(blogslug);

  return {
    title: articl.title,
    description: articl.intro,
    image: articl.thumbnailImageUrl
  }
}

export default function ArticlePage({ params }) {
  const [markdown, setMarkdown] = useState('');
  const [article, setArticle] = useState(null);
  const blogslug = params.slug;

  useEffect(() => {
    async function fetchData() {
      const articleData = await getArticleBySlug(blogslug);
      setArticle(articleData);
      const markdownData = await fetchMarkdown(articleData.articleUrl);
      setMarkdown(markdownData);
    }
    fetchData();
  }, [blogslug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ marginTop: 'var(--navigationBarHight)' }}>
        <MarkDownView rawMdText={markdown} isSeries={article.isSeries} />
      </div>
    </>
  );
}