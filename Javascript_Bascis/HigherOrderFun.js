function createMultiplier(x) { return function (y) { return x * y; }; }
const doubler = createMultiplier(2);
console.log(doubler(5));


