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
            // this.$ajax.post('/studentInfo/getStudentInfos')
            // .then(function(res){
            //     console.log(res.data)
            // })
            // .catch(function(res){
            //     console.log(res)
            // })


            this.axios.post('www.baidu.com',this.qs.stringify({'name':'xiaoming','sex':'nan'}),{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    })
                    .then(function(res){
                        console.log(res.data)
                            //控制台打印请求成功时返回的数据
                        //bind(this)可以不用
                    }.bind(this))
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                            //控制台打印错误返回的内容
                        }
                            //bind(this)可以不用
                    }.bind(this))
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