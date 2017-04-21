import CacheStats from "./CacheStats";
interface Cache<K, V> {

    put(key: K, value: V): void;

    get(key: K): V;

    remove(key: K): boolean;

    clear(): void;

    getSize(): number;

    getStats(): CacheStats;

}

export default Cache;