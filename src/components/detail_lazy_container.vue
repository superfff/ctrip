<!-- lazyload 显示区 -->
<template>
    <div class="loading-wrapper">
        <top-nav :nav-data="nav"></top-nav>
        <div class="loading-wrapper-content" :style='`height: ${height}px;line-height: ${height}px;`'>
            <img src="../assets/loading.gif" alt="ctrip">
        </div>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

//顶部导航栏
import topNav from 'components/detail_top_nav'

export default {
    data(){
        return {
        }
    },
    components:{
        topNav
    },
    watch:{

    },
    props:{
        nav: {
            type: Array,
            default(){
                return []
            }
        },
        height: {
            default: 30
        }
    },
    created(){

    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .loading-wrapper{
        width: 100%;
        margin-bottom: 28px;
        display: inline-block;

        &-content{
            width: 100%;
            border: 1px solid #e0e0e0;
            border-top: none;
            background-color: #fff;
            text-align: center;
        }

    }
</style>
