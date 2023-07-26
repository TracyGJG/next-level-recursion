function fibonacci(n, curr = 1, prev = 0) {
	return n ? fibonacci(n - 1, curr + prev, curr) : curr;
}

console.clear();
console.log('Fibonacci - recursive\n');
console.log(`0 = ${fibonacci(0)}`);
console.log(`1 = ${fibonacci(1)}`);
console.log(`2 = ${fibonacci(2)}`);
console.log(`3 = ${fibonacci(3)}`);
console.log(`4 = ${fibonacci(4)}`);
console.log(`5 = ${fibonacci(5)}`);
console.log(`6 = ${fibonacci(6)}`);
console.log(`7 = ${fibonacci(7)}`);
console.log(`8 = ${fibonacci(8)}`);
console.log(`9 = ${fibonacci(9)}`);
