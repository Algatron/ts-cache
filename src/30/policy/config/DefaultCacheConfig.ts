
class DefaultCacheConfig {

    private _expireAfterAccess: number = 0;

    private _expireAfterWrite: number = 0;

    constructor(expireAfterAccessMillis: number, expireAfterWriteMillis: number) {
        this._expireAfterAccess = expireAfterAccessMillis;
        this._expireAfterWrite = expireAfterWriteMillis;
    }

    get expireAfterAccess(): number {
        return this._expireAfterAccess;
    }

    get expireAfterWrite(): number {
        return this._expireAfterWrite;
    }

}

export default DefaultCacheConfig;