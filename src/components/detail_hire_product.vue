<template>
    <div class="hire-car-wrapper">
        <div class="hire-img">
            <img v-lazy="productDetail.img_url" :alt="productDetail.name">
        </div>
        <p class="hire-name">{{productDetail.name}}</p>
        <div class="hire-info">
            <span class="hire-substr">{{productDetail.substr}}</span>
            <div class="hire-price">
                <store-price :store-price="productDetail.price"></store-price>
            </div>
        </div>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';
import storePrice from 'components/store-price'

export default {
    data(){
        return {

        }
    },
    components:{
        storePrice

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
    
    .hire-car-wrapper{
        width: 220px;
        height: 160px;
        transition: all .2s linear;
        border-radius: 3px;
        float: left;
        margin: 0 10px 10px 0;

        .hire-img{
            width: 220px;
            height: 110px;
            overflow: hidden;
            background-color: @lazy_color;
            img{
                width: 220px;
                transition: all .2s linear;
            }
        }

        .hire-name{
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            padding: 0 5px;
            box-sizing: border-box;
        }

        .hire-info{
            position: relative;
            padding: 0 5px;
            .hire-substr{
                font-size: 12px;
                color: #999;
                line-height: 32px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
            }
            .hire-price{
                position: absolute;
                right: 5px;
                top: 0;
            }
        }

        &:hover{
            box-shadow: 0 1px 4px rgba(0,0,0,.25);

            .hire-img{
                img{
                    transform: scale(1.05);
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
