


interface CacheStore<K, V> {
    put(key: K, value: V): void;
    get(key: K): V;
    remove(key: K): boolean;
    clear(): void;
    getSize(): number;
}

interface CacheStats {
    getHitCount(): number;
    getHitRate(): number;
    getMissCount(): number;
    getMissRate(): number;
    getRemoveCount(): number;
    reset(): void;
    combine(cacheStats: CacheStats): CacheStats;
}

interface CacheStatsTracker {
    getStats(): CacheStats;
}

interface CachePolicy<K, V> extends CacheStore<K, V> {

    put(key: K, value: V): void;
    get(key: K): V;
    remove(key: K): boolean;
    clear(): void;
    getSize(): number;

    setStatsTracker(tracker: CacheStatsTracker): void;
}




class Cache3<K, V> {

    constructor() {

        let x = new Map();

    }




}


