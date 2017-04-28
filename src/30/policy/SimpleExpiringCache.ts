
import ICachePolicy from "./ICachePolicy";
import ICache from "../storage/ICache";
import DefaultCacheConfig from "./config/DefaultCacheConfig";


interface ObjectKey {
    v: any
}

class SimpleExpiringCache<K, V> implements ICachePolicy<K, V> {

    private config: DefaultCacheConfig;

    private expiresMap: WeakMap<ObjectKey, number>;

    private convertToObject(key : K): ObjectKey {
        return { v: key };
    }

    constructor(config: DefaultCacheConfig) {
        this.config = config;
    }

    setStorage(store: ICache<K, V>): void {

    }

    getStorage(): ICache<K, V> {
        return null;
    }

    put(key: K, value: V): void {
        this.expiresMap.set(this.convertToObject(key), Date.now() + this.config.expireAfterWrite);
        return this.getStorage().put(key, value);
    }

    get(key: K): V {
        if (this.expiresMap.has({ v: key })) {
            if (Date.now() >= this.expiresMap.get({ v: key })) {
                this.getStorage().remove(key);
            }
        }
        this.expiresMap.set(this.convertToObject(key), Date.now() + this.config.expireAfterAccess);
        return this.getStorage().get(key);
    }

    remove(key: K): boolean {
        return this.getStorage().remove(key);
    }

    clear(): void {
        return this.getStorage().clear();
    }

    getSize(): number {
        return this.getStorage().getSize();
    }

}

export default SimpleExpiringCache;