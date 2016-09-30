
//------------------- modify style -------------------
var p = document.querySelector("p");
p.classList.add("emphasize");

var p_all = document.querySelectorAll("p");
var p1 = p_all[0]
var p2 = p_all[1]
p2.classList.add("big");

//------------------- modify content -------------------
var li = document.querySelectorAll("ul li");
li[0].textContent = "Las Vegas" 


//------------------- modify content and meanwhile maintain the html tag -------------------

//li[1].textContent = "Osaka"   //Strong tag will disappear
//li[1].textContent = "<strong> Osaka </strong>"   //Not work either cus textContent treat the content to be text only

li[1].innerHTML = "<strong> Osaka </strong>"   //ok

var li_strong = document.querySelector("ul li strong");
li_strong.textContent = "Kyoto"  //ok


//------------------- modify attribute -------------------
var link = document.querySelector("#link");
link.setAttribute("href", "http://www.google.com");


//------------------- DOM event -------------------
for(var i=0; i<li.length; i++){
	li[i].addEventListener("click",function(){
		var border = this.style.border;
		if(border == ""){
			this.style.border="blue solid 1px";	
		}else{
			this.style.border="";	
		}
	});
}
