<template>
    <div class="pr">
        <div class="content-left">
            <component :is="moduleName"></component>
            <div class="pd10 tac">
                <div class="page-add-box">
                    <i class="iconfont page-add-icon">添加 / 选择模板种类</i>
                </div>
            </div>
        </div>
        <div class="console-box" v-show="consoleActive">
            <h2 class="tac">添加 / 选择模块种类</h2>
            <div class="module-radio">
                <ul>
                    <li><el-radio class="radio" v-model="consoleAddModule" label="1">头部 / logo 宣传语 快捷入口</el-radio></li>
                    <li><el-radio class="radio" v-model="consoleAddModule" label="2">底部 / 二维码 联系方式 快捷入口</el-radio></li>
                    <li><el-radio class="radio" v-model="consoleAddModule" label="3">菜单 / 一级菜单 二级菜单</el-radio></li>
                    <li><el-radio class="radio" v-model="consoleAddModule" label="4">轮播 / 大图轮播 图片滚动</el-radio></li>
                    <li><el-radio class="radio" v-model="consoleAddModule" label="5">分栏 / 图标 分类</el-radio></li>
                    <li><el-radio class="radio" v-model="consoleAddModule" label="6">大图 / 图片</el-radio></li>
                </ul>
            </div>
            <div class="module-btn mgt10 tar">
                <el-button>确认</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Subfield from './module/Subfield' // 档口拿货
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                consoleAddModule: '', // 添加模板名称
                moduleName: 'Subfield', // 模板名称
                consoleActive: '', // 当前控制台
            }
        },
        components: {
            Subfield,
        },
    }
</script>

<style>
    .content-left{
        padding-right: 400px;
    }

    .module-radio li{
        line-height: 60px;
        text-align: left;
        cursor: pointer;
        padding: 0 20px;
    }
    .module-radio li+li{
    }
    .page-add-box {
        border: 1px dashed #333;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .page-add-box:hover {
        border-color: #20a0ff;
        color: #20a0ff;
    }

    .page-add-icon {
        font-size: 14px;
        color: #333;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .console-box {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        width: 400px;
        /* height: 200px; */
        border-left: 1px solid #999;
        background: #fff;
        color: #333;
        overflow: auto;
    }
    .console-box>div{
        padding: 70px 10px;
    }
    .console-box h2 {
        font-size: 24px;
        line-height: 60px;
        text-align: left;
        background: #fff;
        padding-left: 20px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .console-form{
        overflow: auto;
    }
</style>