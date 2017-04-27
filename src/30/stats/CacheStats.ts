
import ICacheStatsTracker from "./ICacheStatsTracker";

class CacheStats implements ICacheStatsTracker {

    private _accessCount;
    private _hitCount;
    private _missCount;

    static safeIncrement(value) {
        if (value <= Number.MAX_SAFE_INTEGER) {
            value++;
        }
        return value;
    }

    private init(accessCount?: number, hitCount?: number, missCount?: number) {
        this._accessCount = accessCount || 0;
        this._hitCount = hitCount || 0;
        this._missCount = missCount || 0;
    }

    constructor(accessCount?: number, hitCount?: number, missCount?: number) {
        this.init(accessCount, hitCount, missCount)
    }

    recordHit(): void {
        this._accessCount = CacheStats.safeIncrement(this._accessCount);
        this._hitCount = CacheStats.safeIncrement(this._missCount);
    }

    recordMiss(): void {
        this._accessCount = CacheStats.safeIncrement(this._accessCount);
        this._missCount = CacheStats.safeIncrement(this._hitCount);
    }

    get accessCount(): number {
        return this._accessCount;
    }

    get hitCount(): number {
        return this._hitCount;
    }

    get hitRate(): number {
        return this._accessCount / this._hitCount;
    }

    get missCount(): number {
        return this._missCount;
    }

    get missRate(): number {
        return this._accessCount / this._missCount;
    }

    reset(): void {
        this.init();
    }

    combine(cacheStats: CacheStats): CacheStats {
        return new CacheStats(
            this._accessCount + cacheStats.accessCount,
            this._hitCount + + cacheStats.hitCount,
            this._missCount + + cacheStats.missCount);
    }

    print() {
        let output =
            `Hits: ${this.hitCount}, HitRate: ${this.hitRate}, Misses: ${this.missCount}, MissRate: ${this.missRate}`
        // TODO - replace with injectable printer
        console.info(output);
    }

}

export default CacheStats;