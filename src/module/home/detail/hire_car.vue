<!-- 租车区域详情 -->
<template>
    <div class="scroll-hook">
        <detail-lazy :nav="nav" height="216" v-if="!loading_flag"></detail-lazy>

        <template v-if="loading_flag">
            <detail-container :container-data="hireCar_data" key="hire_car">
                <template slot="store">
                    <hire-product
                        v-for="(hp, hpindex) in hireCar_data.store_list"
                        :key="`hire-${hpindex}`"
                        :product-detail="hp"></hire-product>
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
//租车部分商品组件
import hireProduct from 'components/detail_hire_product'





export default {
    data(){
        return {
            nav: [],
            hireCar_data: {},
            loading_flag: false
        }
    },
    components:{
        detailContainer,
        detailLazy,
        hireProduct
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

        //机票模块
        this.hireCar_data = mock_data.hireCar_data;
        this.nav = this.hireCar_data.top_nav
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
</style>
