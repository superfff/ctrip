<template>
    <div class="product-group">
        <top-nav :nav-data="containerData.top_nav" @selectIndex="top_nav_select"></top-nav>
        <div class="product-group-content">
            <div class="product-left-wrapper" v-if="containerData.inner_sidebar">
                <template v-if="smallSidebar">
                    <sidebar-small :sidebar="containerData.inner_sidebar"></sidebar-small>
                </template>
                <template v-else>
                    <sidebar 
                        v-for="(sn,sindex) in containerData.inner_sidebar"
                        :key="`inner-sidebar-${sindex}`"
                        :sidebar="sn"></sidebar>
                </template>
            </div>
            <div class="product-right-wrapper">
                <inner-nav 
                    :nav-data="containerData.inner_nav"
                    :nav-more="containerData.inner_nav_more ? containerData.inner_nav_more : '' "
                    @selectIndex="inner_nav_select"></inner-nav>
                <div class="right-content">
                    <div class="store-detail-wrapper">
                        <!-- <hotel-store 
                            v-for="(h, hindex) in containerData.store_list"
                            :key="`hotel-${hindex}`"
                            :store-detail="h"></hotel-store> -->
                        <slot name="store"></slot>

                    </div>
                    <div class="ad-detail" v-if="containerData.store_ad">
                        <img 
                            :src="containerData.store_ad.img_url" 
                            :alt="containerData.store_ad.img_title">
                        <p v-if="containerData.store_ad.img_title">{{containerData.store_ad.img_title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

//顶部导航栏
import topNav from 'components/detail_top_nav'
//内部导航栏
import innerNav from 'components/detail_inner_nav'
//内部侧边栏
import sidebar from 'components/detail_sidebar'
//内部侧边栏(小)
import sidebarSmall from 'components/detail_sidebar_short'

export default {
    data(){
        return {

        }
    },
    components: {
        topNav,
        innerNav,
        sidebar,
        sidebarSmall
    },
    props: {
        containerData: {
            type: Object,
            required: true,
            default(){
                return {}
            }
        },
        smallSidebar: {
            type: Boolean,
            default: false
        }
    },
    created(){

    },
    methods: {
        //顶部导航点击(组件传出的值)
        top_nav_select(res){
            console.log('顶部select');
            console.log(res);
        },

        //内部导航栏点击方法
        inner_nav_select(res){
            console.log('内部select');
            console.log(res);
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    .product-group{
        width: 100%;
        margin-bottom: 28px;
        display: inline-block;

        &-content{
            display: flex;
            // height: 100px;
            border: 1px solid #e0e0e0;
            border-top: none;
            background-color: #fff;

            .product-left-wrapper{
                flex: 0 0 187px;
                padding: 0 20px;
                border-right: 1px dotted #a3a3a3;
                
            }
            .product-right-wrapper{
                flex: 1;
                // background-color: gray;
                box-sizing: border-box;
                padding: 15px 15px 0;

                .right-content{
                    width: 100%;
                    // height: 100px;
                    display: flex;

                    .ad-detail{
                        flex: 0 0 220px;
                        width: 220px;
                        height: 330px;
                        position: relative;
                        cursor: pointer;
                        overflow: hidden;
                        // background-color: pink;
                        img{
                            width: 220px;
                        }
                        p{
                            position: absolute;
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            background: rgba(0, 0, 0, 0.5);
                            font-size: 12px;
                            color: #fff;
                            text-align: center;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        //响应式
                        @media screen and (max-width: 1200px){
                            display: none;
                        }
                    }

                    .store-detail-wrapper{
                        flex: 1;
                        // background-color: gray;

                        
                    }

                }
            }
        }
    }


    .ticket-wrapper{
        .ad-detail{
            height: 338px !important;
        }
    }
</style>
