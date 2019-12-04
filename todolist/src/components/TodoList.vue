<template>
    <div class="login">
        <ListItem :detail="detail" @addXing="addXing"/>
    </div>
</template>
<script>
/* eslint-disable */
import ListItem from "./ListItem"
export default {
    data() {
        return {
            detail: "I'M TODOLIST"
        }
    },
    components:{
        ListItem
    },
    methods: {
        addXing(xing){
            console.log(xing)
            if(xing){
                this.detail = this.detail.toLowerCase()
            }else{
                this.detail = this.detail.toUpperCase()
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>