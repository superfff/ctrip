<!-- 目的地攻略区域详情 -->
<template>
    <div class="scroll-hook">
        <detail-lazy :nav="nav" height="216" v-if="!loading_flag"></detail-lazy>

        <template v-if="loading_flag">
            <detail-container :container-data="guide_data" key="guide">
                <template slot="store">
                    <guide-product
                        v-for="(g, gindex) in guide_data.store_list"
                        :key="`guide-${gindex}`"
                        :product-detail="g"></guide-product>
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
import guideProduct from 'components/detail_guide_product'






export default {
    data(){
        return {
            nav: [],
            guide_data: {},
            loading_flag: false
        }
    },
    components:{
        detailContainer,
        detailLazy,
        guideProduct
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
        this.guide_data = mock_data.guide_data;
        this.nav = this.guide_data.top_nav
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
</style>
