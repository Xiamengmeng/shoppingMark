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
}
</script>

<style>

</style>