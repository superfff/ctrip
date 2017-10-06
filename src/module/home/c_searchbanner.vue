<template>
    <div 
        class="searchbanner-wrapper" 
        @mouseover="stop_interval" 
        @mouseout="(img_interval(img_cur_flag))">
        <div class="searchbanner-ad" >
            <a :href="img_cur" target="_blank">
                <img class="searchbanner-ad-img" :src="img_cur" alt="ctrip">
            </a>
            <ul class="searchbanner-ad-dot">
                <li 
                    class="dot-item" 
                    :class="{'cur-active': index === img_cur_flag}"
                    v-for="(d, index) in img_data" 
                    @mouseover="change_img(index)"></li>
            </ul>
        </div>

        <div style="width: 500px; height: 30px; background-color: pink;"></div>

        <div class="searchbanner-search">
            <div class="content-wrapper">
                <div class="search-wrapper">
                    <ul class="search-nav">
                        <li 
                            class="search-nav-item" 
                            :class="{'nav-active': nav_cur_flag === nav_index}"
                            v-for="(n,nav_index) in nav_data"
                            @click="nav_click(n, nav_index)">
                            <span class="title">{{n}}</span>
                        </li>
                    </ul>
                    <div class="search-content">
                        <ul class="search-content-nav">
                            <li 
                                class="nav-item" 
                                :class="{'nav-item-active': second_nav_flag === hindex}"
                                @click="second_nav_click(hindex)"
                                v-for="(hn,hindex) in hotel_nav">{{hn}}</li>
                            <!-- <li class="nav-item">海外酒店</li>
                            <li class="nav-item">酒店团购</li>
                            <li class="nav-item">酒店+景点</li>
                            <li class="nav-item">会议·团房·长住</li> -->
                        </ul>
                        <div class="search-content-wrapper">
                            <div class="content-group">
                                <p class="info">这一块太复杂 - - (神奇的占位符)</p>
                            </div>
                        </div>
                        <div class="search-content-btn">
                            <button>搜索</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';
import mock_data from 'assets/js/mock.js';

//定时器标识
var interval_flag;

export default {
    data(){
        return {
            //ad图片集合
            img_data: [],
            //当前图片地址
            img_cur: '',
            //当前图片索引
            img_cur_flag: 0,

            //导航栏数据
            nav_data: ['酒店','机票','自由行','旅游','火车','用车','门票'],
            nav_cur_flag: 0,

            //酒店搜索栏/导航数据
            hotel_nav: ['国内酒店','海外酒店','酒店团购','酒店+景点','会议·团房·长住'],
            second_nav_flag: 0,
        }
    },
    created(){
        this.img_data = mock_data.adImg;
        this.img_cur = mock_data.adImg[0];

        //触发计时器
        this.img_interval(0);

    },
    methods: {
        change_img(index){
            this.img_cur = this.img_data[index];
            this.img_cur_flag = index;
        },
        //计时器启动
        img_interval(val){
            var cur = val + 1;

            if(cur === this.img_data.length){
                cur = 0;
            }

            interval_flag = setInterval(() => {
                this.img_cur_flag = cur;
                this.img_cur = this.img_data[cur];

                if(cur < this.img_data.length - 1){
                    cur++;
                }
                else{
                    cur = 0;
                }
            }, 4000)
        },
        //停止计时器
        stop_interval(){
            clearInterval(interval_flag);
        },
        //导航栏点击
        nav_click(name, index){
            this.nav_cur_flag = index;
        },
        //二级导航栏点击
        second_nav_click(index){
            this.second_nav_flag = index;
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .searchbanner-wrapper{
        width: 100%;
        height: 340px;
        overflow: hidden;
        position: relative;

        .searchbanner-ad{
            // width: 100%;
            min-width: 980px;
            height: 100%;
            font-size: 0;
            position: relative;
            cursor: pointer;

            &-img{
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -960px;
                z-index: 4;
            }

            &-dot{
                display: inline-block;
                position: absolute;
                bottom: 30px;
                right: 300px;
                z-index: 5;
                .dot-item{
                    width: 8px;
                    height: 8px;
                    display: inline-block;
                    background-color: rgba(0,0,0,.2);
                    border: 2px solid #fff;
                    border-radius: 50%;
                    margin: 0 4px;
                    transition: background linear .2s;
                    cursor: default;

                    &.cur-active{
                        background-color: #fff;
                    }
                }

                @media screen and (max-width: 1200px) {
                    right: 150px;
                }
            }
        }

        .searchbanner-search{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;

            .content-wrapper{
                height: 100%;
            }

            .search-wrapper{
                height: 300px;
                position: absolute;
                top: 50%;
                margin-top: -150px;
                display: flex;
                z-index: 10;

                .search-nav{
                    flex: 0 0 90px;
                    width: 90px;
                    height: 100%;
                    background-color: #2577e3;
                    &-item{
                        height: 42px;
                        line-height: 42px;
                        box-sizing: border-box;
                        border-left: 4px solid transparent;
                        padding-left: 15px;
                        cursor: pointer;

                        .title{
                            width: 50px;
                            display: inline-block;
                            font-size: 16px;
                            color: #fff;
                            font-weight: bold;
                            border-bottom: 1px dashed #fff;
                        }

                        &.nav-active,
                        &:hover{
                            border-left: 4px solid #ff9915;
                            background-color: #fff;

                            .title{
                                color: #2577e3;
                            }
                        }

                        &.nav-active{
                            cursor: default;
                        }

                        &:last-child{
                            .title{
                                border-bottom: none;
                            }
                        }
                    }
                }
                .search-content{
                    flex: 1;
                    width: 450px;
                    height: 100%;
                    background-color: #fff;
                    box-sizing: border-box;
                    padding: 20px 20px 0;
                    position: relative;

                    &-nav{
                        width: 100%;
                        height: 25px;
                        border-bottom: 2px solid #c4c4c4;
                        margin-bottom: 8px;

                        .nav-item{
                            font-size: 14px;
                            font-weight: bold;
                            display: inline-block;
                            height: 25px;
                            line-height: 25px;
                            color: #666;
                            position: relative;
                            margin-right: 15px;
                            cursor: pointer;

                            &:last-child{
                                margin-right: 0;
                            }

                            &:hover{
                                color: #06c;
                            }

                            &.nav-item-active{
                                color: #06c;
                                border-bottom: 2px solid #0066cc;
                                &:after{
                                    content: '';
                                    display: inline-block;
                                    border-top: 3px solid #0066cc;
                                    border-left: 3px solid transparent;
                                    border-right: 3px solid transparent;
                                    border-bottom: 3px solid transparent;
                                    position: absolute;
                                    bottom: -8px;
                                    left: 50%;
                                    margin-left: -3px;
                                }
                            }

                            

                            
                        }
                    }

                    &-wrapper{
                        .content-group{
                            width: 100%;
                            height: 160px;
                            line-height: 160px;
                            font-size: 14px;
                            text-align: center;
                            color: #666;
                            background-color: #e0e0e0;
                        }
                    }

                    &-btn{
                        position: absolute;
                        bottom: 20px;
                        right: 20px;

                        button{
                            width: 145px;
                            height: 33px;
                            color: #fff;
                            font-size: 16px;
                            text-align: center;
                            text-shadow: 1px 1px 0 #cf7000;
                            background-color: #ffb000;
                            border: solid 1px #e77c00;
                            border-radius: 3px;
                            box-shadow: 0 1px 0 rgba(95, 50, 0, 0.7);
                            cursor: pointer;

                            &:hover{
                                background-color: #f79700;
                                border-color: #de7800;
                            }
                        }
                    }
                }
            }

        }

        
    }
</style>
