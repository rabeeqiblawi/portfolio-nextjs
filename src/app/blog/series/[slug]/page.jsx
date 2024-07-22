'use client'
import React, { useState, useEffect } from 'react';
import { getSeries, getArticles } from '@/lib/github';
import '../../BlogFeed.scss';
import ArticleCard from '@/components/blog/ArticleCard';

const Seriespage = ({ params }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getSeries(params.slug).then(seriesData => {
            getArticles(seriesData.articleIds).then(articlesData => {
                setArticles(articlesData);
                console.log(articles);
            });
        });
    }, [params.slug, articles.length]);

    return (
        <div className='blog-feed'>
            {(articles && articles.length > 0) && articles.map((article, index) => (
                <ArticleCard
                    key={index}
                    title={article.title}
                    intro={article.intro}
                    content={article.articleUrl}
                    lastUpdatedDate={article.dateModified}
                    thumbnail={article.thumbnailImageUrl}
                    isSeries={article.isSeries}
                    seriesSlug={article.isSeries ? article.seriesSlug : null}
                    articleIds={article.isSeries ? article.articleIds : null}
                />
            ))}
        </div>
    );
}

export default Seriespage;