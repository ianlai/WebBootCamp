var friends = ["aa", "bbb", 3, true, null]   //mixed type
var colors = []
var cities = new Array()

console.log(colors)

//add new item
colors[0] = "red"
colors[1] = "blue"
colors[2] = "green"
colors[3] = "yello"
colors[4] = "orange"
console.log(colors)

//add new item (at arbitary position)
colors[10] = "black"
console.log(colors)

console.log("----- pop & push -----")
//push new item
colors.push("white")
console.log(colors)

//pop item
console.log(colors.pop())

console.log("----- shift & unshift -----")
//add new item to the begin (unshift)
colors.unshift("yellow")
console.log(colors)

//get and delete item from the begin (shift)
colors.shift()
console.log("colors:" + colors)


//find or check contain it or not
console.log("----- indexOf -----")
//index=2
console.log(colors.indexOf("green"))
//index=-1 (or check contain it or not)
console.log(colors.indexOf("puple"))


//subarray 
console.log("----- slice -----")
console.log(colors)
favoriteColors = colors.slice(1,3)
console.log(colors)  //original array is not effected
console.log(favoriteColors)


//delete  
console.log("----- splice -----")
console.log(colors)
colors.splice(4,6)
console.log(colors)  //original array is effected


console.log("----- iterate -----")

//iterate: for
for(var i=0; i<colors.length; i++){
	console.log("[for] " + i + ": " + colors[i]);
}

//iterate: forEach
colors.forEach(function(color,index){
	console.log("[forEach] " + index + ": " + color);
});