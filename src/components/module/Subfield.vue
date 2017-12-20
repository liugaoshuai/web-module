<template>
    <div>
        <div v-bind:style="{ 
            paddingTop: modulePaddingTop + 'px', 
            paddingBottom: modulePaddingBottom + 'px',
            backgroundColor: moduleBackgroundColor,
            width: moduleWidth + 'px',
        }" class="module-mg-auto">
            <h2 v-bind:style="{ 
                color: moduleTitleColor, 
            }" class="module-title">{{moduleTitle}}</h2>
            <h4 v-bind:style="{ 
                color: moduleSubheadColor, 
            }" class="module-subhead">{{moduleSubhead}}</h4>

            <el-row type="flex" justify="space-around">
                <el-col :span="24/moduleSubfieldData.length" v-for="item in moduleSubfieldData">
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
                            fontColor: moduleItemTitle.fontColor, 
                            lineHeight: moduleItemTitle.lineHeight + 'px',
                        }">{{item.title}}</p>
                        <p v-bind:style="{ 
                            fontSize: moduleItemSubhead.fontSize + 'px', 
                            fontColor: moduleItemSubhead.fontColor, 
                            lineHeight: moduleItemSubhead.lineHeight + 'px', 
                        }">{{item.subhead}}</p>
                    </div>
                    
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                moduleWidth: 1200,
                moduleTitle: '模板标题', // 标题
                moduleTitleColor: '#fff', // 标题
                moduleSubhead: '模板标题说明', // 副标题
                moduleSubheadColor: '#fff', // 副标题
                moduleBackgroundColor: '#000', // 背景颜色
                moduleBackgroundImage: '', // 背景图片
                modulePaddingTop: 20, // 上间距
                modulePaddingBottom: 20, // 下间距
                
                moduleOutline: {
                    borderRadius: 0,
                    border: 0,
                }, // 外框
                moduleInside: {
                    height: 200,
                    width: 200,
                    padding: 20,
                    borderRadius: '0',
                    border: '1px solid #333',
                }, // 内框

                moduleItemTitle: {
                    fontSize: 20,
                    fontColor: '#fff',
                    lineHeight: 60,
                }, // 标题
                moduleItemSubhead: {
                    fontSize: 14,
                    fontColor: '#fff',
                    lineHeight: 20,
                }, // 副标题

                // 数据
                moduleSubfieldData: [
                    {
                        backgroundColorOutline: '#030303',
                        backgroundColorInside: '#fff',
                        backgroundImageInside: './src/assets/item01.png',
                        title: '模板item标题',
                        subhead: '模板item标题说明文本',
                    },{
                        backgroundColorOutline: '#030303',
                        backgroundColorInside: '#fff',
                        backgroundImageInside: './src/assets/item02.png',
                        title: '模板item标题',
                        subhead: '模板item标题说明文本',
                    },{
                        backgroundColorOutline: '#030303',
                        backgroundColorInside: '#fff',
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