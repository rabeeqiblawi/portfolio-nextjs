const cache = new Map();
const ttl = 60000;

export const storeInCache = (key, value,) => {
    const expirationTime = Date.now() + ttl;
    cache.set(key, {
        value,
        expirationTime
    });
};

export const getFromCache = (key) => {
    const item = cache.get(key);
    if (item) {
        if (item.expirationTime > Date.now()) {
            return item.value;
        } else {
            cache.delete(key);
        }
    }
    return undefined;
};

const clearExpiredCache = () => {
    const now = Date.now();
    for (const [key, item] of cache.entries()) {
        if (item.expirationTime <= now) {
            cache.delete(key);
        }
    }
};

setInterval(clearExpiredCache, ttl); 