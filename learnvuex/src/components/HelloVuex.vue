<template lang="">
    <div>
        <h2>{{ $store.state.counter }}</h2>
        <h3>getters:{{ $store.getters.seeCounter }}</h3>

        <p>
            mutation:
            <button @click="increment">添加个1</button>        
        </p>

        <hr style="margin: 20px 0;"/>

        <i ref="msg">{{ message }}</i>
        <button @click="testTick">Test nextTick</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data:"1",
            message:"我是测试 nextTick 之前"
        }
    },
    methods: {
        increment(){
            this.$store.commit("increment",this.data)
        },
        testTick(){
            this.message = "我来测试nextTick 之后"
            alert(this.$refs.msg.innerText)  // 我是测试 nextTick 之前
            // 这个alert 如果希望打印出改后的 值，使用nextTick
            this.$nextTick(() =>{
                alert(this.$refs.msg.innerText)  //我来测试nextTick 之后
            })
        }
    },

}
</script>

<style scoped>

</style>