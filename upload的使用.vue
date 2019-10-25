<template>
    <div>
        <Process :process="processUrl"></Process>
        <p class="shot-tip">拍摄/上传头像照片（要求人像清晰）</p>
        <div class="chooseFile" @click="chooseFile">
            <!-- <input type="file" id="file-input" class="file-input" ref="uploadfile" accept="image/*" @change="chooseFileInput"/> -->
            <Upload ref="getFile" @getFile="getFile" :uploadcode="code"></Upload>
            <div class="camera">
                <div class="camera-box">
                    <span class="iconfont icon-shangchuanzhaopian"></span>
                </div>
            </div>
            <p class="shot-tip">点击拍摄或上传头像照片</p>
            <div class="flex-box flex-c img-box">
                <img :src="tempFilePaths" v-preview="tempFilePaths" style="width: 50%;max-height:30vh;margin:10px auto;"/>
            </div>
        </div>
        <div class="flex-box flex-a btns">
            <mt-button type="primary" @click.native="prev" plain>上一步</mt-button>
            <mt-button type="primary" @click.native="next" plain>下一步</mt-button>
        </div>
    </div>
</template>

<script>
import Process from '../components/process'
import Upload from '../components/upload'
export default {
    data() {
        return {
            processUrl:require("../assets/images/live03.png"),
            tempFilePaths:'',
            files:"",
            code:"head"
        }
    },
    mounted() {
        this.tempFilePaths = sessionStorage.getItem(`headimg${this.code}`)
    },
    methods: {
        chooseFile(){
            document.querySelector("."+this.code).click();
        },
        getFile(data,files){
            this.tempFilePaths = data;
            this.files = files
        },
        prev(){
            this.$router.go(-1)
        },
        next(){
            //上传
            let _this=this;
            let x = this.files;
            let params = new FormData() ; //创建一个form对象
            params["file"] = x; 
            
            // this.$router.push('/loadid')

            return false
         //添加请求头  通过form添加的图片和文件的格式必须是multipart/form-data
            // let config = {headers:{'Content-Type':'multipart/form-data'}};
            // //发起ajax请求存放在服务端
            // this.$axios.post('url',params,config)
            //     .then(function(res){
                        
            //         }).catch(function (error) {
            //             console.log(error);
                        
            //         })

        }
    },
    components:{
        Process,
        Upload
    }
}
</script>

<style lang="scss" scoped>
.shot-tip{
    color: $main-c;
}
.chooseFile{
    width: 100%;
    min-height: 300px;
    padding: 0.5rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    // .file-input{visibility: hidden}
}
.camera{
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .camera-box{
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        background-color: $bgcolor;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        >span{
        font-size: 4rem;
        color: #fff;
        }
    }
}
.btns{
    margin-top: 20px;
}
</style>