import React from 'react';
import './ArticleCard.scss';
import Link from 'next/link';

const ArticleCard = ({ title, intro, content, lastUpdatedDate, thumbnail }) => {
    console.log(thumbnail);
    return (
        <>
            <article className="article-card">
                <img src={thumbnail} alt={title} className="article-card-thumbnail" />
                <div className="article-card-content-wrapper">
                    <header>
                        <h2 className="article-card-title">{title}</h2>
                    </header>
                    <section className="article-card-content">
                        <p>{intro}</p>
                    </section>
                </div>
                <footer className="article-card-footer">
                    <p className="article-card-footer-update-info">Last Updated: {lastUpdatedDate}</p>
                    <Link href={`/article/${encodeURIComponent(content)}`} className="article-card-footer-read-more">
                        continue reading...
                    </Link>
                </footer>
            </article>
        </>
    );
};

export default ArticleCard;