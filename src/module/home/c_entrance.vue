<template>
    <div class="entrance-wrapper">
        <ul class="content-wrapper">
            <div class="entrance-middle-div"></div>
            <li class="entrance-title">国际旅行直通车</li>
            <li class="entrance-item" v-for="c in entrance_item" :data-index="c.index">
                <i class="entrance-item-icon"></i>
                <span class="entrance-item-title">{{c.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

export default {
    data(){
        return {
            entrance_item: [
                {name:'海外酒店', index:'海外酒店'},
                {name:'国际机票', index:'国际机票'},
                {name:'国际租车', index:'国际租车'},
                {name:'国际·台湾火车票', index:'国际车票'},
                {name:'出境旅游', index: '出境旅游'},
                {name:'高端游', index:'高端游'},
                {name:'海外门票', index:'海外门票'},
                {name:'签证', index:'签证'},
                {name:'出境保险', index:'出境保险'},
                {name:'出境WiFi·电话卡', index:'出境WiFi'},
                {name:'外币兑换', index:'外币兑换'}
            ]
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
    
    .entrance-wrapper{
        width: 100%;
        height: 42px;
        background-color: #fff;

        .entrance-middle-div{
            width: 0;
            height: 42px;
            #display_type > .dsp-middle;
        }
        
        .entrance-title{
            #display_type > .dsp-middle;
            
            height: 22px;
            line-height: 22px;
            padding: 0 5px;
            background-color: #74a8ed;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            border-radius: 2px;
            position: relative;
            margin-right: 20px;

            &:after{
                content: '';
                position: absolute;
                top: 8px;
                right: -8px;
                border-top: 4px solid transparent;
                border-left: 4px solid #74a8ed;
                border-right: 4px solid transparent;
                border-bottom: 4px solid transparent;
            }
        }

        .entrance-item{
            #display_type > .dsp-middle;
            margin-right: 20px;
            &-icon{
                #display_type > .dsp-middle;
                width: 16px;
                height: 16px;
                background-image: url('http://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png');
                background-repeat: no-repeat;
                margin-right: 3px;
            }
            &-title{
                #display_type > .dsp-middle;
                font-size: 12px;
                color: #666;

                &:hover{
                    cursor: pointer;
                    color: #3983e5;
                }
            }
        }
        [data-index='海外酒店']{
            .entrance-item-icon{
                background-position: -26px 0;
            }
        }
        [data-index='国际机票']{
            .entrance-item-icon{
                background-position: 0 0;
            }
        }
        [data-index='国际租车']{
            .entrance-item-icon{
                width: 17px !important;
                background-position: -130px 0;
            }
        }
        [data-index='国际车票']{
            .entrance-item-icon{
                background-position: -52px 0;
            }
        }
        [data-index='出境旅游']{
            .entrance-item-icon{
                background-position: -26px -52px;
            }
        }
        [data-index='高端游']{
            .entrance-item-icon{
                background-position: -104px -26px;
            }
        }
        [data-index='海外门票']{
            .entrance-item-icon{
                background-position: -26px -26px;
            }
        }
        [data-index='签证']{
            .entrance-item-icon{
                background-position: 0 -52px;
            }
        }
        [data-index='出境保险']{
            .entrance-item-icon{
                background-position: -78px -26px;
            }
        }
        [data-index='出境WiFi']{
            .entrance-item-icon{
                background-position: -130px -26px;
            }
        }
        [data-index='外币兑换']{
            .entrance-item-icon{
                background-position: -24px -79px;
            }
        }

        //响应式
        @media screen and (max-width: 1200px){
            [data-index = '出境WiFi'],
            [data-index = '外币兑换'] {
                display: none;
            }
        }


    }

</style>
