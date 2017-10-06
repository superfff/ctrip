<template>
    <div class="service-wrapper">
        <ul class="service-wrapper-title">
            <li class="item">旅游服务</li>
        </ul>
        <div class="service-wrapper-content">
            <div class="content-group">
                <div class="content-group-title">
                    <div class="icon-group">
                        <div class="wifi-icon"><i></i></div>
                    </div>
                    <div class="title-group">
                        <p class="title">出境WiFi</p>
                        <p class="info">全球出境WiFi租赁</p>
                        <p class="info">流量不限、多人共享、携带便捷、低价信号强</p>
                    </div>
                </div>
                <div class="content-group-item">
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="wifi">
                            日本
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="wifi">
                            韩国
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="wifi">
                            欧洲通用
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="wifi">
                            更多
                        </div>
                    </div>
                    </div>
            </div>
            <div class="content-group middle-group">
                <div class="content-group-title">
                    <div class="icon-group">
                        <div class="sign-icon"><i></i></div>
                    </div>
                    <div class="title-group">
                        <p class="title">签证</p>
                        <p class="info">在材料制作完成前均可申请订单全额退款</p>
                        <p class="info">服务优质，方便快捷，诚信可靠，出签率高</p>
                    </div>
                </div>
                <div class="content-group-item">
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/vacation_v2/visa/24-japan.png">
                            日本
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/vacation_v2/visa/24-korea.png">
                            韩国
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/vacation_v2/visa/24-USA.png">
                            美国
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://pic.c-ctrip.com/vacation_v2/visa/24-Australia.png">
                            澳大利亚
                        </div>
                    </div>
                    </div>
            </div>
            <div class="content-group">
                <div class="content-group-title">
                    <div class="icon-group">
                        <div class="insurance-icon"><i class="icon"></i></div>
                    </div>
                    <div class="title-group">
                        <p class="title">保险</p>
                        <p class="info">携程保险，安心随行</p>
                        <p class="info">旅游定制、极速出保、便捷理赔</p>
                    </div>
                </div>
                <div class="content-group-item">
                    <div class="item-group">
                        <div class="item">
                            <img src="http://images3.c-ctrip.com/vacationUED_pic/meiya.png">
                            【申根之王】
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://images3.c-ctrip.com/vacationUED_pic/pingan.png">
                            【亚洲优选】
                        </div>
                    </div>
                    <div class="item-group">
                        <div class="item">
                            <img src="http://images3.c-ctrip.com/vacationUED_pic/pingan.png">
                            【国内畅游】
                        </div>
                    </div>
                </div>
            </div>
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
    watch:{

    },
    props:{
        
    },
    created(){

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .service-wrapper{
        width: 100%;
        margin-bottom: 28px;
        display: inline-block;

        &-title{
            width: 100%;
            height: 36px;
            border-bottom: 2px solid #3983e5;

            .item{
                display: inline-block;
                position: relative;
                height: 36px;
                line-height: 36px;
                font-size: 16px;
                margin-right: 30px;
                color: #06c;
                cursor: default;

                &:after{
                    content: '';
                    display: inline-block;
                    border-top: 6px solid transparent;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 6px solid #3983e5;
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    margin-left: -6px;
                }
            }
        }

        &-content{
            width: 100%;
            margin-top: 10px;
            display: flex;

            .content-group{
                height: 143px;
                flex: 1;
                display: flex;
                flex-direction: column;
                border: 1px solid #e0e0e0;
                cursor: pointer;
                background-color: #fff;

                &-title{
                    width: 100%;
                    height: 102px;
                    flex: 0 0 102px;
                    border-bottom: 1px solid #e0e0e0;
                    padding-top: 15px;
                    box-sizing: border-box;

                    display: flex;

                    &:hover{
                        background: #e2eeff;
                    }


                    .icon-group{
                        flex: 0 0 110px;
                        // #display_type > .dsp-middle;
                        // margin: 16px 0 0 40px;

                        div{
                            position: relative;
                            width: 70px;
                            height: 70px;
                            // text-align: center;
                            margin: 0 auto;
                            border-radius: 50%;

                            i{
                                width: 46px;
                                height: 34px;
                                display: inline-block;
                                background-image: url('http://pic.c-ctrip.com/index/v3.0/un_index_supply.png');
                                background-repeat: no-repeat;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                margin: -17px 0 0 -23px;
                            }

                            &.wifi-icon{
                                background-color: #abcbf5;
                            }

                            &.sign-icon{
                                background-color: #cbe2b3;
                                i{
                                    height: 46px;
                                    background-position: 0 -39px;
                                    margin-top: -23px;
                                }
                            }
                            &.insurance-icon{
                                background-color: #f6dbb9;
                                i{
                                    height: 48px;
                                    margin: -24px 0 0 -23px;
                                    background-position: 0 -89px;
                                }
                            }
                        }

                    }

                    .title-group{
                        // #display_type > .dsp-middle;
                        // margin: 16px 0 0 20px;

                        flex: 1;
                        padding-left: 20px;


                        .title{
                            font-size: 16px;
                            margin-bottom: 5px;
                            line-height: 1.5;
                        }
                        .info{
                            font-size: 12px;
                            line-height: 1.5;
                            color: #666;
                        }
                    }
                }
                &-item{
                    flex: 1;
                    display: flex;

                    .item-group{
                        flex: 1;
                        padding: 8px 0;

                        &:hover{
                            background-color: #e2eeff;
                        }

                        .item{
                            font-size: 12px;
                            line-height: 24px;
                            text-align: center;
                            border-left: 1px dashed #a3a3a3;

                            img{
                                width: 24px;
                                vertical-align: top;
                                border-radius: 50%;
                            }
                        }

                        &:first-child{
                            .item{
                                border-left: none;
                            }
                        }
                    }
                }

                &.middle-group{
                    margin: 0 10px;
                }
            }
        }

        @media screen and (max-width: 1200px){
            .content-group-title{
                .icon-group{
                    flex: 0 0 85px;
                }
                .title-group{
                    padding-left: 10px;
                }
            }
            .content-group-item{
                .item-group:last-child{
                    display: none;
                }
            }
        }
    }
</style>
