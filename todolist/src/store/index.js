import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    list:[
      "我爱一条船",
      "我爱一条柴",
      "十香软经散",
    ]
  },
  mutations: {
    add(state,payload){
      console.log(payload)
      state.list.push(payload.inpval)
    },
    removeItem(state,i){
      state.list.splice(i,1)
    }
  },
  getters:{
    func(state){
      return state.list.map(item =>{
        return item+"❌"
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
