# 仿造携程官网

 @[vue2.3.3|webpack2.6.1|less]

>- 刚开始学前端的时候,有一天看到携程官网.就立志说要找一天能copy一份.然后就一直都没落实 - -
>- 麻麻我终于完成了!!
>- 感谢同事(佳望哥)提供的阿里云服务器 [携程传送门](http://112.74.190.180/)

###命令
>国际惯例

- **npm install (or cnpm 其他)** 装依赖包
- **npm run dev** 起服务 (页面为 localhost:8080/module/home.html 需要加上后缀)
- **npm run build** 打上线包

---

###目录结构
1. build/config: 一系列配置文件
2. src: 页面文件
3. (src)assets: 
- js公用的方法/配置方法
- less公用的样式和reset.css
- lib.js 引用的公共入口
4. (src)components: 复用的组件
5. (src)module: **相关的页面** 
- *.vue(具体页面)
- 文件夹中的html和js为页面的对应入口配置


---

###其他
- 将主页的每一个部分都拆分为单独的组件进行控制,进行引入/并且将重复的部分抽取出来
- 手写了debounce/throttle函数作为scroll事件的优化, 在公共方法中用Vue.prototype.*的方式进行集成.使实例可以 this.*进行调用
- 引用了vue-lazyload作为图片的懒加载组件
- 没有其他了.就是慢慢搭页面.谢谢大家