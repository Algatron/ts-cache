import ISECache from "../cache/ISECache";
import ISECachePolicy from "./ISECachePolicy";
import ExpiresAfterAccessPolicyCacheDelegate from "./ExpiresAfterAccessPolicyCacheDelegate";
class ExpiresAfterAccessPolicy implements ISECachePolicy {

    private millis: number;

    constructor(time: number) {
        this.millis = time;
    }

    createProxy<K, V>(cache: ISECache<K, V>): ISECache<K, V> {
        return new ExpiresAfterAccessPolicyCacheDelegate<K,V>(cache, this.millis);
    }
}

export default ExpiresAfterAccessPolicy;