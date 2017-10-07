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
	//获取滚动高度,兼容多个浏览器
	getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        	scrollPos = window.pageYOffset; 
        }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        {
        	scrollPos = document.documentElement.scrollTop; 
        }  
        else if (document.body) {
        	scrollPos = document.body.scrollTop; 
        }

        return scrollPos;   
	},

	//页面滚动方法
	page_scroll_to(cur, tar){
        var during = 10; //持续时间(ms)
        var times = 20;  //持续次数
        var i = 1;       //持续标识
        var s_flag;

        if(cur < tar){
            var s = (tar - cur) / times; //滚动距离
            s_flag = setInterval(() => {
            	//解决兼容性问题(原本使用documentElement即可)
                document.documentElement.scrollTop = cur + s * i;
                document.body.scrollTop = cur + s * i;
                i++;

                if(i>times){
                    clearInterval(s_flag);
                }
            }, during)
        }
        else{
            var s = (cur - tar) / times;
            s_flag = setInterval(() => {
            	//解决兼容性问题
                document.documentElement.scrollTop = cur - s * i;
                document.body.scrollTop = cur - s * i;
                i++;

                if(i>times){
                    clearInterval(s_flag);
                }
            }, during)
        }
    }

}

export default Rxport;