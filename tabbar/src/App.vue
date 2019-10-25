<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/index" activeColor="pink">
        <img slot="item-icon" src="./assets/img/images/infomation.png" alt="">
        <img slot="item-icon-active" src="./assets/img/images/infomationed.png" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/task">
        <img slot="item-icon" src="./assets/img/images/task.png" alt="">
        <img slot="item-icon-active" src="./assets/img/images/tasked.png" alt="">
        <div slot="item-text">任务单</div>
      </TabBarItem>
      <TabBarItem path="/user">
        <img slot="item-icon" src="./assets/img/images/user_info.png" alt="">
        <img slot="item-icon-active" src="./assets/img/images/user_infoed.png" alt="">
        <div slot="item-text">个人中心</div>
      </TabBarItem>

    </TabBar>
  </div>
</template>
<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from "./components/tabbar/TabBarItem"
export default {
   data() {
     return {

     }
   },
   components:{
     TabBar,
     TabBarItem
   }
}
</script>
<style>
@import './assets/css/base.css';
@import './assets/iconfont/iconfont.css'
</style>
