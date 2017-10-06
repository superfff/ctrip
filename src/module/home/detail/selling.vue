<!-- 特卖汇区域详情 -->
<template>
    <div class="scroll-hook">
        <detail-lazy :nav="nav" height="386" v-if="!loading_flag"></detail-lazy>
        
        <template v-if="loading_flag">
            <detail-container :container-data="selling_data" key="selling">
                <template slot="store">
                    <selling-product 
                        v-for="(s,sindex) in selling_data.store_list"
                        :key="`selling-${sindex}`"
                        :product-detail="s"></selling-product>
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
//特卖汇部分商品详细组件
import sellingProduct from 'components/detail_selling_product'





export default {
    data(){
        return {
            nav: [],
            selling_data: {},
            loading_flag: false
        }
    },
    components:{
        detailContainer,
        detailLazy,
        sellingProduct
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
                // console.log('selling active');
                // setTimeout(() => {
                //     this.loading_flag = !this.loading_flag;
                // }, 500)    
            }
        }
    },
    created(){

        //特卖汇模块
        this.selling_data = mock_data.selling_data;
        this.nav = this.selling_data.top_nav;

        if(this.active){
            setTimeout(() => {
                this.loading_flag = !this.loading_flag;
            }, 500)
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
</style>
