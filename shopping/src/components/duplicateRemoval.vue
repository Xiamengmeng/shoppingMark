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