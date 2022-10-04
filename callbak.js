function sum(a, b) {
    return a + b;
}

function partial(fn) {
    function f(v) {
         stack.push(v);
         if (stack.length === fn.length) {
             stack = [fn(...stack)];
         }
         return f;
    }
    f.toString = function () { return stack[0]; };
    
    var stack = [];
    return f;
}

console.log(partial(sum)(3)(4)(5));