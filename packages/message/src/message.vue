<template>
  <div class="message">
    <el-row class="message-test">
      <el-col :span="12" class="message-row"><p class="text">hello {{ message }}</p></el-col>
      <el-col :span="6">
        <img src="./timg.jpeg"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import './index.scss'
export default {
  name: 'v-message',    // 申明组件的 name属性
  props: {
    message: String
  }
}
</script>