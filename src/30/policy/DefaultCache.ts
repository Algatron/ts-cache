
import ICachePolicy from "./ICachePolicy";
import ICache from "../storage/ICache";
import DefaultCacheConfig from "./config/DefaultCacheConfig";


interface ObjectKey {
    v: any
}

class DefaultCache<K, V> implements ICachePolicy<K, V> {

    private config: DefaultCacheConfig;






    private expiresMap: WeakMap<ObjectKey, number>;










    constructor(config: DefaultCacheConfig) {
        this.config = config;
    }

    setStorage(store: ICache<K, V>): void {
    }

    getStorage(): ICache<K, V> {
        return null;
    }

    put(key: K, value: V): void {
        this.expiresMap.set({ v: key }, Date.now() + this.config.expireAfterWrite);
        return this.getStorage().put(key, value);
    }

    get(key: K): V {
        if (this.expiresMap.has({ v: key })) {
            if (Date.now() >= this.expiresMap.get({ v: key })) {

            }
        }


        this.expiresMap.set({ v: key }, Date.now() + this.config.expireAfterAccess);
        return this.getStorage().get(key);;
    }

    remove(key: K): boolean {
        return null;
    }

    clear(): void {
    }

    getSize(): number {
        return null;
    }

    recordHit(): void {
    }

    recordMiss(): void {
    }
}
