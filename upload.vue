<template>
<div>
    <input type="file" class="file-input"
     ref="uploadfile" accept="image/png,image/jpeg" 
     @change="chooseFileInput"
     :class="uploadcode"
     />
</div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    props:{
        uploadcode:String
    },
    data(){
    	return {
            tempFilePaths:"",
    	}
    },
    methods: {
        chooseFileInput(){
            if(this.$refs.uploadfile.files.length > 0){
                var imgFile = this.$refs.uploadfile.files[0];
                    
                if(imgFile.size > 2097152){
                    Toast('小于2M的图片才可以哦！');
                    return false
                }else{
                    var fr = new FileReader();
                    fr.onload = () => {
                        const _base64 = fr.result
                        sessionStorage.setItem(`headimg${this.uploadcode}`,_base64)
                        this.tempFilePaths = _base64 //将_base64赋值给图片的src，实现图片预览
                        this.$emit("getFile",this.tempFilePaths,imgFile)  //把 得到的值传给父级
                    }
                    fr.readAsDataURL(imgFile);
                }

                if( this.uploadcode === 'id1'){
                    console.log("上传 到 服务器")
                }
            }else{
                Toast('请选择图片')
            }
        },
        
    },
}
</script>

<style lang="scss" scoped>
.file-input{display:none}
</style>