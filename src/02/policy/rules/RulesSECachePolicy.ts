import ISECache from "../../ISECache";
import ISECachePolicy from "../ISECachePolicy";
import AbstractSECachePolicyRule from "./AbstractSECachePolicyRule";
class RulesSECachePolicy implements ISECachePolicy {

    private rules = [];

    constructor() {
    }

    addRule(rule: AbstractSECachePolicyRule<any, any>): void {
        this.rules.push(rule);
    }



    apply<K, V>(cache: ISECache<K, V>): ISECache<K, V> {
        if (this.rules.length === 0) {
            throw new Error("RulesSECachePolicy.apply() - no rules to apply");
        }

        let top: ISECache<K, V>;
        for (let rule of this.rules) {
            top = new
        }
    }
}

export default RulesSECachePolicy;