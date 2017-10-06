<!-- 国外酒店/圆形中间商品组件 -->
<template>
    <div class="store-item">
        <!-- <img class="store-item-img" :src="storeDetail.url" :alt="storeDetail.name"> -->
        <!-- <lazy-component @show="handler"> -->
            <img class="store-item-img" v-lazy="storeDetail.url">
            <div class="store-item-detail">
                <p class="title">{{storeDetail.name}}</p>
                <p class="hotel-num">{{storeDetail.num}}家酒店</p>
                <store-price class="hotel-price" :store-price="storeDetail.price"></store-price>
            </div>
        <!-- </lazy-component> -->
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

import storePrice from 'components/store-price'

export default {
    components: {
        storePrice
    },
    data(){
        return {
            // lazy_img: {
            //     src: this.storeDetail.url,
            //     loading: 'http://cdn.uehtml.com/201402/1392662587108.gif'
            // }
        }
    },
    props: {
        storeDetail: {
            type: Object,
            required: true,
            default(){
                return {}
            }
        }
    },
    created(){

    },
    methods: {
        handler(component){
            console.log(component);
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    .store-item{
        width: 220px;
        height: 160px;
        background-color: @lazy_color;
        float: left;
        margin: 0 10px 10px 0;
        overflow: hidden;
        position: relative;
        cursor: pointer;

        &-img{
            width: 220px;
            transition: all linear .2s;
        }

        &-detail{
            position: absolute;
            // z-index: 2;
            top: 50%;
            left: 50%;
            margin: -56px 0 0 -56px;
            padding: 20px 10px;
            width: 92px;
            height: 72px;
            overflow: hidden;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            transition: all linear .2s;

            .title{
                font-size: 18px;
                font-weight: 700;
                color: #fff;
                margin-bottom: 3px;
                padding: 2px 0;
            }
            .hotel-num{
                font-size: 12px;
                white-space: nowrap;
                color: #fff;
                padding: 3px 0;
                border-bottom: 1px solid #fff;
            }
            

            
        }

        &:hover{
            .store-item-img{
                transform: scale(1.1);
            }

            .store-item-detail{
                background: rgba(0, 0, 0, 0.7);
            }
        }


        @media screen and (max-width: 1200px){
            margin-right: 20px;
        }   
    }
</style>
