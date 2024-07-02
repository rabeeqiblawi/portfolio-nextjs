'use client'
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, vs, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Scrollspy from 'react-scrollspy';
import NavigationStore from '../navigation/NavigationStore';
import './MarkdownView.scss';
import { observer } from 'mobx-react';
import Sidebar from '@/components/navigation/sidebar/Sidebar'

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneLight}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
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

const MarkDownView = observer(({ rawMdText }) => {
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

  return (
    <div className="markdown-view">
      {/* <div className={`markdown-view-sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}> */}
      <Sidebar children={<Scrollspy items={headings} currentClassName="is-current">
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading}`}>{heading}</a>
          </li>
        ))}
      </Scrollspy>}>
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
          <ReactMarkdown components={components} children={markdown} />
        </div>
      </div>
    </div>
  );
});

export default MarkDownView;