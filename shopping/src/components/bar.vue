<template>
<section>
    <h1>这是标题组件名叫{{name}}</h1>

    <button @click='btne'>子传父</button>

    <button @click="brother">兄弟之间传值</button>
</section>
    
</template>
<script>
import Bus from '../../common/js/bus'
// import mapGetters fron 'vuex'
export default {
    name:'bar',
    props:['name'],
    data(){
        return{
            // name:'第一页'
            
        }
    },

    methods:{
        btne(){
            console.log(this.$emit)
            this.$emit('btn','1112222')
        },
        brother(event){
            Bus.$emit('getTarget','33')
        }
        
    }
    
        
    
}
</script>
<style>

</style>