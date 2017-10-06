import Vue from 'vue';

function debounce(fn, delay, context) {
	/*
		debounce函数(检测方法要超过delay的时间,才执行)

		param:
		fn           执行函数
		delay        安全时间(ms)
		context      作用域
	*/
	var timeoutID = null;

	return function(){
		clearTimeout(timeoutID);

		timeoutID = setTimeout(function() {
			fn.apply(context);
		}, delay);
	};
}
Vue.prototype.debounce = debounce;

function throttle(fn, delay, context) {
	/*
		throttle函数(每delay时间,触发一次fn函数)

		param:
		fn           执行函数
		delay        持续时间(ms)
		context      作用域
	*/

	var last;
	//定时器
	var timer;

	return function(){
		//获取当前的毫秒数
		var now = +new Date();

		//判断时间
		if(last && now < last + delay){
			clearTimeout(timer);

			timer = setTimeout(function() {
				last = now;
				fn.apply(context);
			}, delay)
		}
		else{
			last = now;
			fn.apply(context);
		}
	}
}
Vue.prototype.throttle = throttle;




//公用方法
var Rxport = {

	common_alert(){
		alert(1);
	},

}

export default Rxport;