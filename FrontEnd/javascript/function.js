var string1="taking-vaction-is-always-happy"
var string2="i-love-sea-and-star"

function isEven(num){
	if(num%2){
		return false;
	}
	else{
		return true;
	}
}

function isEvenShort(num){
	return num % 2 === 0;
}

function factorial(num){
	var multiply=1
	while(num > 1){
		multiply *= num;
		num--;
	}
	return multiply;
}

function kebabToSnake(s){
	return s.replace(/-/g,'_');
}

console.log("5 is even? " + isEven(5))
console.log("4 is even? " + isEven(4))
console.log("0.3 is even? " + isEven(0.3))
console.log("-10 is even? " + isEven(-10))

console.log("Factorial of 4 = " + factorial(4))
console.log("Factorial of 7 = " + factorial(7))
console.log("Factorial of 1 = " + factorial(1))
console.log("Factorial of 0 = " + factorial(0))

console.log("kebabToSnake of " + string1 + " is " + kebabToSnake(string1))
console.log("kebabToSnake of " + string2 + " is " + kebabToSnake(string2))
