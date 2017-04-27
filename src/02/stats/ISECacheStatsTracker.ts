import ISECacheStats from "./ISECacheStats";

interface ISECacheStatsTracker<T extends ISECacheStats> {

    getStats(): T;

}

export default ISECacheStatsTracker;


