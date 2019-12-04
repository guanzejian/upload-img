<template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <hr style="margin: 20px 0;"/>
        <div class="content">
            <div class="flex-1">
                <HelloVuex></HelloVuex>
            </div>
            <div class="flex-1 border-left">
                <b>{{ date }}</b>
				<h2>异步操作vuex-actions</h2>
                <p>请求的数据：{{ $store.state.baseData }}--{{ time }}</p>
				
                <button @click="asyncSubmit">申请</button>  
            </div>
        </div>
    </div>
</template>

<script>
import HelloVuex from "../components/HelloVuex"
export default {
    data() {
        return {
            counter: 0,
			date: ''
        }
    },
	created(){
		setInterval(() =>{
			this.date = (new Date()).toLocaleString()
		},1000)
	},
    computed: {
        time(){
			return (new Date()).toLocaleTimeString()
		}
    },
    methods: {
        asyncSubmit(){
            this.$store.dispatch("asyncSubmit",'我是参数')
            .then(res => console.log(res))
        }
    },
    components:{
        HelloVuex
    },
    watch: {
     
    },
}
</script>

<style scoped>
    .content{
        display:flex;
    }
    .flex-1{
        flex: 1
    }
    .border-left{
        border-left: 1px dashed #31C3F7;
    }
</style>