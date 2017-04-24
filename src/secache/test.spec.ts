import "mocha";
import SEMapCache from "./impl/SEMapCache";
import DefaultSECacheStatsTracker from "./impl/DefaultSECacheStatsTracker";
import { expect } from "chai";

describe('DefaultSECacheStats', () => {

    it('does stuff', () => {


        let x = new SEMapCache<string, number>();

        let st = new DefaultSECacheStatsTracker(x);

        let stats = st.getStats();

        x.put("hi", 1);

        let r: number = x.get("hi");


        expect(stats.getHitCount()).to.equal(1);
        expect(x.getSize()).to.equal(1);
        expect(stats.getRemoveCount()).to.equal(0);


    });


});

