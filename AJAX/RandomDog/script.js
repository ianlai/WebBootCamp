var XHR = new XMLHttpRequest();
var btn1 = document.querySelector("#btn1");
var img1 = document.querySelector("#photo1");
var btn2 = document.querySelector("#btn2");
var img2 = document.querySelector("#photo2");
var urlAll = "https://dog.ceo/api/breeds/image/random";
var urlHusky = "https://dog.ceo/api/breed/husky/images/random";
btn1.addEventListener("click",function(){
  XHR.onreadystatechange = function(){
    if(XHR.readyState==4 && XHR.status==200){
      var url = JSON.parse(XHR.responseText).message;
      img1.src = url;
      console.log(url);
    }
  }
  XHR.open("GET", urlAll);
  XHR.send();
});

btn2.addEventListener("click", function(){
  fetch(urlHusky)
  .then(function(response){
    console.log(response);
    return response.json()
  })
  .then(function(data){
    console.log(data.message);
    var url =data.message;
    img2.src = url;
  });
});
