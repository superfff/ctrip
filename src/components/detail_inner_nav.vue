<template>
    <ul class="right-inner-nav">
        <li 
            class="inner-nav-item" 
            :class="{'inner-nav-active': iindex === inner_nav_flag}"
            @click="inner_nav_click(iindex)"
            v-for="(ii, iindex) in navData">{{ii}}</li>
        <li class="inner-nav-more" v-if="navMore">更多{{navMore}}</li>
    </ul>
</template>

<script>

import Lib from 'assets/lib.js';

export default {
    data(){
        return {
            //选中标识
            inner_nav_flag: 0
        }
    },
    created(){

    },
    props: {
        //导航栏数据
        navData: {
            type: Array,
            required: true,
            default(){
                return []
            }
        },
        //导航栏是否有更多按钮标识
        navMore: {
            type: String,
            default: ''
        }
    },
    watch: {
        inner_nav_flag(val){
            this.$emit('selectIndex', val);
        }
    },
    methods: {
        //点击方法
        inner_nav_click(index){
            this.inner_nav_flag = index;
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .right-inner-nav{
        width: 100%;
        height: 20px;
        margin-bottom: 10px;
        position: relative;

        .inner-nav-item{
            display: inline-block;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            padding: 0 8px;
            margin-right: 15px;
            color: #3983e5;
            cursor: pointer;

            &.inner-nav-active{
                background: #3983e5;
                color: #fff;
                border-radius: 3px;
                cursor: default;
            }

            &:hover{
                background: #3983e5;
                color: #fff;
                border-radius: 3px;
            }

        }

        .inner-nav-more{
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            color: #3983e5;
            cursor: pointer;
            position: absolute;
            top: -3px;
            right: -8px;
            border: 1px solid transparent;
            padding: 2px 8px;

            &:hover{
                border-radius: 3px;
                border-color: #3983e5;
            }
        }
    }
</style>
