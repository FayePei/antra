1. Explain what is prototype and what is prototype chain in your own words
A prototype in JavaScript is an object from which other objects inherit properties and methods. 
Every JavaScript object has a prototype, which acts as a blueprint for creating new objects. 
This prototype itself can have its own prototype, forming a chain. 

The prototype chain is the mechanism by which inheritance is implemented in JavaScript.
 When you try to access a property or method on an object, JavaScript first looks for it on 
 the object itself. If it doesn't find it there, it looks for it on the object's prototype. 
 If it's not found there, it continues up the chain, looking at the prototype's prototype, 
 and so on, until it either finds the property/method or reaches the end of the chain 
 (typically Object.prototype, which is the base prototype from which all objects inherit).

2. Implement your versions of the following Array methods (choose 6).
Array.prototype.myMap = function(callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }
    return res;
};
  
Array.prototype.myFilter = function(callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
};

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

Array.prototype.myIncludes = function(target, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(this.length + fromIndex, 0);
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === target) {
            return true;
        }
    }
    return false;
};

const assert = require('assert');

try {
    // Test myMap
    let arr = [1, 2, 3];
    let result = arr.myMap(x => x * 2);
    assert.deepStrictEqual(result, [2, 4, 6], 'myMap failed');

    // Test myFilter
    arr = [1, 2, 3, 4];
    result = arr.myFilter(x => x % 2 === 0);
    assert.deepStrictEqual(result, [2, 4], 'myFilter failed');

    // Test myReduce
    arr = [1, 2, 3, 4];
    result = arr.myReduce((acc, x) => acc + x, 0);
    assert.strictEqual(result, 10, 'myReduce with initial value failed');

    result = arr.myReduce((acc, x) => acc + x);
    assert.strictEqual(result, 10, 'myReduce without initial value failed');

    // Test myEvery
    arr = [2, 4, 6];
    result = arr.myEvery(x => x % 2 === 0);
    assert.strictEqual(result, true, 'myEvery failed when all elements match');

    arr = [2, 3, 6];
    result = arr.myEvery(x => x % 2 === 0);
    assert.strictEqual(result, false, 'myEvery failed when not all elements match');

    // Test myFind
    arr = [1, 2, 3, 4];
    result = arr.myFind(x => x > 2);
    assert.strictEqual(result, 3, 'myFind failed to find matching element');

    result = arr.myFind(x => x > 4);
    assert.strictEqual(result, undefined, 'myFind failed when no element matches');

    // Test myIncludes
    arr = [1, 2, 3];
    result = arr.myIncludes(2);
    assert.strictEqual(result, true, 'myIncludes failed to find existing element');

    result = arr.myIncludes(4);
    assert.strictEqual(result, false, 'myIncludes failed to return false for non-existing element');

    console.log('All tests passed!');
} catch (error) {
    console.error('A test failed:', error.message);
}