import React from 'react';
import './ArticleCard.scss';
import Link from 'next/link';

const ArticleCard = ({ title, intro, content, lastUpdatedDate, thumbnail }) => {
    console.log(thumbnail);
    return (
        <>
            <article className="article-card">
                <img src={thumbnail} alt={title} className="article-card-thumbnail" />
                <section className="article-card-content-wrapper">
                    <div>
                        <h2 className="article-card-title">{title}</h2>
                    </div>
                    <div className="article-card-content">
                        <p>{intro}</p>
                    </div>
                    <p className="article-card-footer-update-info">Last Updated: {lastUpdatedDate}</p>
                </section>
                <div className="article-card-footer">
                    <Link href={`/blog/${encodeURIComponent(content)}`} className="article-card-footer-read-more">
                        continue reading...
                    </Link>
                </div>
            </article>
        </>
    );
};

export default ArticleCard;