import AbstractSECacheDelegate from "../../AbstractSECacheDelegate";
class ExpireAfterAccessPolicy<K, V> extends AbstractSECacheDelegate<K, V> {

    private expiryMap = new Map<K, number>();
    private expireMillis: number;

    private setExpiry(key: K) {
        this.expiryMap.set(key, Date.now() + this.expireMillis);
    }

    constructor(milliseconds: number) {
        super();
        this.expireMillis = milliseconds;
    }

    put(key: K, value: V): void {
        this.setExpiry(key);
        return super.put(key, value);
    }

    get(key: K): V {
        const returnValue: V = super.get(key);
        if (typeof returnValue !== "undefined") {
            this.setExpiry(key);
        }
        return returnValue;
    }

    remove(key: K): boolean {
        this.expiryMap.delete(key);
        return super.remove(key);
    }

    clear(): void {
        this.expiryMap.clear();
        return super.clear();
    }

}
