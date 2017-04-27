

interface ICache<K, V> {

    put(key: K, value: V): void;
    get(key: K): V;
    remove(key: K): boolean;
    clear(): void;
    getSize(): number;

}

export default ICache;