
import CacheConfiguration from "./CacheConfiguration";
interface Cache<K, V> {

    constructor(config: CacheConfiguration): void;

    put(key: K, value: V): void;

    get(key: K): V;

}

export default Cache;