<template>
    <section>
        <h2>第二个组件</h2>
        {{stroeMsg}}
        <ul class="todo-list">
            <li v-for="(item, index) in todoList" :key="index" class="todo-item" @click="del($event,index)">
            {{todoList[index]}}
            </li>
        </ul>

        <hr>
        <ul>
            <li v-for="(item,index) in doList" :key="index" @click="add($event,index)">
                {{doList[index]}}
            </li>
        </ul>
    </section>
</template>
<script>
import Bus from '../../common/js/bus'
import mapGetters from 'vuex'
export default {
     computed:{
        // ...mapGetters(['todoList'])
        
    },
    data(){
        return{
            stroeMsg:this.$store.state.name,
            todoList:['影视','情感','生活'],
            doList:[]
        }
    },
    mounted(){
        console.log(this.$store.state)
        Bus.$on('getTarget',(event)=>{
            console.log("111")
            console.log(event)
        })
    },
   
    methods:{
        // Bus.$emit()
        del(a,i){
            console.log(a,i)
            this.todoList.splice(i,1)
            this.doList.push(a.target.textContent)
            
            console.log(this.todoList)
            console.log(this.doList)

        },
        add(b,i){
            this.doList.splice(i,1)
            this.todoList.push(b.target.textContent)
        }
    }
}
</script>
<style>
li{
    border: 1px solid red;
    float: left;
    display: inline-block;
    width: 50px;
    height: 20px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
}
.todo-list{
overflow: hidden;
}
</style>