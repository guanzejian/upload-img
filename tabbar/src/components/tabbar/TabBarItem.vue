<template>
    <div class="tabbar-item" @click="itemclick" :style="activeStyle">
        <slot v-if="!isVisible" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type: String,
            default: "#31C3F7"
        }
    },
    data(){
        return {
            // isVisible: false
        }
    },
    computed: {
        isVisible(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? { color: this.activeColor } : ''
        }
    },
    methods: {
        itemclick(){
            
            this.$router.replace(this.path)
            
        }
    },

}
</script>

<style scoped>
.tabbar-item{
  flex:1;
  text-align: center;
  height: 49px;
}
.tabbar-item>img{
    margin-top: 3px;
    width: 20px;
    vertical-align: middle;
}
.active{
    color: #31C3F7
}
</style>