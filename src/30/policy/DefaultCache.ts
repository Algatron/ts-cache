import ICache from "../storage/ICache";
import ICachePolicy from "./ICachePolicy";


class DefaultCache<K, V> implements ICachePolicy<K, V> {

    private _storage: ICache<K, V>;
    // private _statsTracker: CacheStats;

    protected getStorage(): ICache<K, V> {
        return this._storage;
    }

    setStorage(storage: ICache<K, V>): void {
        this._storage = storage;
    }

    // protected getStatsTracker(): ICache<K, V> {
    //     return this._storage;
    // }
    //
    // setStatsTracker(statsTracker: CacheStats): void {
    //     this._statsTracker = statsTracker;
    // }
    //
    // getStats(): CacheStats {
    //     return this._statsTracker;
    // }

    put(key: K, value: V): void {
        return this.getStorage().put(key, value);
    }

    get(key: K): V {
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

export default DefaultCache;
