import Vue from 'vue';
import axios from 'axios';

//-------------------请求拦截
//请求发起前
axios.interceptors.request.use(
	config => { //请求配置项

		console.log('请求前');
		// console.log(config);

		return config;

	},

	// 请求前请求后发生的error均会被请求catch捕获到
	err => Promise.reject(err)
	
);

//请求完成后
axios.interceptors.response.use(
	response => { //response值请求回内容
		console.log('请求后');
		// console.log(response);
		return response;
	},

	//可结合请求code码进行操作
	err => Promise.reject(err)

)
//http://www.jianshu.com/p/df464b26ae58
//将axios方法添加到vue实例的原型链中(this.$axios触发)
Vue.prototype.$axios = axios;

