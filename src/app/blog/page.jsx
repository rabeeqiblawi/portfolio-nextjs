'use client'
import React, { useEffect, useState } from 'react'; 
import './BlogFeed.scss';
import ArticleCard from '@/components/blog/ArticleCard';
import { getArticles } from '@/lib/github'; 
import { getSeries } from '@/lib/github'; 
import { config } from '@/config';

const BlogFeed = () => {
    const [fileData, setFileData] = useState([]);

    useEffect(() => {
        //get both articles and series 
        getArticles().then(articles => {
            getSeries().then(series => {
                const allData = [...articles, ...series];
                const sortedData = allData.sort((a, b) => new Date(b.dateModified) - new Date(a.dateModified));
                setFileData(sortedData);
            });
        });
    }, []);

    return (
        <div className='blog-feed'>
            {fileData.map((article, index) => (
                <ArticleCard
                    key={index}
                    title={article.title}
                    intro={article.intro}
                    blogslug={article.blogslug}
                    lastUpdatedDate={article.dateModified}
                    thumbnail={article.thumbnailImageUrl}
                    isSeries={article.isSeries}
                    seriesSlug={article.isSeries ? article.seriesSlug : null}
                    articleIds={article.isSeries ? article.articleIds : null}
                />
            ))}
        </div>
    );
};

export default BlogFeed;