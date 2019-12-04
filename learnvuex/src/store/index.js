import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: "12312410",
    tips: "不要写带零的数字",
    baseData:""
  },
  getters:{
    seeCounter(state){
        if(state.counter.includes("0")){
          return state.counter.replace(/1/g,"★")
        }
    }
  },
  mutations: {
    increment(state,data){
      state.counter += data
    }
    ,
    getBaseData(state,data){
      console.log(data)
      state.baseData = data.result[0].text
    }
  },
  actions: {
    asyncSubmit(context,payload){
      // return new Promise((resolve,reject)=>{
      //   setTimeout(() =>{
      //     context.commit("getBaseData","我是数据")
      //     resolve("我好了")
      //   })
      // })
      console.log(payload)
      return new Promise((resolve,reject)=>{
        fetch("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
        .then(res =>{
          return res.json();
        })
        .then(res =>{
          context.commit("getBaseData",res)
          resolve("我好了")
        })
      })
    }
  },
  modules: {
  }
})

// https://api.apiopen.top/getJoke?page=1&count=2&type=video
