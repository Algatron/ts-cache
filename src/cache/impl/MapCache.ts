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



    size
    stats



    evictAll() {
        this.data.clear();
    }

    evict(key: K): boolean {
        const hasValue = this.data.has(key);
        this.data.delete(key);
        return hasValue;
    }



}

export default MapCache;