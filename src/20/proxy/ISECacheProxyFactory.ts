import ISECache from "../cache/ISECache";
interface ISECacheProxyFactory {
    createProxy<K, V> (cache: ISECache<K, V>): ISECache<K, V>;
}

export default ISECacheProxyFactory;