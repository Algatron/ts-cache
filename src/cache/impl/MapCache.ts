import Cache from "../Cache";

class MapCache<K, V> implements Cache<K, V> {

    private data: Map<K, V> = new Map<K, V>();

    constructor() {
    }

    put(key: K, value: V): void {
        this.data.set(key, value);
    }

    get(key: K): V {
        return this.data.get(key);
    }

}

export default MapCache;