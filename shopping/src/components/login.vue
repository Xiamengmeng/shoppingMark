<template>
  <div>
      <!-- <input type="text" class="input">
      <input type="text" class="input"> -->
      <div class="pad">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
            </el-input>
        </div>
        </el-col>
      </el-row>
      </div>
      <div class="pad">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
            </el-input>
        </div>
        </el-col>
      </el-row>
      </div>
      <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
              <el-button type="warning" round>登录</el-button>
              </div>
          </el-col>
          
      </el-row>

  </div>
</template>

<script>
export default {
     data() {
      return {
        input: ''
      }
    }
}
</script>

<style>
.pad{
    padding: 10px;
}
</style>