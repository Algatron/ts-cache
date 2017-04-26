
import ISEStatsTracker from "./ISEStatsTracker";
import ISECache from "../cache/ISECache";
class DefaultSECacheStatsTracker implements ISEStatsTracker {

    createProxy<K, V>(cache: ISECache<K, V>): ISECache<K, V> {
        return null;
    }
}

export default DefaultSECacheStatsTracker;