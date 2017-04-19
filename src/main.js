import BasicCacheManager from "./cache/impl/BasicCacheManager";
import BasicCacheFactory from "./cache/impl/BasicCacheFactory";
var x = new BasicCacheManager();
var bla = x.createCache("myCache", new BasicCacheFactory());
var bl2 = x.createCache("myCache", new BasicCacheFactory());
//# sourceMappingURL=main.js.map