<template>
    <div class="product-item">
        <div class="product-item-abstract">
            <div class="product-hot-tag" v-if="productDetail.hot_tag">特卖</div>
            <img class="product-img" v-lazy="productDetail.img_url" :alt="productDetail.name">
            <p 
                class="product-abstract" 
                v-if="productDetail.title"
                :title="productDetail.title">{{productDetail.title}}</p>
        </div>
        <p class="product-item-name" :title="productDetail.name">{{productDetail.name}}</p>
        <div class="product-item-info">
            <span class="product-seat">{{productDetail.seat}}</span>
            <div class="product-price" v-if="productDetail.price">
                <store-price :store-price="productDetail.price"></store-price>
            </div>
            <div 
                class="product-tag" 
                v-if="productDetail.tag_name">
                <span 
                    class="tag-item"
                    :class="{'orange': productDetail.tag_name === '返现', 'darkyellow': productDetail.tag_name === '促销'}">{{productDetail.tag_name}}</span>
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
    watch:{

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
    
    .product-item{
        width: 220px;
        height: 160px;
        float: left;
        margin: 0 10px 10px 0;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: all .2s linear;     

        &-abstract{
            position: relative;
            width: 220px;
            height: 110px;
            margin-bottom: 3px;
            overflow: hidden;
            .product-img{
                width: 220px;
                transition: all .2s linear;
            }
            .product-abstract{
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 25px;
                line-height: 25px;
                padding: 0 5px;
                box-sizing: border-box;
                left: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                font-size: 12px;
                color: #fff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .product-hot-tag{
                width: 41px;
                height: 41px;
                display: inline-block;
                background-image: url('http://pic.c-ctrip.com/platform/online/home/un_sprite_tag.png');
                color: #fff;
                font-size: 12px;
                text-align: center;
                line-height: 1.8;
                position: absolute;
                top: 0;
                left: 10px;
                z-index: 2;
            }
        }
        &-name{
            position: relative;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #666;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 5px;
            box-sizing: border-box;
        }
        &-info{
            position: relative;
            padding: 0 5px;
            .product-seat,
            .product-tag{
                font-size: 12px;
                color: #999;
                line-height: 32px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
            }
            .product-price{
                position: absolute;
                right: 5px;
                top: 0;
            }

            .product-tag{
                float: right;
                .tag-item{
                    border: 1px solid transparent;
                    color: #333;
                    background: #fff;
                    padding: 1px 3px;

                    &.orange{
                        border-color: #f60;
                        color: #f60;
                    }

                    &.darkyellow{
                        border-color: #d18f00;
                        color: #d18f00;
                    }

                }
            }
        }

        &:hover{
            box-shadow: 0 1px 4px rgba(0,0,0,.25);

            .product-img{
                transform: scale(1.1);
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
