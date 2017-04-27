import ICacheStatsTracker from "../stats/ICacheStatsTracker";
import ICache from "../storage/ICache";

interface ICachePolicy<K, V> extends ICache<K, V>, ICacheStatsTracker {




}

export default ICachePolicy;