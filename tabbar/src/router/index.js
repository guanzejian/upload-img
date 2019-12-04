import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('../views/index/Index') ;
const Task = () => import('../views/task/Task') ;
const User = () =>import('../views/user/User') ;

// import Index from "../views/index/Index"
// import Task from "../views/task/Task"
// import User from "../views/user/User"

const routes = [
  {
    path:"",
    redirect:"/index"
  },
  {
    path:"/index",
    component: Index,
    meta:{
      title:"首页"
    }
  },
  {
    path:"/task",
    component: Task,
    meta:{
      title: "任务单"
    }
  },
  {
    path:"/user",
    component: User,
    meta:{
      title: "个人中心"
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from ,next)=>{
  document.title = to.meta.title
  next()  
})

export default router
