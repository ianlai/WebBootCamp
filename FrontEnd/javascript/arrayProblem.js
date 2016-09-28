//printReverse()
//isUniform()
//sumArray()
//max()

var numbers=[10,20,30,40,50,1,2,3,4,5];

function printReverse(numbers){
	console.log(numbers.reverse());
}

function reverse(numbers){
	var reverseArr=[];
	var size=numbers.length;
	numbers.forEach(function(n,i){
		reverseArr[size-1-i] = n;
		//console.log(reverseArr);
	})
	return reverseArr;
}

// [IMPORTANT NOTE]
// This does not work if using forEach 
// because the return only effects to the anonymous function

// function isUniform(numbers){
// 	var element = numbers[0];
// 	numbers.forEach(function(n){
// 		if(element !== n){
// 			return false;
// 		}
// 	});
// 	return true;
// }

function isUniform(numbers){
	var element = numbers[0];
	for(var i=1; i<numbers.length; i++){
		if(element !== numbers[i]){
			return false;
		}
	}
	return true;
}

function sumArray(numbers){
	var sum = 0;
	numbers.forEach(function(n){
		sum += n;
	});
	return sum;
}

function max(numbers){
	var maxValue=numbers[0];
	numbers.forEach(function(n){
		if(n > maxValue){
			maxValue = n;
		}
	})
	return maxValue;
}

console.log("original array: " + numbers);

printReverse(numbers);
console.log("reverse array: " + reverse(numbers));
console.log(isUniform(numbers));
console.log(isUniform([5,5,5]));
console.log(sumArray(numbers));
console.log(max(numbers));
