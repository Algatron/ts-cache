import ISECache from "../ISECache";
import ISECacheStatsTracker from "../stats/ISECacheStatsTracker";
import DefaultSECacheStats from "./DefaultSECacheStats";

class DefaultSECacheStatsTracker implements ISECacheStatsTracker<DefaultSECacheStats> {

    private cacheStats: DefaultSECacheStats = new DefaultSECacheStats();

    constructor(cache: ISECache<any, any>) {

        cache.get = new Proxy(cache.get, {
            apply: (target, thisArg, args) => {
                let result = Reflect.apply(target, thisArg, args);
                if (typeof result !== 'undefined') {
                    this.cacheStats.hit();
                } else {
                    this.cacheStats.miss();
                }
                return result;
            }
        });

        cache.remove = new Proxy(cache.remove, {
            apply: (target, thisArg, args) => {
                this.cacheStats.remove();
                return Reflect.apply(target, thisArg, args);
            }
        });

    }

    getStats(): DefaultSECacheStats {
        return this.cacheStats;
    }
}

export default DefaultSECacheStatsTracker;