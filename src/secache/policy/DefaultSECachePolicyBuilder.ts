//
//
// import DefaultSECachePolicy from "./DefaultSECachePolicy";
// import ISECache from "../ISECache";
// import SEMapCache from "../impl/SEMapCache";
// class DefaultSECachePolicyBuilder implements Builder<DefaultSECachePolicy> {
//
//
//     private expiresAfterAccess = 0;
//     private expiresAfterWrite = 0;
//
//
//
//
//
//
//
//
//     build(): DefaultSECachePolicy {
//         return {
//             apply<K, V>(cache: ISECache<K, V>): ISECache<K, V> {
//                 return new SEMapCache<any, any>();
//             }
//         };
//     }
// }
