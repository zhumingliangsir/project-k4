//1.判断是否是火狐浏览器
//2.根据浏览器分开写添加事件
//3.返回值 down true为向下 false为向上
//4.func.apply(对象,数组)
		//apply()是每个函数都具有的系统分配的默认的	
		//接受两个参数,第一个参数为对象,将原函数的调用者改为传递的对象
		//说白了就是改变了函数自身的this值
		//第二个值,所有的参数作为数组进行传参
function mouseWheel(obj,func) {
	//判断是否是火狐，如果不是 ff == -1
	var ff = navigator.userAgent.indexOf("Firefox");
	
	if (ff == -1) {
		//不是火狐
		obj.onmousewheel = wheel;
	} else {
		//是火狐
		obj.addEventListener("DOMMouseScroll",wheel,false);
	}
	
	function wheel(event) {
		var e = event || window.event;
		//向下是 true 向上是false
		var down = true;
		
		if (e.detail) {
			//火狐
			down = e.detail > 0;	
		} else {
			//不是火狐
			down = e.wheelDelta < 0;
		}
		
		func.apply(obj,[e,down]);
		
		//阻止滚轮的默认事件 
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		
	}
}



