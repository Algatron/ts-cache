
import ICachePolicy from "../ICachePolicy";
// class CacheFactory {
//
//
//     static createCache<K, V>(policy, storage?): ICachePolicy<K, V> {
//
//     }
//
//
//
// }

enum StoragePolicy {
    INHERIT,
    POLICY
}

class CacheManager {





    createCache<K, V>(policy: ICachePolicy<K, V>, storage: ICachePolicy<K, V> | StoragePolicy): ICachePolicy<K, V> {
        return null;
    }

}

interface ICacheConfig {

}

interface ICache<K, V> {

}

interface CacheFactory<C extends ICacheConfig> {

    createCache<K, V>(config: C): ICache<K, V>;

}

