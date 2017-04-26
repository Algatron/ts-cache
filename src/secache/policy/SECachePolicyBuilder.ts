import AbstractSECacheDelegate from "../AbstractSECacheDelegate";
import ISECachePolicy from "./ISECachePolicy";

class EmptyCacheDelegate<K, V> extends AbstractSECacheDelegate<K, V> {

}

class SECachePolicyBuilder {

    private policies: Array<ISECachePolicy> = [];


    build<K, V>(): ISECachePolicy {
        if (this.policies.length === 0) {
            return new EmptyCacheDelegate<K, V>();
        }
    }

}






policy = policyBuilder.with(
    .build()
)
cacheManager.buildCache(new blaCacheFactory, policy)