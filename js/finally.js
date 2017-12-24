var goodVideo = document.querySelector(".goodVideo");
var list = document.querySelector(".list");
var allWrongDiv = document.querySelector(".allWrongDiv");

goodVideo.addEventListener("touchstart",jump,false);
list.addEventListener("touchstart",wrong,false);

var timer = null;
function jump() {
	var smallHeight = homepage.offsetHeight - window.innerHeight;
	homepage.style.transform = "translateY(" + -smallHeight + "px)";
}
function wrong() {
	var wrongDiv = document.createElement("div");
	allWrongDiv.appendChild(wrongDiv);
	wrongDiv.className = "wrongDiv";
	wrongDiv.innerHTML = "网络异常,请稍后重试";
	timer = setTimeout(function(){
		wrongDiv.remove();
	},3000);
}
//试试运气
var tryz = document.querySelector(".try");
var tryForm = document.querySelector(".tryForm");
tryz.addEventListener("touchstart",function(){
	tryForm.style.display = "block";
	tryForm.addEventListener("touchmove",function(event){
		var e = event || window.event;
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	},false);
},false);
var closeTry = document.querySelector(".closeTry");
closeTry.addEventListener("touchstart",function(){
	tryForm.style.display = "none";
},false);
