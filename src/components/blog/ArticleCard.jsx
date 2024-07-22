import React from 'react';
import './ArticleCard.scss';
import Link from 'next/link';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const cardStyle = { position: 'absolute', top: 0, right: 15, color: 'gray' };
/*content is actually the url passed in, will fix that later. */
const ArticleCard = ({ title, intro, blogslug, lastUpdatedDate, thumbnail, isSeries, seriesSlug, articleIds }) => {
    return (
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
                {
                    isSeries ? <Link
                        href={`/blog/series/${encodeURIComponent(seriesSlug)}${articleIds && articleIds.length > 0 ? `?articleIds=${encodeURIComponent(articleIds.join(','))}` : ''}`}
                        className="article-card-footer-read-more">
                        continue ... </Link>
                        : <Link href={`/blog/${encodeURIComponent(blogslug)}`} className="article-card-footer-read-more">
                            continue reading...
                        </Link>
                }
            </div>
            {isSeries && <p style={cardStyle}>series</p>}
        </article>
    );
};

export default ArticleCard;