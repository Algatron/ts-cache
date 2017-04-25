
import ISECache from "./ISECache";
abstract class AbstractSECacheDelegate<K, V> implements ISECache<K, V> {

    private source: ISECache<K, V>;

    constructor(cache: ISECache<K, V>) {
        this.source = cache;
    }

    put(key: K, value: V): void {
        this.source.put(key, value);
    }

    get(key: K): V {
        return this.source.get(key);
    }

    remove(key: K): boolean {
        return this.source.remove(key);
    }

    clear(): void {
        this.source.clear();
    }

    getSize(): number {
        return this.source.getSize();
    }
}

export default AbstractSECacheDelegate;