function factorial(n) {
	let fac = 1;
	for (; n; n--) {
		fac *= n;
	}
	return fac;
}

console.clear();
console.log('Factorial - iterative\n');
console.log(`0! = ${factorial(0)}`);
console.log(`1! = ${factorial(1)}`);
console.log(`2! = ${factorial(2)}`);
console.log(`3! = ${factorial(3)}`);
console.log(`5! = ${factorial(5)}`);
console.log(`7! = ${factorial(7)}`);
