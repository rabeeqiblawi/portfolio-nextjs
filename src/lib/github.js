/*TODO store pointers to articles on firebase */
export const fetchRepoFileNames = (repoOwner, repoName) => {
    return fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents`)
        .then(response => response.json())
        .then(data => data.map(file => file.name));
};

//TODO: USE DB To srore pointers to articles
export const fetchArticlesMetaJSON = (repoOwner, repoName) => {
    return fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/articles.meta.json`)
        .then(response => response.json())
        .then(data => {
            const content = atob(data.content);
            return JSON.parse(content);
        });
};