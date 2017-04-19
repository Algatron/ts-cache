
import Cache from "../Cache";
import CacheConfiguration from "../CacheConfiguration";

class MapCache<K, V> implements Cache {

    private data: Map<K, V> = new Map<K, V>();

    constructor(configuration: CacheConfiguration) {
    }

    put(key: K, value: V): void {
        this.data.set(key, value);
    }

    get(key: K): V {
        return this.data.get(key);
    }

}

export default MapCache;