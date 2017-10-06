<!-- 酒店区域详情 -->
<template>
    <div class="scroll-hook">
        <detail-lazy :nav="nav" height="386" v-if="!loading_flag"></detail-lazy>

        <template v-if="loading_flag">
            <detail-container :container-data="hotel_data" key="hotel">
                <template slot="store">
                    <hotel-store 
                        v-for="(h, hindex) in hotel_data.store_list"
                        :key="`hotel-${hindex}`"
                        :store-detail="h"></hotel-store>
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
//海外酒店商品详细组件
import hotelStore from 'components/detail_hotel_store'




export default {
    data(){
        return {
            nav: [],
            hotel_data: {},
            loading_flag: false
        }
    },
    components:{
        detailContainer,
        detailLazy,
        hotelStore
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
                console.log('hotel active');
                setTimeout(() => {
                    this.loading_flag = !this.loading_flag;
                }, 500)    
            }
        }
    },
    created(){
        //酒店模块
        this.hotel_data = mock_data.hotel_data;
        this.nav = this.hotel_data.top_nav
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
</style>
