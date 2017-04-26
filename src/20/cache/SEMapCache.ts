import ISECache from "./ISECache";
class SEMapCache<K, V> implements ISECache<K, V> {

    private store: Map<K, V> = new Map<K, V>();

    put(key: K, value: V): void {
        this.store.set(key, value);
    }

    get(key: K): V {
        return this.store.get(key);
    }

    remove(key: K): boolean {
        return this.store.delete(key);
    }

    clear(): void {
        this.store.clear();
    }

    getSize(): number {
        return this.store.size;
    }

}

export default SEMapCache;

