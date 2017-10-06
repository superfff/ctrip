<!-- 价格展现 -->
<template>
    <p class="price">
        <span class="price-icon">¥</span>
        <span class="price-num">{{storePrice}}</span>
        <span class="price-word">起</span>
    </p>
</template>

<script>

import Lib from 'assets/lib.js';

export default {
    data(){
        return {

        }
    },
    props: {
        storePrice: {
            type: String,
            required: true,
            default: ''
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
    .price{
        padding: 5px 0;

        &-icon,
        &-word{
            font-size: 12px;
            color: #000;
        }

        &-icon{
            vertical-align: 6px;
        }

        &-num{
            color: #f60;
            font-size: 22px;
        }

        &-word{
            margin-left: 3px;
            vertical-align: 2px;
        }
    }

    //酒店模块价格区分
    .hotel-price{
        .price-icon,
        .price-word{
            color: #fff;
        }
    }
</style>
