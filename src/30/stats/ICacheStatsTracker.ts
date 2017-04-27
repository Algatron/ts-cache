
interface ICacheStatsTracker {

    recordHit(): void;

    recordMiss(): void;

}

export default ICacheStatsTracker;
