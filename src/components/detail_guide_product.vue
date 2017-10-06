<template>
    <div class="guide-product">
        <img class="guide-product-img" v-lazy="productDetail.img_url" :alt="productDetail.title">
        <div class="guide-product-info">
            <p class="title">{{productDetail.title}}</p>
            <p class="substr">{{productDetail.substr}}</p>
        </div>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

export default {
    data(){
        return {

        }
    },
    components:{

    },
    props:{
        productDetail: {
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

    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .guide-product{
        position: relative;
        width: 220px;
        height: 160px;
        float: left;
        margin: 0 10px 10px 0;
        cursor: pointer;
        overflow: hidden;

        &-img{
            width: 220px;
            transition: all linear .2s;
        }

        &-info{
            width: 100%;
            line-height: 20px;
            height: 20px;
            text-align: center;
            padding: 5px 0;
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            transition: all linear .2s;

            .title,
            .substr{
                font-size: 12px;
                line-height: 20px;
                height: 20px;
                text-align: center;
            }

            .substr{
                opacity: 0;
                color: rgba(255, 255, 255, 0.6);
                transition: all linear .2s;
            }
        }

        &:hover{
            .guide-product-img{
                transform: scale(1.1);
            }
            .guide-product-info{
                height: 40px;

                .substr{
                    opacity: 1.0;
                }
            }
        }

        @media screen and (max-width: 1200px){
            margin-right: 20px;

            &:last-child{
                display: none;
            }
        }  
    }
</style>
