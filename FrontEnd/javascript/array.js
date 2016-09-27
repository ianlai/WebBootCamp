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

//push new item
colors.push("white")
console.log(colors)

//pop item
console.log(colors.pop())

//add new item to the begin (unshift)
colors.unshift("yellow")
console.log(colors)

//get item from the begin (shift)
colors.shift()
console.log(colors)

//find: index=2
console.log(colors.indexOf("green"))

//find: index=-1 (or check contain it or not)
console.log(colors.indexOf("puple"))

favoriteColors = colors.slice(1,3)
console.log(favoriteColors)