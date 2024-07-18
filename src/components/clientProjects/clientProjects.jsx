import React from 'react'
import styles from './clientProjects.module.scss'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import MiniProjectCard from '../cards/MiniProjectCard';

const ClientProjects = ({isHidden, title, highlightedWord, data, buttonText, buttonAction }) => {
    // imageUrl, title, description, actionText, actionLink, onHeightChange
    console.log('ClientProjects', isHidden, title, highlightedWord, data, buttonText, buttonAction) ;
    const showAllProjects = false;

    const showMore = () => {
        setshowAllProjects(!showAllProjects);
        if (showAllProjects) {
            window.location.href = "#projects";
        }
    }
    return (
        isHidden? null : 
        <div className={styles.container}>
            <h2 id='miniProjects' className={styles.headers}>
                {title.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                        {highlightedWord.includes(word) ?
                            <span>{word}</span>
                            : ` ${word} `
                        }
                    </React.Fragment>
                ))}
            </h2>
            <div
                className={styles.responsiveContainer}
                style={{
                    // maxHeight: totalHeight
                }}
            >
                {data.map(project => (
                    <MiniProjectCard
                        key={project.title}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        description={project.description}
                        actionLink={project.actionLink}
                        // onHeightChange={handleCardHeightChange}
                    />
                ))}
            </div>
            <div className={styles.showMoreContainer} >
                <button onClick={showMore}>
                    {!showAllProjects ? "Show All" : "Show less"}
                    {!showAllProjects ? <span><FiPlusCircle /></span> : <span><FiMinusCircle /></span>}
                </button>
            </div>
        </div>
    )
}

export default ClientProjects