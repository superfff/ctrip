<!-- 当地玩乐区域详情 -->
<template>
    <div class="scroll-hook">
        <detail-lazy :nav="nav" height="216" v-if="!loading_flag"></detail-lazy>

        <template v-if="loading_flag">
            <detail-container :container-data="play_data" small-sidebar key="play">
                <template slot="store">
                    <global-guide 
                        v-for="(pp, ppindex) in play_data.store_list"
                        :key="`play-${ppindex}`"
                        :product-detail="pp"></global-guide>
                </template>
            </detail-container>
        </template>
    </div>

</template>

<script>

import Lib from 'assets/lib.js';

import mock_data from 'assets/js/mock.js';
//内容盒子
import detailContainer from 'components/detail-container'
//lazyload模块
import detailLazy from 'components/detail_lazy_container'
//商品组件
import globalGuide from 'components/detail_global_guide'





export default {
    data(){
        return {
            nav: [],
            play_data: {},
            loading_flag: false
        }
    },
    components:{
        detailContainer,
        detailLazy,
        globalGuide
    },
    props:{
        active: {
            type: Boolean,
            default: false
        }   
    },
    watch:{
        active(val){

            if(val && !this.loading_flag){
                setTimeout(() => {
                    this.loading_flag = !this.loading_flag;
                }, 500)    
            }
        }
    },
    created(){
        this.play_data = mock_data.play_data;
        this.nav = this.play_data.top_nav
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
</style>
