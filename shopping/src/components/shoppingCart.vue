<template>
  <section>
      <ul>
          <li v-for="(item,index) in priceList" :key="index">
              {{item.price}}
              <el-input-number v-model="item.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              {{total}}
            </li>
      </ul>
      
  </section>
</template>

<script>
export default {
    data(){
        return{
            priceList:[
                {price:16,num:1},
                {price:20,num:1},
                {price:25,num:1}],
            total:0,
            // num:1
        }
    },
    // computed(){
    // },
    methods:{
        handleChange(e,value) {
            console.log(e,value);
            // this.total=this.price*value
        }
    }

}
</script>

<style>
li{
    list-style: none;
}
</style>