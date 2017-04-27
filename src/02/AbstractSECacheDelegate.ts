import ISECache from "./ISECache";

abstract class AbstractSECacheDelegate<K, V> implements ISECache<K, V> {

    private cache: ISECache<K, V>;

    constructor(cache: ISECache<K, V>) {
        this.cache = cache;
    }

    put(key: K, value: V): void {
        this.getCache().put(key, value);
    }

    get(key: K): V {
        return this.getCache().get(key);
    }

    remove(key: K): boolean {
        return this.getCache().remove(key);
    }

    clear(): void {
        this.getCache().clear();
    }

    getSize(): number {
        return this.getCache().getSize();
    }

    getCache(): ISECache<K, V> {
        return this.cache;
    }

}

export default AbstractSECacheDelegate;