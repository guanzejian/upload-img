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
    component: Index
  },
  {
    path:"/task",
    component: Task
  },
  {
    path:"/user",
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
