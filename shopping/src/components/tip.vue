<template>
    <section>
        <h2>第二个组件</h2>
        {{stroeMsg}}
        <!-- <ul class="todo-list">
            <li v-for="(item, index) in todoList" :key="index" class="todo-item" >
            ...
            </li>
        </ul> -->
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
            stroeMsg:this.$store.state.name
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
    }
}
</script>
<style>

</style>