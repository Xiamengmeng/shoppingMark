<template>
  <section>
      <h1>{{message}}</h1>
      <h2>{{this.$store.state.age.li}}</h2>
      <h3>{{this.$store.state.name}}</h3>
      <button @click="btn()">点击</button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            message:[1,2,1,2,15,13,5,4,66,4,2,9,13]
        }
    },
    beforeUpdate(){
        // console.log(Array.from(new Set(message)));
        // console.log(message)
        
    },
    methods:{
        btn(){
            // console.log(Array.from(new Set(message)));
            this.$store.commit('changeName')
        },
        ...mapMutations(['changeName'])
        // console.log(this.message)                
        
    }













    // beforeCreate: function() {
    //   console.group('------beforeCreate创建前状态------');
    //   console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
    //   console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
    //   console.log("%c%s", "color:red","message: " + this.message) 
    // },
    // created: function() {
    //   console.group('------created创建完毕状态------');
    //   console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    //   console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
    //   console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    // },
    // beforeMount: function() {
    //   console.group('------beforeMount挂载前状态------');
    //   console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
    //   console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    // },
    // mounted: function() {
    //   console.group('------mounted 挂载结束状态------');
    //   console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
    //   console.log(this.$el);    
    //   console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    //   console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    // },
    // beforeUpdate: function () {
    //   console.group('beforeUpdate 更新前状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el);   
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message); 
    // },
    // updated: function () {
    //   console.group('updated 更新完成状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el); 
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message); 
    // },
    // beforeDestroy: function () {
    //   console.group('beforeDestroy 销毁前状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el);    
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message); 
    // },
    // destroyed: function () {
    //   console.group('destroyed 销毁完成状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el);  
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message)
    // }


    // 面试题总结
    // 1、输入网址之后点击回车键发生了什么
//     为4个步骤：
//     （1），当发送一个URL请求时，不管这个URL是Web页面的URL还是Web页面上每个资源的URL，浏览器都会开启一个线程来处理这个请求，同时在远程DNS服务器上启动一个DNS查询。这能使浏览器获得请求对应的IP地址。
//     （2）， 浏览器与远程Web服务器通过TCP三次握手协商来建立一个TCP/IP连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。
//     （3），一旦TCP/IP连接建立，浏览器会通过该连接向远程服务器发送HTTP的GET请求。远程服务器找到资源并使用HTTP响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。
//     （4），此时，Web服务器提供资源服务，客户端开始下载资源。
 
// 请求返回后，便进入了我们关注的前端模块
// 简单来说，浏览器会解析HTML生成DOM Tree，其次会根据CSS生成CSS Rule Tree，而javascript又可以根据DOM API操作DOM


    // 2、定位方式有哪些
    // 静态布局static、flex、relative、absolute
    // flex和absolute共同点：都是改变行内元素的呈现方式，让元素脱离普通流，默认会覆盖到非定位的元素之上
    // 不同：absolute的根元素可以设置，而flex根元素固定为浏览器窗口

    //    3、H5新特性
    //    标签语义化、画布canvas、地图、音频、视频、拖拽API、
    // 本地离线存储localStorage(长期存储，浏览器关闭数据不丢失)、sessionStorage(浏览器关闭数据消失)

    // 4、C3新特性
    // 圆角border-radius、阴影box-shadow、旋转transform、文字特效text-shadow、
    // 线性渐变gradient、rgba、栅格系统、多栏布局、媒体查询

    // 5、new操作符具体做了些什么
    //    1.创建了一个空对象，var obj=new Object（）；
        //2.让空对象的原型属性指向原型链。obj._proto_=Func.prototype
        // 3.让构造函数的this指向obj,并执行函数体var result=Func.call(obj)
        // 4.判断返回类型，如果是值就返回这个obj，如果是引用类型，返回这个引用对象。
            // if (typeof(result) == "object"){
            //   func=result;
            // }
            // else{
            //     func=obj;;
            // }
            }
</script>

<style>

</style>