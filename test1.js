console.log("Hello world")

let korv = 3;

console.log(korv)
//Test2
console.log("test2")

function factorial(n) {
if (n == 0) {
return 1;
} else {
return factorial(n - 1) * n;
}
}

let result = factorial(4)
result
console.log(factorial(8))
// 3 -> factorial(2) * 3 -> factorial(1) * 2 * 3 -> factorial(0) * 1 * 2 * 3