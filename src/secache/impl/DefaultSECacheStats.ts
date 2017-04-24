import ISECacheStats from "../stats/ISECacheStats";

class DefaultSECacheStats implements ISECacheStats {

    private accessCount;
    private hitCount;
    private missCount;
    private removeCount;

    static safeIncrement(value) {
        if (value <= Number.MAX_SAFE_INTEGER) {
            value++;
        }
        return value;
    }

    private init(accessCount?: number, hitCount?: number, missCount?: number, removeCount?: number) {
        this.accessCount = accessCount || 0;
        this.hitCount = hitCount || 0;
        this.missCount = missCount || 0;
        this.removeCount = removeCount || 0;
    }

    constructor(accessCount?: number, hitCount?: number, missCount?: number, removeCount?: number) {
        this.init(accessCount, hitCount, missCount, removeCount)
    }

    hit(): void {
        this.accessCount = DefaultSECacheStats.safeIncrement(this.accessCount);
        this.hitCount = DefaultSECacheStats.safeIncrement(this.missCount);
    }

    miss(): void {
        this.accessCount = DefaultSECacheStats.safeIncrement(this.accessCount);
        this.missCount = DefaultSECacheStats.safeIncrement(this.hitCount);
    }

    remove(): void {
        this.removeCount = DefaultSECacheStats.safeIncrement(this.removeCount);
    }

    getHitCount(): number {
        return this.hitCount;
    }

    getHitRate(): number {
        return this.accessCount / this.hitCount;
    }

    getMissCount(): number {
        return this.missCount;
    }

    getMissRate(): number {
        return this.accessCount / this.missCount;
    }

    getRemoveCount(): number {
        return this.removeCount;
    }

    reset(): void {
        this.init();
    }

    combine(cacheStats: ISECacheStats): ISECacheStats {
        return new DefaultSECacheStats(this.accessCount, this.hitCount, this.missCount, this.removeCount);
    }

}

export default DefaultSECacheStats;
