/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        const count = n
        n = n+1
        return count
    };
};

 
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
