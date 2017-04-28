import CacheStats from "../stats/CacheStats";
import ICache from "../storage/ICache";

interface ICachePolicy<K, V> extends ICache<K, V> {

    setStorage(storage: ICache<K, V>): void;

    // setStatsTracker(statsTracker: CacheStats): void;

    // getStats(): CacheStats;

}

export default ICachePolicy;