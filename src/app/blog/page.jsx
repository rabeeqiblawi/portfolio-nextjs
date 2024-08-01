'use client'
import React, { use, useEffect, useState } from 'react'; 
import './BlogFeed.scss';
import ArticleCard from '@/components/blog/ArticleCard';
import { getArticles } from '@/lib/github'; 
import { getSeries } from '@/lib/github'; 
import { config } from '@/config';
import { FaSearch } from 'react-icons/fa';
import { observer } from 'mobx-react';
import NavigationStore from '@/components/navigation/NavigationStore';
const BlogFeed = observer(() => {
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

    useEffect(() => {
        NavigationStore.setCurrentSeries(null);
    },[]);

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        const searchValue = event.target.value.toLowerCase();
        
    };

    return (
        <div className='blog-feed'>
            <div className='blog-feed-filter'>
                <div className='blog-feed-filter-search'>
                    <FaSearch className='blog-feed-filter-search-icon' />
                    <input type="text" placeholder="Search" className='blog-feed-filter-search-input' value={searchText} onChange={handleSearchChange} />
                </div>
                {/* <div>
                    <button>Test</button>
                </div> */}
            </div>
            {fileData.map((article, index) => (
                article.hidden === false && (
                    <ArticleCard
                        key={index}
                        title={article.isSeries? article.seriesTitle: article.title}
                        intro={article.intro}
                        blogslug={article.blogslug}
                        lastUpdatedDate={article.dateModified}
                        thumbnail={article.thumbnailImageUrl}
                        isSeries={article.isSeries}
                        seriesSlug={article.isSeries ? article.seriesSlug : null}
                        articleIds={article.isSeries ? article.articleIds : null}
                    />
                )
            ))}
        </div>
    );
});

export default BlogFeed;
