import { storeInCache, getFromCache } from '@/lib/cache';
import { config } from '@/config';

const acticlesKey = 'articles';
const seriesKey = 'series';

const fetchSeriesMetaJSON = async (repoOwner, repoName) => {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/series.meta.json`);
    const data = await response.json();
    const content = atob(data.content);
    const parsedData = JSON.parse(content);
    return parsedData.map(item => ({ ...item, isSeries: true }));
};

const fetchArticlesMetaJSON = async (repoOwner, repoName) => {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/articles.meta.json`);
    const data = await response.json();
    const content = atob(data.content);
    const parsedData = JSON.parse(content);
    return parsedData.map(item => ({ ...item, isSeries: false }));
};

export const getArticles = async (ids = []) => {
    const cachedArticles = await getFromCache(acticlesKey);

    if (cachedArticles && ids.length === 0) {
        return cachedArticles;
    } else if (cachedArticles && ids.length > 0) {
        return cachedArticles.filter(article => ids.includes(article.id));
    }

    console.log("Fetching articles from GitHub API");
    try {
        const articlesMeta = await fetchArticlesMetaJSON(config.github.repoOwner, config.github.repoName);
        storeInCache(acticlesKey, articlesMeta);
        if (ids.length > 0) {
            return articlesMeta.filter(article => ids.includes(article.id));
        }
        return articlesMeta;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};

export const getSeries = async (slug = "") => {
    const cachedSeries = await getFromCache(seriesKey);

    if (cachedSeries) {
        console.log("Retrieved series from cache");
        if (slug !== "") {
            const series = cachedSeries.find(series => series.seriesSlug === slug);
            return series ? series : null;
        }
        return cachedSeries;
    }
    try {
        const seriesMeta = await fetchSeriesMetaJSON(config.github.repoOwner, config.github.repoName);
        await storeInCache(seriesKey, seriesMeta);
        if (slug !== "") {
            const series = seriesMeta.find(series => series.seriesSlug === slug);
            return series ? series : null;
        }
        return seriesMeta;
    } catch (error) {
        console.error("Error fetching series:", error);
        throw error;
    }
};
