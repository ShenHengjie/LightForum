<!--
 * @Author: Jason Shen
 * @Date: 2023-06-22 19:59:37
 * @Description: 卷死别人！
 * @FilePath: \forum\src\views\publish\publish.vue
-->
<template>
  <div class="box">
    <div class="content">
        <p class="topic">发布帖子</p>
        <br>
        <el-form class="el-form" :model="form" label-width="120px">
            <el-form-item size="large" label="标题:">
                <el-input size="large" v-model="form.ftitle" />
            </el-form-item>
            <el-form-item size="large" label="内容:">
                <el-input size="large" v-model="form.fcontent" type="textarea"/>
            </el-form-item>
            <el-form-item size="large" label="图片:">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:8000/file/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-button @click="submit">提交</el-button>
        </el-form>
        <div style="height: 100px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { AddPublish } from "@/api/publish"
import type { UploadProps } from 'element-plus'
type UploadProps = InstanceType<typeof UploadProps>
import { useRouter } from "vue-router";
import { dateNow } from "@/utils/formatTime"
const router = useRouter();
const imageUrl = ref('')
console.log(dateNow);

const form = ref({
    ftitle: "",
    fcontent: "",
    fimg: "",
    fdata : dateNow,
    fid : Math.floor(Math.random() * (1000000 + 1)),
    fposter : "lisi",
    fuid : "000002"
});
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response: any,
  uploadFile: any
) => {
  console.log(response);
  console.log(uploadFile);
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  form.value.fimg = response.urlHttp
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile: any) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const submit = () => {
  console.log(form.value);
  AddPublish(form.value).then((res) => {
    console.log(res);
    if(res.code === "200" && res.msg == "OK!"){
      ElMessage({
        message: '发布成功',
        type: 'success',
      });
      router.push("/")
      setInterval(() => {
        window.location.reload();
      },500);
    }
    else if(res.code === "200" && res.msg == "error!") {
      ElMessage({
        message: res.data,
        type: 'warning',
      });
    }
    else {
      ElMessage.error("错误，发布失败")
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #e9e8e8;
    .content {
        position: relative;
        top: -100px;
        width: 40%;
        // height: 400px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        .topic {
            display: inline-block;
            margin-top: 50px;
            font-size: 40px;
            font-weight: bold;
            // border-bottom: #012c6d solid 5px;
            margin-bottom: 40px;
        }
        .el-form {
            display: inline-block;
            position: relative;
            left: -20px;
            width: 600px;
        }
    }
}
.avatar-uploader .el-upload {
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border: 1px solid black;
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
}
</style>