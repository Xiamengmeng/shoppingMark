
<template>
    <section class="section">
        <h1>wwwww</h1>
        <a href="tel:18501750726" id="phone1" @click="s">
            <div class="tel">
                电话
            </div>
        </a>
    </section>
</template>
<script>
export default{
   data(){
       return{}
   },
   methods:{
       s(){
           console.log("aa")
       }
   }
   
}
</script>
<style scoped>
.section{
    /* position: relative; */
}
.tel{
    width: 100px;
    height: 100px;
    position: fixed;
    float: right;
    /* right: 20px;
    bottom: 20px; */
    background-color: mediumturquoise;
    top: 20px;
    left: 20px;
}
</style>