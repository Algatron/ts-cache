import Cache from "../Cache";
import CacheStats from "../CacheStats";

class MapCache<K, V> implements Cache<K, V> {

    private data: Map<K, V> = new Map<K, V>();
    private stats: CacheStats = {};

    constructor() {
    }

    put(key: K, value: V): void {
        this.data.set(key, value);
    }

    get(key: K): V {
        return this.data.get(key);
    }

    remove(key: K): boolean {
        return this.data.delete(key);
    }

    clear(): void {
        this.data.clear();
    }

    getSize(): number {
        return this.data.size;
    }

    getStats(): CacheStats {
        return this.stats;
    }

}

export default MapCache;