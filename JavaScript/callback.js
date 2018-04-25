
/* Call Back Practice */ 

/* Higher order function 
   (this one to combine the parameter and function) */
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

/* Call back function 
   (ususally define when calling the high order function with anonymous function) */ 
function upperCaseName(a) {
  return a.toUpperCase();
}

/* Call the higher order function with call back function parameter */
greet("Tim", upperCaseName);   //"Hello, TIM"

//------------------------------------------------

/* CBF: Callback function signature (argument) */
// ==>  callback(curElement, curIndex, array) 

/* HOF implementation */
function myForEach(array, callback){
	for(var i=0; i<array.length; i++){
		callback(array[i], i, array);   //CBF signature
	}
}

/* Use HOF with CBF signature 
   We can use the CBF we want but it needs to follow the signature */
myForEach(["The", "weather", "today", "is", "good"], function(e, i, arr){
	console.log("[" + i + "]" + " length: " + e.length);
});

//------------------------------------------------

/* HOF: find first index */
function myFindFirstIndex(array, callback){
	for(var i=0; i<array.length; i++){
		if(callback(array[i], i, array)) return i;
	}
	return -1;
}
/* Use HOF with finding an odd */
myFindFirstIndex([7,5,9,1,6,7,8], function(e, i, arr){
	if(e%2==0) return true;
	else false;
})