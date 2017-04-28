import SeeCacheManagerPolicy from "./SeeCacheManagerPolicy";
import ISeeCache from "./ISeeCache";

class SeeCacheManager {


    private regions: Map<string, SeeCacheManager>


    constructor(cacheManagerPolicy: SeeCacheManagerPolicy) {

    }

    createCache<K, V>(name: String, cachePolicy: SeeCacheManager): ISeeCache<K,  V> {

    }



    createRegion
    getRegion
    clearRegion
    deleteRegion

    getName

}

export default SeeCacheManager;