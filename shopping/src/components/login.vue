<template>
  <div>
      <!-- <input type="text" class="input">
      <input type="text" class="input"> -->
      <!-- <div class="pad">
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
            name="password"
            clearable>
            </el-input>
        </div>
        </el-col>
      </el-row>
      </div> -->



      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input type="text" v-model="ruleForm.txt"></el-input>
        </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
     
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

      <!-- <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
              <el-button type="warning" round>登录</el-button>
              </div>
          </el-col>
          
      </el-row> -->

  </div>
</template>

<script>
export default {


     data() {
      return {
        ruleForm:{
          pass:'',
          txt:''
        }
      }
    },
     methods: {
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      }
    }
}
</script>

<style>
.pad{
    padding: 10px;
}
</style>