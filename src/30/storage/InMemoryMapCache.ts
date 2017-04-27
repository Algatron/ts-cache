import AbstractMapCache from "./AbstractMapCache";

class InMemoryMapCache<K, V> extends AbstractMapCache<K, V> {

    private _store = new Map<K, V>();

    protected get store(): Map<K, V> {
        return this._store;
    }
}

export default InMemoryMapCache;

