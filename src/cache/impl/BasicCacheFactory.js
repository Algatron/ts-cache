import MapCache from "./MapCache";
var BasicCacheFactory = (function () {
    function BasicCacheFactory() {
    }
    BasicCacheFactory.prototype.createCache = function (config) {
        return new MapCache(config);
    };
    return BasicCacheFactory;
}());
export default BasicCacheFactory;
//# sourceMappingURL=BasicCacheFactory.js.map