<template>
    <dl class="entrance-group">
        <dt class="entrance-group-title">{{sidebar.title}}</dt>
        <dd class="entrance-group-item">
            <span
                class="item"
                :title="el"
                v-for="el in sidebar.list">{{el}}</span>
        </dd>
    </dl>
</template>

<script>

import Lib from 'assets/lib.js';

export default {
    data(){
        return {

        }
    },
    props:{
        sidebar: {
            type: Object,
            required: true,
            default(){
                return {}
            }
        }
    },
    created(){
        // console.log('---');
        // console.log(this.sidebar);
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    @import '~assets/less/common.less';
    
    .entrance-group{
        width: 187px;
        margin-bottom: 7px;
        overflow: hidden;

        &-title{
            width: 100%;
            height: 38px;
            line-height: 38px;
            font-size: 14px;
            font-weight: 700;
        }

        &-item{
            // width: 100%;
            margin-left: -10px;

            .item{
                padding: 0 10px;
                line-height: 18px;
                height: 18px;
                margin: 7px 0;
                font-size: 12px;
                color: #666;
                border-left: 1px solid #ececec;
                display: inline-block;
                &:hover{
                    cursor: pointer;
                    color: #3983e6;
                }
            }
        }
       
    }
</style>
