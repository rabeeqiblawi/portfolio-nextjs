
'use client'
import React, { useEffect, useState } from 'react';
import './BlogFeed.scss';
import ArticleCard from '@/components/blog/ArticleCard';
import { fetchArticlesMetaJSON } from '@/lib/github';
import { config } from '@/config';

const BlogFeed = () => {
    const [fileData, setFileData] = useState([]);

    useEffect(() => {
        fetchArticlesMetaJSON(config.github.repoOwner, config.github.repoName).then(setFileData);
    }, []);

    return (
        <div className='blog-feed'>
            {fileData.map((article, index) => (
                <ArticleCard
                    key={index}
                    title={article.title}
                    intro={article.intro}
                    content={article.articleUrl}
                    lastUpdatedDate={article.dateModified}
                    thumbnail={article.thumbnailImageUrl}
                />
            ))}
        </div>
    );
};

export default BlogFeed;