<template>
    <h2>第二个组件</h2>
</template>
<script>
import Bus from '../../common/js/bus'

export default {
    data(){
        return{

        }
    },
    mounted(){
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