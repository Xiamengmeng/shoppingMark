<template>
<section>
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <el-carousel :interval="5000" arrow="always" height="1099px">
                    <el-carousel-item v-for="(item,index) in imageList" :key="index">
                        <img :src="item.url">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <a href="#">
                <div class="lly">
                    查看更多
                </div>
            </a>
            
            </el-col>
    </el-row>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
                <div  v-for="(item,index) in imageList" :key="index">
                    <img :src="item.url" class="littlePic">
                </div>
                
            </el-tab-pane>
            <el-tab-pane label="两厢" name="second">
                <div  v-for="(item,index) in oneList" :key="index">
                    <img :src="item.url" class="littlePic">
                </div>
            </el-tab-pane>
            <el-tab-pane label="三厢" name="third">
                <div  v-for="(item,index) in twoList" :key="index">
                    <img :src="item.url" class="littlePic">
                </div>
            </el-tab-pane>
            <el-tab-pane label="SUV" name="fourth">
                <div  v-for="(item,index) in imageList" :key="index">
                    <img :src="item.url" class="littlePic">
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <div class="block">
            <span class="demonstration">国家/省份/城市/地区</span>
            <el-cascader
                :options="options"
                v-model="selectedOptions"
                @change="handleChange"
                :separator="' '"
            >
            </el-cascader>
    </div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
    <div class="flfix" @click="revers">
        <img src="https://www.svw-volkswagen.com/_nuxt/img/87ce798.png" alt="">
    </div>

</section>
</template>
<script>
import options from '../../common/js/country-data'
export default {
    data(){
        return{
            imageList:[
                {url:require('./imge/01.jpg')},
                {url:require('./imge/02.jpg')},
                {url:require('./imge/03.jpg')},
                {url:require('./imge/04.jpg')},
                ],
            activeName: 'first',
            oneList:[
                {url:require('./imge/01.jpg')},
                {url:require('./imge/02.jpg')}
            ],
            twoList:[
                {url:require('./imge/03.jpg')},
                {url:require('./imge/04.jpg')},
            ],
            allList:[],
            selectedOptions: [],//存放默认值
            options:options   //存放城市数据
        }
    },
    mounted(){
        this.allList=this.oneList.concat(this.twoList)
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },
         handleChange(value) {
        console.log(value);
      },
      revers(){
          
      }
    }
}
</script>
<style scoped>
.el-carousel__container{
    height: 1000px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    /* line-height: 300px; */
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    
     /* background-image: url(https://www.svw-volkswagen.com/_nuxt/img/89c6f6d.jpg); */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lly{
      position: absolute;
      border: 5px solid white;
      border-radius: 10px;
      height: 40px;
      line-height: 40px;
      width: 200px;
      z-index: 999;
      left: 100px;
      bottom: 500px;
      text-align: center;
      color: white;
      
  }
  .littlePic{
      width: 200px;
      height: 200px;
      float: left;
      margin: 20px;
  }
  .amap-wrapper {
  width: 800px;
  height: 500px;
}
.flfix{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: fixed;
    right: 100px;
    bottom: 100px;
    background-color: #1EB1ED;
    z-index: 9999;
}
.flfix img{
    margin: 15px;
}
</style>
<style>  
.el-tabs__item:hover{
    color: #001e50;
}
.el-tabs__item.is-active {
    color: #001e50;
    border-bottom: 2px solid #000;
}
.el-tabs__item .is-top.is-active{
    border-bottom: 2px solid #000;
}
</style>