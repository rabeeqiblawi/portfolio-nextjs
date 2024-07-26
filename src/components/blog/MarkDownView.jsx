'use client'

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, vs, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Scrollspy from 'react-scrollspy';
import NavigationStore from '../navigation/NavigationStore';
import './MarkdownView.scss';
import { observer } from 'mobx-react';
import Sidebar from '@/components/navigation/sidebar/Sidebar';
import RelatedCard from '../cards/relatedCard';

import { getArticles } from '@/lib/github'; 
import { getSeries } from '@/lib/github'; 

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneLight}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  h2({ node, children }) {
    const headingText = React.Children.toArray(children).join('');
    const headingId = headingText.replace(/\s/g, '%20');
    return (
      <h2 id={headingId}>{children}</h2>
    );
  },
};

const MarkDownView = observer(({ rawMdText, children, isSeries }) => {
  const [markdown, setMarkdown] = useState('');
  const [headings, setHeadings] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const timerRef = useRef(null);
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    setMarkdown(rawMdText);
    const headingRegex = /(?:^|\n)## +(.*?)(?:\n|$)/g;
    let match;
    const newHeadings = [];
    while ((match = headingRegex.exec(rawMdText)) !== null) {
      newHeadings.push(match[1]);
    }
    setHeadings(newHeadings);

    NavigationStore.isSidebarOpen = false;
  }, [rawMdText]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    NavigationStore.isSidebarOpen = !sidebarVisible;
  };


  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    getArticles().then(articles => {
      getSeries().then(series => {
        const allData=[];
        if(isSeries){
          allData.push(...series);
        }else{
          allData.push(...articles);
        }
          const sortedData = allData.sort((a, b) => new Date(b.dateModified) - new Date(a.dateModified));
          setFileData(sortedData);
      });
    });
  }, []);

  isSeries=false
  return (
    <div className="markdown-view-container">
      <Sidebar>
        <Scrollspy items={headings} currentClassName="is-current">
          {headings.map((heading, index) => (
            <li key={index}>
              <a href={`#${heading}`}>{heading}</a>
            </li>
          ))}
        </Scrollspy>
        {children}
      </Sidebar>

      <div className='markdown-view-navigation'>
        <Scrollspy items={headings} currentClassName="is-current">
          {headings.map((heading, index) => (
            <li key={index}>
              <a href={`#${heading}`}>{heading}</a>
            </li>
          ))}
        </Scrollspy>
      </div>

      <div className="markdown-view">
        <div className="markdown-view-content">
          <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
        </div>
      </div>
      <div className='markdown-view-related'>
        {isSeries?
          <>
            <h2 className='markdown-view-related-title'>Series</h2>
            <div className='markdown-view-related-cardsContainer'>
              {fileData.map((article, index) => (
                  <RelatedCard
                    imageUrl={article.thumbnailImageUrl}
                    title={article.title}
                    date={'Last Updated: '+ article.dateModified}
                    actionLink={`/blog/series/${encodeURIComponent(article.seriesSlug)}${article.articleIds && article.articleIds.length > 0 ? `?articleIds=${encodeURIComponent(article.articleIds.join(','))}` : ''}`}
                    description="This is a description"
                  />
                ))}
            </div>
          </>
        :
        <>
          <h2 className='markdown-view-related-title'>Related Blogs</h2>
          <div className='markdown-view-related-cardsContainer'>
            {fileData.map((article, index) => (
              <RelatedCard
                imageUrl={article.thumbnailImageUrl}
                title={article.title}
                date={'Last Updated: '+ article.dateModified}
                actionLink={`/blog/${encodeURIComponent(article.blogslug)}`}
                description="This is a description"
              />
            ))}   
          </div>
        </>
        }
      </div> 
    </div>
  );
});

export default MarkDownView;