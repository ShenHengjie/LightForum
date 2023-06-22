<!--
 * @Author: hayyot
 * @Date: 2023-06-21 15:32:19
 * @Description: 铁沸物
 * @FilePath: \forum\src\views\Home\index.vue
-->
<template>
  <div class="box">
    <div class="left">

    </div>
    <div class="main">
        <div v-for="(item,index) in content" :key="index" class="content" @click="push_to(index)">
            <div style="display: inline-block;margin-top: 0px;">
                <div class="content-left">
                    <p class="title"><span>{{ item.ftitle }}</span></p>
                    <p class="nr"><span>{{ item.fcontent }}</span></p>
                    <p class="time"><span>{{ time(item.fdata) }}&nbsp;&nbsp;&nbsp;发帖人：{{ item.fuid }}</span></p>
                </div>
            </div>
            <div class="content-right">
                <img :src="item.fimg" alt="">
            </div>
        </div>
        <div class="pagination-block">
            <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllContent } from '@/api/index';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
const content: any = ref({
    // "fcontent": "",
    // "fdata": "",
    // "fid": "",
    // "fimg": "",
    // "fposter": "",
    // "ftitle": "",
    // "fuid": "",
});
onMounted(async () => {
    await getAllContent.then(res => {
        // console.log(res.data);
        content.value = res.data
    });
})
const time = (item: string) => {
    // console.log(typeof(item));
    return item.substring(0,19).replace("T"," ");
}

const push_to = (item: number) => {
    // console.log(item);
    router.push("/item/"+item);
}

</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #e9e8e8;
    div {
        background-color: #fff;
        margin-top: 20px;
        border-radius: 10px;
    }
}
.left {
    width: 300px;
    height: 500px;
    margin-right: 10px;
}
.main {
    width: 800px;
    // min-height: 800px;
    margin-right: 10px;
    text-align: center;
    .content {
        height: 150px;
        // width: 100%;
        cursor: pointer;
        margin: 20px;
        border-radius: 0px;
        // background-color: #e9e8e8;
        display: flex;
        flex-direction: row;
        text-align: left;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        .content-left {
            margin-top: 0px;
            height: 125px;
            width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 10px;
            padding-left: 30px;
            span {
                background: linear-gradient( to right,#ec695c,#61c454) no-repeat right bottom;
                background-size: 0 2px;
                transition: background-size 1300ms;
            }
            .title {
                font-size: 24px;
                font-weight: bold;
                color: #000;
            }
            .nr {
                width: 100%;
                font-size: 16px;
                // font-weight: bold;
                color: #424242;
                overflow: hidden;
                text-overflow:ellipsis;
            }
            .time {
                font-size: 14px;
                // font-weight: bold;
                color: #8d8d8d;
            }
        }
        .content-right {
            display: inline-block;
            width: 100px;
            height: 100px;
            img {
                width: 100px;
                height: 100px; 
            }
        }
    }
    .content:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        span:hover {
            background-position-x: left;
			background-size: 100% 2px;
        }
    }
    .pagination-block {
        display: inline-block;
    }
}
.right {
    width: 300px;
    height: 500px;
}
</style>