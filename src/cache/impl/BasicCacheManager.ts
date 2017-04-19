
import CacheManager from "../CacheManager";
import CacheConfiguration from "../CacheConfiguration";
import CacheFactory from "../CacheFactory";
import Cache from "../Cache";

class BasicCacheManager implements CacheManager {


    createCache<K, V, C extends CacheConfiguration>(alias: string, builder: CacheFactory<C>): Cache<K, V> {
        return undefined;
    }

    getCache<K, V>(alias: string): Cache<K, V> {
        return undefined;
    }

}

export default BasicCacheManager;


