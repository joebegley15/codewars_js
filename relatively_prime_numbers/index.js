const factors = n => {
    const factorsArr = [];
    if (n > 1) {
        factorsArr.push(n);
    }
    for (let i = 2; i < Math.sqrt(n); i++){
        if (n % i === 0) {
            factorsArr.push(i, n / i);
        }
    }
    return factorsArr;
}

function relativelyPrime(n,l){
    const relativePrimeNumbers = [];
    const nFactors = factors(n);
    l.forEach(el => {
        const elFactors = factors(el);
        let foundCommonFactor = false;
        for (let i = 0; i < elFactors.length; i++) {
            if (nFactors.includes(elFactors[i])) {
                foundCommonFactor = true;
                break;
            }
        }
        if (!foundCommonFactor) {
            relativePrimeNumbers.push(el);
        }
    });
    return relativePrimeNumbers;
}

console.log(relativelyPrime(1, [73, 21, 1, 1]));