<template>
<section>
<h1>{{msg}}</h1>
<bar :name='msg' @btn='btnShow'></bar>
{{showmessage}}
<input v-model="a">
<tip></tip>
</section>
    
</template>

<script>
import bar from './bar'
import tip from './tip'
export default {
    data(){
        return{
            msg:111,
            showmessage:'',
            a:''
        }
    },
    components:{
        bar,
        tip
    },
    mounted(){
        // console.log(btn)
    },
    methods:{
        btnShow(msg){
            console.log(msg)
            this.showmessage=msg
        }
    },
    watch:{
        a(n,o){
            console.log(n,o)
        }
    }

}
</script>

<style>

</style>