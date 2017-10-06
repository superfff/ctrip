<template>
    <div class="entrance-wrapper">
        <div class="top-banner">
            <div class="left-group">
                <p class="title">合作优惠<span>更多</span></p>
                <ul class="info">
                    <li>工行银联信用卡爱购周末</li>
                    <li>广发携程联名卡乐游周边</li>
                </ul>
            </div>
            <div class="right-group">
                <p class="title">合作伙伴</p>
                <ul class="icon-group">
                    <li class="icon">
                        <i></i>
                    </li>
                    <li class="icon">
                        <i></i>
                    </li>
                    <li class="icon">
                        <i></i>
                    </li>
                    <li class="icon">
                        <i></i>
                    </li>
                    <li class="icon">
                        <i></i>
                    </li>
                    <li class="icon">
                        <i></i>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="content-wrapper">
            <li class="content-group" v-for="n in skip_data">
                <div class="title">{{n.title}}</div>
                <ul class="item-wrapper">
                    <li class="item" v-for="nn in n.list">{{nn}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';
import mock_data from 'assets/js/mock.js';

export default {
    data(){
        return {
            skip_data: []
        }
    },
    components:{

    },
    props:{
        
    },
    created(){
        this.skip_data = mock_data.skip_data
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .entrance-wrapper{
        width: 100%;
        background-color: #fff;
        border: 1px solid #e0e0e0;
        box-sizing: border-box;

        .top-banner{
            width: 100%;
            height: 98px;
            border-bottom: 1px solid #e0e0e0;
            display: flex;

            .left-group{
                width: 189px;
                flex: 0 0 189px;
                border-right: 1px solid #e0e0e0;
                padding: 10px 10px 0 20px;

                .title{
                    font-size: 16px;
                    line-height: 26px;
                    margin-bottom: 3px;

                    span{
                        font-size: 12px;
                        color: #b6b6b6;
                        float: right;
                        cursor: pointer;
                        
                        &:hover{
                            color: #3983e5;
                        }
                    }
                }

                .info{
                    li{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 12px;
                        line-height: 1.8;
                        cursor: pointer;

                        &:hover{
                            color: #3983e5;
                        }
                    }
                }
            }
            .right-group{
                flex: 1;
                padding: 10px 10px 0 20px;

                .title{
                    font-size: 16px;
                    line-height: 26px;
                    margin-bottom: 3px;
                }

                .icon-group{
                    width: 100%;
                    display: flex;

                    .icon{
                        flex: 1;
                        text-align: center;
                        border-right: 1px dashed #e0e0e0;
                        i{
                            display: inline-block;
                            width: 76px;
                            height: 28px;
                            background-image: url('http://pic.c-ctrip.com/platform/online/home/pic_partner.png');
                            background-repeat: no-repeat;
                            cursor: pointer;
                        }

                        &:nth-child(2){
                            i{
                                background-position: 0 -33px;
                            }
                        }
                        
                        &:nth-child(3){
                            i{
                                background-position: 0 -66px;
                            }
                        }

                        &:nth-child(4){
                            i{
                                background-position: 0 -99px;
                            }
                        }

                        &:nth-child(5){
                            i{
                                background-position: 0 -132px;
                            }
                        }

                        &:nth-child(6){
                            i{
                                background-position: 0 -165px;
                            }
                        }


                        &:last-child{
                            border-right: none;
                        }
                    }
                }

            }


        }

        .content-wrapper{
            width: 100%;
            padding: 10px 15px;
            box-sizing: border-box;

            .content-group{
                display: flex;
                line-height: 24px;
                padding: 5px 0;
                border-bottom: 1px dotted #ccc;

                &:first-child{
                    padding-top: 0;
                }
                &:last-child{
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .title{
                    flex: 0 0 80px;
                    width: 80px;
                    font-size: 12px;
                    font-weight: bold;
                    color: #666;
                }
                .item-wrapper{
                    flex: 1;

                    .item{
                        width: 84px;
                        font-size: 12px;
                        color: #b6b6b6;
                        float: left;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        cursor: pointer;
                        margin-right: 5px;

                        &:hover{
                            color: #3983e5;
                        }
                    }
                }
            }
        }
    }
</style>
