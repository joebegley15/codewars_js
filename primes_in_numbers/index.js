const primeFactors = n => {
    const primeFactors = [];
    const primeFactorsCount = {};
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            primeFactors.push(i);
            n = n / i;
            i = 1;
        }
    }
    primeFactors.forEach(primeFactor => {
        primeFactorsCount[primeFactor] = primeFactorsCount[primeFactor] + 1 || 1;
    });
    return Object.keys(primeFactorsCount).map(x => Number(x)).sort((a, b) => a - b).reduce((val, factor) => {
        if (primeFactorsCount[factor] === 1) {
            return val + `(${factor})`
        }
        return val + `(${factor}**${primeFactorsCount[factor]})`;
    }, "")
}

console.log(primeFactors(7775460))