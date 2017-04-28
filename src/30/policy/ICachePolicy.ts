import ICacheStatsTracker from "../stats/ICacheStatsTracker";
import ICache from "../storage/ICache";

interface ICachePolicy<K, V> extends ICache<K, V>, ICacheStatsTracker {

    setStorage(store: ICache<K, V>): void;

    getStorage(): ICache<K, V>;

}

export default ICachePolicy;