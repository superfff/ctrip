<!-- 机票区域详情 -->
<template>
    <div class="scroll-hook">
        <detail-lazy :nav="nav" height="394" v-if="!loading_flag"></detail-lazy>

        <template v-if="loading_flag">
            <detail-container class="ticket-wrapper" :container-data="ticket_data" key="ticket">
                <template slot="store">
                    <ticket-product 
                        v-for="(t, tindex) in ticket_data.store_list"
                        :key="`ticket-${tindex}`"
                        :product-detail="t"></ticket-product>
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
//机票商品组件
import ticketProduct from 'components/detail_ticket_product'





export default {
    data(){
        return {
            nav: [],
            ticket_data: {},
            loading_flag: false
        }
    },
    components:{
        detailContainer,
        detailLazy,
        ticketProduct
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
        this.ticket_data = mock_data.ticket_data;
        this.nav = this.ticket_data.top_nav
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
</style>
