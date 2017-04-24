interface ISECacheStats {

    getHitCount(): number;

    getHitRate(): number;

    getMissCount(): number;

    getMissRate(): number;

    getRemoveCount(): number;

    reset(): void;

    combine(cacheStats: ISECacheStats): ISECacheStats;

}

export default ISECacheStats;