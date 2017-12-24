var footervideo = document.querySelector(".footerVideo");
var v = document.querySelector(".footerVideo video");
var videoPoster = document.querySelector(".videoPoster");
var navVideo = document.querySelector(".navVideo");
var navShow = document.querySelector(".navShow");
var footerScroll = document.querySelector(".swiper-container");
var isStop = false;

footervideo.addEventListener("touchstart", function() {
	videoPoster.style.display = "none";
	v.play();
}, false);

navVideo.addEventListener("touchstart", function() {
	navShow.style.backgroundImage = "url(./" + allPic[40] + ")";
	navVideo.style.backgroundImage = "url(./" + allPic[45] + ")";
	footervideo.style.display = "block";
	if(isStop) {
		v.load();
		isStop = false;
	}
	footerScroll.style.display = "none";
}, false);

navShow.addEventListener("touchstart", function() {
	navShow.style.backgroundImage = "url(./" + allPic[41] + ")";
	navVideo.style.backgroundImage = "url(./" + allPic[44] + ")";
	footervideo.style.display = "none";
	isStop = true;
	footerScroll.style.display = "block";
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 2000,
		autoplayDisableOnInteraction: false
	});
}, false);

function show() {
	videoPoster.style.display = "block";
}