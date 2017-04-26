import ISECache from "../ISECache";
interface ISECachePolicy {

    apply<K, V>(cache: ISECache<K, V>): ISECache<K, V>

}

export default ISECachePolicy;