<template>
    <div>
        <div 
            class="fixed-wrapper"
            :class="{'fixed-out': content_out, 'dsn': !btn_out}">
            <div class="fixed-wrapper-content">
                <img class="fixed-img" src="http://images4.c-ctrip.com/img3/marketing/2016/01/float_new_year/tongyong_480x194.png" alt="携程">
                <div class="fixed-info">
                    <div class="fixed-info-form">
                        <p class="title">下载携程旅行手机版<span class="skip">Pad及手机网络版 ></span></p>
                        <p class="substr">下载地址至手机</p>
                        <input class="phone-input" type="text" placeholder="请输入11位手机号">
                        <div class="code-group">
                            <input type="text" placeholder="动态验证码">
                            <div class="code">验证码</div>
                            <button>免费获取</button>
                        </div>
                    </div>
                    <div class="fixed-info-qrcode">
                        <p class="title">扫码二维码下载</p>
                        <div class="qrcode">二维码</div>
                    </div>
                </div>
                <div class="fixed-btn" @click="content_click">×</div>
            </div>
        </div>
        <div 
            class="fixed-open"
            :class="{'fixed-out': btn_out, 'dsn': !content_out}"
            @click="btn_click">
            <i></i>   
        </div>
    </div>
    
</template>

<script>

import Lib from 'assets/lib.js';

export default {
    data(){
        return {
            //内容
            content_out: true,
            //弹出按钮
            btn_out: false,
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
        //内容部分点击
        content_click(){
            this.content_out = true;
            setTimeout(() => {
                this.btn_out = false;
            }, 600)
        },
        //弹出按钮部分点击
        btn_click(){
            this.btn_out = true;
            setTimeout(() => {
                this.content_out = false;
            }, 600)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';

    .fixed-wrapper{
        width: 100%;
        background: rgba(5,18,35,0.9);
        transition: all cubic-bezier(0.42, 0, 0.26, 1) 0.6s;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;

        &-content{
            position: relative;
            width: 980px;
            height: 176px;
            margin: 0 auto;
            overflow: hidden;

            .fixed-img{
                width: 480px;
                position: absolute;
                left: 0;
                bottom: 0;
            }

            .fixed-info{
                height: 100%;
                position: absolute;
                top: 0;
                left: 480px;
                padding-left: 16px;
                background: rgba(255,255,255,0.2);
                font-size: 0;

                &-form{
                    #display_type > .dsp-top;
                    width: 290px;
                    height: 100%;
                    color: #fff;
                    padding-top: 14px;
                    box-sizing: border-box;

                    .title{
                        font-size: 18px;
                        line-height: 27px;
                        margin-bottom: 12px;
                        .skip{
                            font-size: 12px;
                            float: right;
                            cursor: pointer;
                        }
                    }
                    .substr{
                        font-size: 12px;
                        line-height: 18px;
                        margin-bottom: 5px;
                    }
                    .phone-input{
                        width: 270px;
                        height: 38px;
                        font-size: 16px;
                        line-height: 38px;
                        color: #333;
                        outline: none;
                        padding: 0 10px;
                        margin-bottom: 6px;
                        // box-sizing: border-box;
                    }

                    .code-group{
                        width: 290px;
                        height: 38px;
                        font-size: 0;
                        line-height: 38px;

                        input{
                            width: 110px;
                            height: 100%;
                            font-size: 16px;
                            color: #333;
                            outline: none;
                            padding: 0 10px;
                        }
                        .code{
                            #display_type > .dsp-top;
                            width: 70px;
                            height: 100%;
                            font-size: 14px;
                            text-align: center;
                            background-color: gray;
                        }

                        button{
                            width: 85px;
                            height: 100%;
                            text-align: center;
                            background: #f90;
                            color: #fff;
                            font-size: 16px;
                            cursor: pointer;
                            float: right;
                        }

                    }
                }
                &-qrcode{
                    #display_type > .dsp-top;
                    width: 115px;
                    height: 100%;
                    color: #fff;
                    padding-top: 20px;
                    box-sizing: border-box;
                    margin: 0 14px 0 20px;

                    .title{
                        font-size: 12px;
                        line-height: 1.5;
                        text-align: center;
                        margin-bottom: 5px;
                    }
                    .qrcode{
                        width: 115px;
                        height: 115px;
                        line-height: 115px;
                        font-size: 14px;
                        text-align: center;
                        background-color: gray;
                    }
                }
            }

            .fixed-btn{
                position: absolute;
                top: 10px;
                right: 0;
                font-size: 38px;
                line-height: 1.2;
                color: #9aa1a8;
                cursor: pointer;
            }
        }

        &.fixed-out{
            left: -100%;
        }

    }

    .fixed-open{
        width: 127px;
        position: fixed;
        left: 0;
        bottom: 55px;
        transition: all ease-out 0.6s;
        cursor: pointer;
        z-index: 999;

        i{
            width: 127px;
            height: 136px;
            display: inline-block;
            background-image: url('http://images4.c-ctrip.com/img3/marketing/2015/12/float_pc_system/fl_open_wrap.png');
        }

        &.fixed-out{
            left: -127px;
        }
    }



    
    
</style>
