var cities = ["London", "New York", "Tokyo"];

//1. forEach + primitive function
cities.forEach(alert);

//2. forEach + anonymous function
cities.forEach(function(c){
	console.log("forEach: " + c);
})

Array.prototype.myForEach = function(func){
	for(var i=0 ; i<this.length ; i++){
		func(this[i]);
	}
}

//3. myForEach + primitive function
cities.myForEach(console.log);

//4. myForEach + anonymous function
cities.myForEach(function(c){
	console.log("** myForEach: " + c);
});