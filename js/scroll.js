var dy = 0;
var nowy = 0;
var finy = 0;
var lasty = 0;
function touchstart(event) {
	var e = event || window.event;
	lasty = e.touches[0].pageY;
}
function touchmove(event) {
	var e = event || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	var smallHeight = homepage.offsetHeight - window.innerHeight;
	nowy = e.touches[0].pageY;
	finy = dy + nowy - lasty;
	if (finy > window.innerHeight/3) {
		finy = window.innerHeight/3;
	} else if (finy < -window.innerHeight/3 -smallHeight ) {
		finy = -window.innerHeight/3 -smallHeight;
	}
	homepage.style.transform = "translateY(" + finy + "px)";
	homepage.style.transition = "all 0s linear";
}
function touchend(event) {
	var e = event || window.event;
	var smallHeight = homepage.offsetHeight - window.innerHeight;
	if (finy > 0) {
		homepage.style.transform = "translateY(" + 0 + "px)";
		homepage.style.transition = "all 1s ease-out";
		finy = 0;
	} else if (finy <= -smallHeight) {
		homepage.style.transform = "translateY(" + -smallHeight + "px)";
		homepage.style.transition = "all 1s ease-out";
		finy = -smallHeight;
	}
	dy = finy;
}
var activity = document.querySelector(".activity");
activity.addEventListener("touchstart",function(){
	activityExplain.style.display = "block";
	activityExplain.addEventListener("touchmove",function(event){
		var e = event || window.event;
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	},false);
},false);
var close = document.querySelector(".close");
close.addEventListener("touchstart",function(){
	activityExplain.style.display = "none";
},false);

var disY = 0;
var y = 0;
var scroller = document.querySelector(".scroller");
var scrollWrap = document.querySelector(".scrollWrap");
touch.on(scroller,"drag",function(e){
	var smallHeight = scroller.offsetHeight - scrollWrap.offsetHeight;
	y = disY + e.y;
	if (y > scrollWrap.offsetHeight/2) {
		y = scrollWrap.offsetHeight/2;
	} else if (y < -scrollWrap.offsetHeight/2 -smallHeight ) {
		y = -scrollWrap.offsetHeight/2 -smallHeight;
	}
	scroller.style.transform = "translateY(" + y + "px)";
	scroller.style.webkitTransform = "translateY("+ y +"px)";
	scroller.style.transition = "all 0s linear";
});
touch.on(scroller,"dragend",function(){
	var smallHeight = scroller.offsetHeight - scrollWrap.offsetHeight;
	if (y > 0) {
		scroller.style.transform = "translateY(" + 0 + "px)";
		scroller.style.transition = "all 0.5s ease-out";
		y = 0;
	} else if (y <= -smallHeight) {
		scroller.style.transform = "translateY(" + -smallHeight + "px)";
		scroller.style.transition = "all 0.5s ease-out";
		y = -smallHeight;
	}
	//注意这两个谁在前
	disY = y;
});
