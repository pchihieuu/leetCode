/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    const MOD = 1e9 + 7;
    const n = locations.length;
    const dp = Array.from({ length: n }, () => Array(fuel + 1).fill(0));

    dp[start][fuel] = 1;

    for (let remainingFuel = fuel; remainingFuel >= 0; remainingFuel--) {
        for (let currCity = 0; currCity < n; currCity++) {
            if (dp[currCity][remainingFuel] === 0) {
                continue;
            }

            for (let nextCity = 0; nextCity < n; nextCity++) {
                if (currCity === nextCity) {
                    continue;
                }

                const fuelNeeded = Math.abs(locations[currCity] - locations[nextCity]);

                if (remainingFuel >= fuelNeeded) {
                    dp[nextCity][remainingFuel - fuelNeeded] = (dp[nextCity][remainingFuel - fuelNeeded] + dp[currCity][remainingFuel]) % MOD;
                }
            }
        }
    }

    let totalRoutes = 0;
    for (let remainingFuel = 0; remainingFuel <= fuel; remainingFuel++) {
        totalRoutes = (totalRoutes + dp[finish][remainingFuel]) % MOD;
    }

    return totalRoutes;
};
