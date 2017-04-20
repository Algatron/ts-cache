
import { expect } from 'chai';
import MapCache from "./MapCache";
import Cache from "../Cache";

describe('MapCache', () => {

    it('should GET what is PUT something', () => {

        const cache: Cache<string, any> = new MapCache<string, any>();
        const testValue : Object = { dummy: "somevalue" };
        const testKey : string = "testKey";

        cache.put(testKey, testValue);
        const result = cache.get(testKey);

        expect(result).to.equal(testValue);
    });

});



