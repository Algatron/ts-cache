
import ISECache from "../cache/ISECache";
abstract class AbstractCacheProxy<K, V> implements ISECache<K, V> {

    private cache: ISECache<K, V>;

    constructor(cache: ISECache<K, V>) {
        this.cache = cache;
    }

    protected getCache(): ISECache<K, V> {
        return this.cache;
    }

    get(key: K): V {
        return this.getCache().get(key);
    }

    put(key: K, value: V): void {
        return this.getCache().put(key, value);
    }

    remove(key: K): boolean {
        return this.getCache().remove(key);
    }

    clear(): void {
        return this.getCache().clear();
    }

    getSize(): number {
        return this.getCache().getSize();
    }
}

export default AbstractCacheProxy;