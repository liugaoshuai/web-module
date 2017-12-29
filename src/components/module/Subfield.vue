<template>
    <div>
        <div v-bind:style="{ 
            paddingTop: modulePaddingTop + 'px', 
            paddingBottom: modulePaddingBottom + 'px',
            backgroundColor: moduleBackgroundColor,
            width: moduleWidth==0?'1200px':'',
        }" class="module-mg-auto">
            <h2 v-bind:style="{ 
                color: moduleTitleColor, 
            }" class="module-title tac">{{moduleTitle}}</h2>
            <h4 v-bind:style="{ 
                color: moduleSubheadColor, 
            }" class="module-subhead tac">{{moduleSubhead}}</h4>

            <el-row type="flex" justify="space-around">
                <el-col :span="24/moduleSubfieldData.length" v-for="(item,index) in moduleSubfieldData" :key="index">
                    <div v-bind:style="{ 
                        border: moduleOutline.border, 
                        borderRadius: moduleOutline.borderRadius,
                        backgroundColor: item.backgroundColorOutline,
                    }">
                        <div v-bind:style="{ 
                            height: moduleInside.height + 'px', 
                            width: moduleInside.width + 'px', 
                            padding: moduleInside.padding + 'px', 
                            border: moduleInside.border, 
                            borderRadius: moduleInside.borderRadius,
                            backgroundImage: 'url(' + item.backgroundImageInside + ')',
                            backgroundColor: item.backgroundColorInside,
                        }" class="module-mg-auto module-bg"></div>
                        <p v-bind:style="{ 
                            fontSize: moduleItemTitle.fontSize + 'px', 
                            color: moduleItemTitle.fontColor, 
                            lineHeight: moduleItemTitle.lineHeight + 'px',
                        }" class="tac">{{item.title}}</p>
                        <p v-bind:style="{ 
                            fontSize: moduleItemSubhead.fontSize + 'px', 
                            color: moduleItemSubhead.fontColor, 
                            lineHeight: moduleItemSubhead.lineHeight + 'px', 
                        }" class="tac">{{item.subhead}}</p>
                    </div>

                </el-col>
            </el-row>
        </div>
        <div class="console-box">
            <div class="pr">
                <h2 class="tac">设置 / 进行模板配置</h2>
                <div class="console-form">
                    <el-form label-width="100px">
                        <el-form-item label="宽度">
                            <el-radio-group v-model="moduleWidth">
                                <el-radio :label="0">1200px</el-radio>
                                <el-radio :label="1">100%</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="标题">
                            <el-input v-model="moduleTitle"></el-input>
                        </el-form-item>
                        <el-form-item label="副标题">
                            <el-input v-model="moduleSubhead"></el-input>
                        </el-form-item>
                        <el-form-item label="标题颜色">
                            <el-input v-model="moduleTitleColor"></el-input>
                        </el-form-item>
                        <el-form-item label="副标题颜色">
                            <el-input v-model="moduleSubheadColor"></el-input>
                        </el-form-item>
                        <el-form-item label="背景颜色">
                            <el-input v-model="moduleBackgroundColor"></el-input>
                        </el-form-item>
                        <el-form-item label="背景路径">
                            <el-input v-model="moduleBackgroundImage"></el-input>
                        </el-form-item>
                        <el-form-item label="上间距">
                            <el-input v-model="modulePaddingTop"></el-input>
                        </el-form-item>
                        <el-form-item label="下间距">
                            <el-input v-model="modulePaddingBottom"></el-input>
                        </el-form-item>
                        <el-form-item label="外框圆角">
                            <el-input v-model="moduleOutline.borderRadius"></el-input>
                        </el-form-item>
                        <el-form-item label="外框边框">
                            <el-input v-model="moduleOutline.border"></el-input>
                        </el-form-item>
                        <el-form-item label="内框高度">
                            <el-input v-model="moduleInside.height"></el-input>
                        </el-form-item>
                        <el-form-item label="内框宽度">
                            <el-input v-model="moduleInside.width"></el-input>
                        </el-form-item>
                        <el-form-item label="内框内边距">
                            <el-input v-model="moduleInside.padding"></el-input>
                        </el-form-item>
                        <el-form-item label="内框圆角">
                            <el-input v-model="moduleInside.borderRadius"></el-input>
                        </el-form-item>
                        <el-form-item label="内框边框">
                            <el-input v-model="moduleInside.border"></el-input>
                        </el-form-item>

                        <el-form-item label="主标题字号">
                            <el-input v-model="moduleItemTitle.fontSize"></el-input>
                        </el-form-item>
                        <el-form-item label="主标题颜色">
                            <el-input v-model="moduleItemTitle.fontColor"></el-input>
                        </el-form-item>
                        <el-form-item label="主标题行高">
                            <el-input v-model="moduleItemTitle.lineHeight"></el-input>
                        </el-form-item>
                        <el-form-item label="副标题字号">
                            <el-input v-model="moduleItemSubhead.fontSize"></el-input>
                        </el-form-item>
                        <el-form-item label="副标题颜色">
                            <el-input v-model="moduleItemSubhead.fontColor"></el-input>
                        </el-form-item>
                        <el-form-item label="副标题行高">
                            <el-input v-model="moduleItemSubhead.lineHeight"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="module-btn mgt10 tar">
                    <el-button>确认</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                moduleWidth: 0,
                moduleTitle: '模板标题', // 标题
                moduleTitleColor: '#fff', // 标题
                moduleSubhead: '模板标题说明', // 副标题
                moduleSubheadColor: '#fff', // 副标题
                moduleBackgroundColor: '#fff', // 背景颜色
                moduleBackgroundImage: '', // 背景图片
                modulePaddingTop: 20, // 上间距
                modulePaddingBottom: 20, // 下间距

                moduleOutline: {
                    borderRadius: 0,
                    border: 0,
                }, // 外框
                moduleInside: {
                    height: 300,
                    width: 300,
                    padding: 20,
                    borderRadius: '50%',
                    border: '1px solid #333',
                }, // 内框

                moduleItemTitle: {
                    fontSize: 20,
                    fontColor: '#000',
                    lineHeight: 60,
                }, // 标题
                moduleItemSubhead: {
                    fontSize: 14,
                    fontColor: '#000',
                    lineHeight: 20,
                }, // 副标题

                // 数据
                moduleSubfieldData: [
                    {
                        backgroundColorOutline: '#fff',
                        backgroundColorInside: '#000',
                        backgroundImageInside: './src/assets/item01.png',
                        title: '模板item标题',
                        subhead: '模板item标题说明文本',
                    }, {
                        backgroundColorOutline: '#fff',
                        backgroundColorInside: '#000',
                        backgroundImageInside: './src/assets/item01.png',
                        title: '模板item标题',
                        subhead: '模板item标题说明文本',
                    }, {
                        backgroundColorOutline: '#fff',
                        backgroundColorInside: '#000',
                        backgroundImageInside: './src/assets/item01.png',
                        title: '模板item标题',
                        subhead: '模板item标题说明文本',
                    }
                ], // 分栏布局个数 暂时支持 1-6

            };
        },
        methods: {}
    }
</script>

<style>
</style>