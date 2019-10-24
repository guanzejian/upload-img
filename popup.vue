<template>
    <div class="popup" :class="{popupActive: popupActive}" >
       <slot></slot> 
    </div>
</template>

<script>
export default {
    name:"popup",
    data() {
        return {
            popupActive: false,
        }
    },    
}
</script>

<style lang="scss" scoped>
.popup{
    width: 100%;
    height: 40px;
    position: absolute;
    left: 0;
    top: -40px;
    line-height: 40px;
    color: #fff;
    background-color: #EF4F4F;
    transition: all 0.5s ease;
    opacity: 0;
}
.popupActive{
    top: 0;
    opacity: 1
}
</style>