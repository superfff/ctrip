<template>
    <header class="header-wrapper">
        <div class="content-wrapper">
            <div class="logo-wrapper">
                <img :src="logo" alt="携程官网">
            </div>
            <div class="input-wrapper" :class="{'active': inputFlag}">
                <input 
                    type="text" 
                    placeholder="携程在手,说走就走" 
                    @focus="input_focus" 
                    @blur="input_blur">
                <button id="top_search_btn"></button>
            </div>
            <div class="top-tool">
                <div class="languages-wrapper">
                    <span class="languages-title">
                        <i class="tool-logo logo-global"></i>
                        <span class="title">Global Sites</span>
                        <i class="arrow-down"></i>
                    </span>
                    <ul class="languages-content">
                        <li class="country-item" v-for="c in languages_country">
                            <i class="country-logo" :data-country="c.index"></i>{{c.name}}
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <span class="title">客服中心</span>
                </div>

                <div class="tel-wrapper">
                    <span class="tel-title">
                        <span>国内：<span class="tel-num">400-830-6666</span></span>
                        <i class="arrow-down"></i>
                    </span>
                    <ul class="tel-content">
                        <li class="tel-content-item">（或）<span class="tel-num">400-820-6666</span></li>
                        <li class="tel-content-item">香港：<span class="tel-num">+ 852-3069-9966</span></li>
                        <li class="tel-content-item">海外：<span class="tel-num">+ 86-21-3406-4888</span></li>
                    </ul>
                </div>

                <div class="phone-wrapper">
                    <i class="tool-logo logo-phone"></i>
                    <div class="qrcode-wrapper">
                        <div class="phone-content">
                            <div class="detail">
                                <p class="title">手机扫码快速下载</p>
                                <img :src="phoneImg" alt="携程官网">
                            </div>
                            <p class="desc">携程旅行手机版 ></p>
                        </div>
                        <i class="tool-logo qrcode-wrapper-arrow"></i>
                    </div>
                </div>
                <div class="wx-wrapper">
                    <i class="tool-logo logo-wx"></i>
                    <div class="qrcode-wrapper">
                        <div class="phone-content">
                            <div class="detail">
                                <p class="title">携程订阅号:helloctrip</p>
                                <img :src="wxImg" alt="携程官网">
                            </div>
                            <p class="desc">扫一扫,领旅行福利</p>
                        </div>
                        <i class="tool-logo qrcode-wrapper-arrow"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import Lib from 'assets/lib.js';
import mock_data from 'assets/js/mock.js';

export default {
    data(){
        return {
            logo: '',
            //input框焦点标识
            inputFlag: false,
            //导航栏手机logo标识
            phoneFlag: false,
            phoneImg: '',
            //导航栏微信logo标识
            wxFlag: false,
            wxImg: '',
            //国家数据
            languages_country: [
                {name:'香港（繁体）', index: 'HK'},
                {name:'Hong Kong(English)', index: 'HK'},
                {name:'English', index: 'UK'},
                {name:'日语版', index: 'JP'},
                {name:'韩语版', index: 'KR'},
                {name:'Singapore', index: 'SP'},
                {name:'Bahasa Indonesia', index: 'ID'},
                {name:'Bahasa Malaysia', index: 'MY'},
                {name:'ภาษาไทย', index: 'TH'},
                {name:'Français', index: 'FR'},
                {name:'Deutsch', index: 'GR'},
                {name:'Español', index: 'ES'},
                {name:'Русский', index: 'RU'}
            ]
        }
    },
    created(){
        console.log(mock_data);
        //logo图片
        this.logo = mock_data.logo_img;
        this.phoneImg = mock_data.phone_qrcode;
        this.wxImg = mock_data.wx_qrcode;


    },
    methods: {
        input_focus(){
            this.inputFlag = true;
        },
        input_blur(){
            this.inputFlag = false;
        },
        phone_content_show(){
            console.log(1);
        },
        fff(){
            console.log('out');
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';

    .header-wrapper{
        background-color: #fff;

        .content-wrapper{
            z-index: 10;
        }

        .logo-wrapper{
            display: inline-block;
            width: 126px;
            height: 43px;
            margin: 10px 0;
            cursor: pointer;
        }

        .input-wrapper{
            height: 28px;
            font-size: 12px;
            position: absolute;
            top: 18px;
            left: 170px;

            &.active{
                input{
                    border-color: #2577e3;
                }
                button{
                    background-color: #2b82f4;
                    background-position-y: -628px;
                }
            }

            input{
                width: 300px;
                height: inherit;
                float: left;
                box-sizing: border-box;
                box-shadow: 2px 2px 1px 0 rgba(164, 203, 255, 0.25) inset;
                outline: 0 none;
                padding: 0 10px;
                border-radius: 4px 0 0 4px;
                border: 1px solid #8ebefc;
                border-right: none;
            }
            button{
                width: 40px;
                height: inherit;
                border: none;
                outline: none;
                background-color: #a4cbff;
                background-image: url('http://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png');
                background-position: -53px -603px;
                background-repeat: no-repeat;
                border-radius: 0 4px 4px 0;
                &:hover{
                    background-color: #299cff;
                    background-position-y: -653px;
                }
                &:active{
                    opacity: .8;
                }
            }
            
        }

        .top-tool{
            position: absolute;
            top: 10px;
            right: 0;

            .tool-logo{
                display: inline-block;
                margin-right: 5px;
                background-image: url('http://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png');
                background-repeat: no-repeat;
            }

            .languages-wrapper{
                #display_type > .dsp-middle;
                position: relative;
                padding: 3px 3px 0 3px;
                top: 4px;
                z-index: 2;
                
                .languages-title{
                    display: inline-block;
                    padding: 5px 11px;
                    background: #fff;

                    .logo-global{
                        #display_type > .dsp-middle;
                        width: 16px;
                        height: 16px;
                        background-position: -64px 0;
                    }
                    .title{
                        #display_type > .dsp-middle;
                        font-size: 12px;
                    }
                    .arrow-down{
                        #display_type > .dsp-middle;
                        .arrow_down(4px);
                    }
                }

                .languages-content{
                    display: none;
                    width: 148px;
                    // height: 100px;
                    background-color: #fff;
                    position: absolute;
                    box-shadow: 0px 0px 0px 3px #e4e7eb;
                    top: 29px;
                    z-index: -1;
                    .country-item{
                        width: 140px;
                        height: 20px;
                        line-height: 20px;
                        border-bottom: 1px dotted #e4e7eb;
                        margin: 0 auto;
                        padding: 4px 0;
                        font-size: 12px;

                        .country-logo{
                            #display_type > .dsp-top;
                            width: 25px;
                            height: 20px;
                            background-image: url('http://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png');
                            background-repeat: no-repeat;
                        }
    
                        //国家国旗
                        [data-country = 'HK']{
                            background-position: 0 -316px;
                        }
                        [data-country = 'UK']{
                            background-position: -61px -468px;
                        }
                        [data-country = 'JP']{
                            width: 20px;
                            background-position: 0 -430px;
                        }
                        [data-country = 'KR']{
                            width: 20px;
                            background-position: 0 -449px;
                        }
                        [data-country = 'SP']{
                            background-position: 0px -392px;
                        }
                        [data-country = 'ID']{
                            background-position: 0px -373px;
                        }
                        [data-country = 'MY']{
                            background-position: 0px -354px;
                        }
                        [data-country = 'TH']{
                            background-position: 0px -335px;
                        }
                        [data-country = 'FR']{
                            background-position: -61px -503px;
                        }
                        [data-country = 'GR']{
                            background-position: -61px -485px;
                        }
                        [data-country = 'ES']{
                            background-position: -61px -520px;
                        }
                        [data-country = 'RU']{
                            background-position: 0 -35px;
                        }

                        &:last-child{
                            border-bottom: none;
                        }

                        &:hover{
                            background-color: #f5f5f5;
                        }
                    }
                }

                &:hover{
                    background: #e4e7eb;
                    .languages-content{
                        display: block;
                    }
                    .arrow-down{
                        transform: rotate(180deg);
                        transform-origin: 4px 2px;
                    }
                }
            }
            .service{
                #display_type > .dsp-middle;
                margin: 0 4px;
                padding: 5px 0;
                position: relative;
                .title{
                    font-size: 12px;
                    padding: 0 10px;
                    border-left: 1px solid #b2b2b2;
                    border-right: 1px solid #b2b2b2;
                    cursor: pointer;
                    margin-top: 11px;
                    display: inline-block;

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
            .tel-wrapper{
                #display_type > .dsp-middle;
                position: relative;
                padding: 3px 3px 0 3px;
                top: 4px;
                z-index: 2;
                
                .tel-title{
                    display: inline-block;
                    padding: 5px 11px;
                    background: #fff;
                    font-size: 12px;
                    .tel-num{
                        color: @service_blue;
                    }
                    .arrow-down{
                        display: inline-block;

                        .arrow_down(4px, @service_blue);
                    }
                }
                .tel-content{
                    display: none;
                    width: 180px;
                    // height: 100px;
                    padding-top: 5px;
                    background-color: #fff;
                    position: absolute;
                    box-shadow: 0px 0px 0px 3px #e4e7eb;
                    top: 25px;
                    z-index: -1;

                    &-item{
                        padding-left: 5px;
                        height: 23px;
                        line-height: 23px;
                        font-size: 12px;
                        .tel-num{
                            margin-left: 5px;
                            color: @service_blue;
                        }
                    }
                }

                &:hover{
                    background: #e4e7eb;
                    .tel-content{
                        display: block;
                    }
                    
                    .arrow-down{
                        transform: rotate(180deg);
                        transform-origin: 4px 4px;
                    }
                        
                    
                }
            }
            .phone-wrapper{
                #display_type > .dsp-middle;
                position: relative;
                margin: 0 10px;
                top: 5px;
                

                .logo-phone{
                    width: 12px;
                    height: 22px;
                    background-position: 0 -56px;
                    cursor: pointer;
                }

                .qrcode-wrapper{
                    .desc{
                        background-color: #f0f0f0;
                        &:hover{
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    }
                }
                //鼠标移入触发效果
                &:hover{
                    .logo-phone{
                        background-position: 0 -78px;
                    }
                    .qrcode-wrapper{
                        display: block;
                    }
                }
            }
            .wx-wrapper{
                #display_type > .dsp-middle;
                position: relative;
                top: 5px;
                .logo-wx{
                    width: 20px;
                    height: 23px;
                    background-position: -20px -55px;
                }

                &:hover{
                    .logo-wx{
                        background-position-y: -77px;
                    }
                    .qrcode-wrapper{
                        display: block;
                        right: 3px;
                    }
                }
                
            }
            //电话logo和微信logo公用的框
            .qrcode-wrapper{
                display: none;
                position: absolute;
                right: 0;
                top: 27px;
                .phone-content{
                    width: 156px;
                    height: 218px;
                    background: #fff;
                    border: 1px solid #b8b8b8;
                    box-shadow: 0px 0px 0px 2px #e4e7eb;
                    display: flex;
                    flex-direction: column;
                    .detail{
                        flex: 1;
                        text-align: center;
                        .title{
                            color: @service_blue;
                            font-size: 12px;
                            padding: 18px 0;
                        }
                    }
                    .desc{
                        flex: 0 0 38px;
                        width: 100%;
                        height: 38px;
                        line-height: 38px;
                        text-align: center;
                        // background-color: #f0f0f0;
                        font-size: 12px;
                    }
                }
                .qrcode-wrapper-arrow{
                    width: 13px;
                    height: 9px;
                    background-position: 0 -271px;
                    position: absolute;
                    right: 0;
                    top: -8px;
                }
            }
        }
    }
</style>
