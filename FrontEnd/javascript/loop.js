// 1. numbers between -10 and 19
// 2. even numbers between 10 and 40
// 3. odd numbers between 300 and 333
// 4. numbers divisible by 5 AND 3 between 5 and 50

console.log("============= While Loop =============");
console.log("<1>");
var c1 = -10
while( c1 <= 19){
	console.log(c1);
	c1++;
}


console.log("<2>");
var c2 = 10
while( c2 <= 40){
	if(c2%2 === 0){
		console.log(c2);
	}
	c2++;
}


console.log("<3>");
var c3 = 300
while( c3 <=333){
	if(c3%2 === 1){
		console.log(c3);
	}
	c3++;
}


console.log("<4>");
var c4 = 5
while( c4 <=50){
	if(c4%5===0 && c4%3===0){
		console.log(c4);
	}
	c4++;
}

console.log("============= For Loop =============");
console.log("<1>");
for(var c1=-10; c1 <= 19; c1++){
	console.log(c1);
}

console.log("<2>");
for(var c2=10 ; c2 <= 40 ; c2++){
	if(c2%2 === 0){
		console.log(c2);
	}
}


console.log("<3>");
for(var c3=300; c3 <=333 ; c3++){
	if(c3%2 === 1){
		console.log(c3);
	}
}


console.log("<4>");
for(var c4=5; c4 <=50; c4++){
	if(c4%5===0 && c4%3===0){
		console.log(c4);
	}
}




