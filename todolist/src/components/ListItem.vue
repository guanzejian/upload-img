<template>
    <div class="login-tabs">
        <h2 ref="title">{{ detail }}</h2>
        <b ref="BStyle">{{ inpVal }}</b>
        <label>
            <input type="text" v-model="inpVal" />
            <button type="button" @click="add">增加</button>
            <button type="button" @click="jiaxing">toggle</button>
            
        </label>
        <ul>
            <li v-for="(item,i) in $store.getters.func" :key="item+i"
            @click="removeItem(i)"
            >{{ item }}</li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props:{
        detail:{
            type:String
        }
    },
    data(){
        return {
            inpVal:"",
            xing: true
        }
    },
    mounted() {
        this.$refs.BStyle.style.color = "#31C3F7"
    },
    methods: {
        add(){
            const inpval = this.inpVal
            this.$store.commit({
                type:"add",
                inpval
            })
        },
        jiaxing(xing){
            xing = this.xing
            this.$emit("addXing",xing)
            this.xing = !this.xing
        },
        removeItem(i){
            this.$store.commit("removeItem",i)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>