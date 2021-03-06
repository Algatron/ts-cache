
import CacheConfiguration from "./CacheConfiguration";
interface Cache<K, V> {

    put(key: K, value: V): void;

    get(key: K): V;

}

export default Cache;