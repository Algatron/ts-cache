var MapCache = (function () {
    function MapCache(configuration) {
        this.data = new Map();
    }
    MapCache.prototype.put = function (key, value) {
        this.data.set(key, value);
    };
    MapCache.prototype.get = function (key) {
        return this.data.get(key);
    };
    return MapCache;
}());
export default MapCache;
//# sourceMappingURL=MapCache.js.map