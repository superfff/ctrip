<template>
    <footer class="footer-wrapper">
        <div class="content-wrapper">
            <div class="item-wrapper">
                <div class="item-wrapper-group">
                    <p class="title">为什么选择携程</p>
                    <ul class="item-group">
                        <li class="item-icon service">
                            <div class="icon"></div>
                            <div class="info">
                                <p class="info-title">放心的服务</p>
                                <p>领先的服务标准 独创的保障体系</p>
                            </div>
                        </li>
                        <li class="item-icon price">
                            <div class="icon"></div>
                            <div class="info">
                                <p class="info-title">放心的价格</p>
                                <p>具竞争力的价格 无任何隐形费用</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item-wrapper-group">
                    <p class="title">旅游资讯</p>
                    <ul class="item-group">
                        <li class="item">宾馆索引</li>
                        <li class="item">攻略索引</li>
                        <li class="item">机票索引</li>
                        <li class="item">网站导航</li>
                        <li class="item">旅游索引</li>
                        <li class="item">火车票索引</li>
                        <li class="item">邮轮索引</li>
                        <li class="item">企业差旅索引</li>
                        <li class="item">用车索引</li>
                    </ul>
                </div>
                <div class="item-wrapper-group">
                    <p class="title">加盟合作</p>
                    <ul class="item-group">
                        <li class="item">分销联盟</li>
                        <li class="item">友情链接</li>
                        <li class="item">广告业务</li>
                        <li class="item">企业礼品卡</li>
                        <li class="item">采购保险</li>
                        <li class="item">代理合作</li>
                        <li class="item">酒店加盟</li>
                        <li class="item">目的地及景区合作</li>
                        <li class="item">智慧旅游</li>
                        <li class="item">更多加盟合作</li>
                    </ul>
                </div>
                <div class="item-wrapper-group">
                    <p class="title">关于携程</p>
                    <ul class="item-group">
                        <li class="item">关于携程</li>
                        <li class="item">携程热点</li>
                        <li class="item">联系我们</li>
                        <li class="item">诚聘英才</li>
                        <li class="item">旅游度假资质</li>
                        <li class="item">企业公民</li>
                        <li class="item">用户协议</li>
                        <li class="item">营业执照</li>
                        <li class="item">安全中心</li>
                        <li class="item">携程信用卡</li>
                    </ul>
                </div>
            </div>
            <div class="qr-code">
                <p class="title">微信公众号</p>
                <div class="code-group">
                    <img src="http://pic.c-ctrip.com/platform/online/home/er_ctrip_wechat.jpg" alt="携程">
                    <p class="info">扫一扫,领旅行福利</p>
                </div>
            </div>
        </div>
        <p class="other">copy for FGH.</p>
    </footer>
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
    
    .footer-wrapper{
        width: 100%;
        background-color: #fff;

        .content-wrapper{
            padding: 28px 0 30px 0;
            display: flex;

            .item-wrapper{
                height: 150px;
                flex: 1;
                display: flex;

                &-group{
                    // width: 210px;
                    flex: 1;
                    height: 150px;
                    padding: 0 10px 0 40px;
                    border-right: 1px solid #dedede;

                    &:first-child{
                        width: 235px;
                        flex: 0 0 235px;
                        padding-left: 0;
                    }
                    &:last-child{
                        padding-right: 0;
                    }

                    .title{
                        font-size: 16px;
                        line-height: 20px;
                        color: #666;
                        margin-bottom: 10px;
                    }

                    .item-group{
                        .item-icon{
                            cursor: pointer;
                            .icon{
                                #display_type > .dsp-middle;
                                width: 36px;
                                height: 36px;
                                background-image: url('http://pic.c-ctrip.com/platform/online/home/pic_partner.png');
                                background-repeat: no-repeat;
                            }
                            .info{
                                #display_type > .dsp-middle;
                                font-size: 12px;
                                line-height: 18px;
                                color: #666;
                                margin-left: 9px;

                                .info-title{
                                    font-size: 16px;
                                    line-height: 22px;
                                    font-weight: bold;
                                }
                            }

                            &.service{
                                margin-bottom: 15px;
                                .icon{
                                    background-position: -41px -250px;
                                }
                                .info-title{
                                    color: #2577e3;
                                }
                            }

                            &.price{
                                .icon{
                                    background-position: -41px -200px;
                                }
                                .info-title{
                                    color: #ff9913;
                                }
                            }
                        }

                        .item{
                            width: 50%;
                            font-size: 12px;
                            line-height: 14px;
                            color: #666;
                            margin: 6px 0;
                            float: left;
                            white-space: nowrap;
                            overflow: hidden;
                            cursor: pointer;

                            &:hover{
                                color: #3983e5;
                            }
                        }
                    }
                }


            }
            .qr-code{
                flex: 0 0 130px;
                width: 130px;
                height: 150px;
                padding-left: 30px;
                text-align: center; 

                .title{
                    font-size: 12px;
                    line-height: 20px;
                    color: #666;
                    margin-bottom: 1px;
                }
                .code-group{
                    width: 114px;
                    padding: 8px;
                    border: 1px solid #efefef;

                    .img{
                        width: 112px;
                    }
                    .info{
                        font-size: 12px;
                        margin-top: 10px;
                        line-height: 1.3;
                        color: #999;
                    }
                }
            }

            @media screen and (max-width: 1200px){
                .item-wrapper-group,
                .qr-code{
                    padding-left: 15px;
                }
            }
        }

        .other{
            padding: 20px 0;
            text-align: center;
        }


    }
</style>
