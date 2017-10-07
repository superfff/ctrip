<template>
    <div class="product-detail-wrapper">
        <div class="content-wrapper">
            <!-- 特卖汇模块 -->
            <selling :active="active_flag >= 0"></selling>
            <!-- 酒店模块 -->
            <hotel :active="active_flag >= 1"></hotel>
            <!-- 机票模块 -->
            <ticket :active="active_flag >= 2"></ticket>
            <!-- 租车模块 -->
            <hire-car :active="active_flag >= 3"></hire-car>
            <!-- 当地玩乐模块 -->
            <play :active="active_flag >= 4"></play>
            <!-- 全球购 -->
            <global :active="active_flag >= 5"></global>
            <!-- 攻略模块 -->
            <guild :active="active_flag >= 6"></guild>
            <!-- 旅行服务 -->
            <detail-service class="scroll-hook"></detail-service>
            <!-- 最下面部分(各种入口) -->
            <detail-skip></detail-skip>
        </div>

        <ul class="lift-wrapper" :style="`top:${lift_top}px;`">
            <li 
                class="lift-item" 
                :class="[lift.index,  {'lift-active': (lift_index === lift_flag)}]"
                v-for="(lift,lift_index) in d"
                @click="lift_click(lift_index)">
                <span class="skip">{{lift.name}}</span>
            </li>
        </ul>   
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

//酒店
import hotel from './detail/hotel'
//特卖汇
import selling from './detail/selling'
//机票模块
import ticket from './detail/ticket'
//租车
import hireCar from './detail/hire_car'
//当地玩乐
import play from './detail/play'
//全球购
import global from './detail/global'
//攻略
import guild from './detail/guild'
//旅游服务模块
import detailService from './detail_service'
//快捷入口模块
import detailSkip from './detail_skip'


export default {
    data(){
        return {

            //滚动监控
            scroll_data: [],
            //左边导航栏高度
            lift_top: 0,

            d: [
                {name: '旅游',index: 'travel'},
                {name: '酒店',index: 'hotel'},
                {name: '机票',index: 'ticket'},
                {name: '用车',index: 'hire'},
                {name: '玩乐',index: 'play'},
                {name: '购物',index: 'purchase'},
                {name: '攻略',index: 'guide'},
                {name: '服务',index: 'service'},

            ],
            lift_flag: 0,

            //激活标识
            active_flag: 0

        }
    },
    components: {
        hotel,
        selling,
        ticket,
        hireCar,
        play,
        global,
        guild,
        detailService,
        detailSkip

    },
    props: {
        //滚动高度
        scrollNum: {
            type: Number,
            default: 0
        }
    },
    created(){
       
    },
    mounted(){
        const s = document.getElementsByClassName('scroll-hook');
        console.dir(s);


        for(let dom of s){
            let scoll_h = dom.offsetTop + dom.offsetParent.offsetTop;
            this.scroll_data.push(scoll_h);
        }

        this.lift_top = this.scroll_data[0];

    },
    watch: {
        scrollNum(val){

            let inner_h = window.innerHeight;
            
            let new_h = this.scroll_data[0] - val;
            if(new_h > 200){
                this.lift_top = new_h
            }
            else{
                this.lift_top = 200;
            }

            //返回当前滚动标识
            for(let i of this.scroll_data){
                if((this.scrollNum + inner_h) < i){

                    let num = this.scroll_data.indexOf(i);

                    if(!num){
                        this.active_flag = num;
                    }
                    else{
                        this.active_flag = num - 1;
                    }

                    break;
                }
            }

            //当滚动高度超过时
            if((this.scrollNum + inner_h) > this.scroll_data[this.scroll_data.length - 1]){
                this.active_flag = this.scroll_data.length;
            }

            //判断电梯高度
            if(val<this.scroll_data[1]){
                this.lift_flag = 0;
            }
            else if(val>=this.scroll_data[1] && val<this.scroll_data[2]){
                this.lift_flag = 1;
            }
            else if(val>=this.scroll_data[2] && val<this.scroll_data[3]){
                this.lift_flag = 2;
            }
            else if(val>=this.scroll_data[3] && val<this.scroll_data[4]){
                this.lift_flag = 3;
            }
            else if(val>=this.scroll_data[4] && val<this.scroll_data[5]){
                this.lift_flag = 4;
            }
            else if(val>=this.scroll_data[5] && val<this.scroll_data[6]){
                this.lift_flag = 5;
            }
            else if(val>=this.scroll_data[6] && val<this.scroll_data[7]){
                this.lift_flag = 6;
            }
            else if(val>=this.scroll_data[7]){
                this.lift_flag = 7;
            }

        }
    },
    methods: {
        lift_click(index){
            this.lift_flag = index;
            var cur_top = Lib.C.getScrollTop();
            //滚动
            Lib.C.page_scroll_to(cur_top, this.scroll_data[index]);

        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';

    .product-detail-wrapper{
        width: 100%;
        background-color: #f6f6f6;
        padding-top: 28px;
        padding-bottom: 40px;
    }

    .lift-wrapper{
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -630px;
        opacity: 1;
        transition: all linear .3s;
        .lift-item{
            width: 36px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 0;
            color: transparent;
            cursor: pointer;
            background-image: url('http://pic.c-ctrip.com/index/un_icon_leftnav.png');
            background-repeat: no-repeat;
            background-position-x: center;
            margin-bottom: 1px;

            .skip{
                font-size: 12px;
                display: inline-block;
                border-bottom: 1px solid #e0e0e0;
            }

            &:hover{
                color: #fff;
                background: #3882e5;
            }
            &:last-child{
                .skip{
                    border-bottom: none;
                }
            }
            
            // 图案
            &.travel{
                background-position-y: 0;
            }
            &.hotel{
                background-position-y: -40px;
            }
            &.ticket{
                background-position-y: -80px;
            }
            &.hire{
                background-position-y: -120px;
            }
            &.play{
                background-position-y: -160px;
            }
            &.purchase{
                background-position-y: -200px;
            }
            &.guide{
                background-position-y: -240px;
            }
            &.service{
                background-position-y: -280px;
            }

            &.lift-active{
                cursor: default;
                background: none;
                color: #3882e5;
            }
        }

        @media screen and (min-width: 1200px) and (max-width: 1300px){
            opacity: 0;
        }

        @media screen and (max-width: 1200px){
            opacity: 1;
            margin-left: -530px;
        }

        @media screen and (max-width: 1100px){
            opacity: 0;
        }
    }
    
</style>
