<template>
    <dl class="entrance-group">
        <dt class="entrance-group-title">{{sidebar.title}}</dt>
        <dd 
            class="entrance-group-item" 
            :title="el"
            v-for="el in sidebar.list">{{el}}</dd>
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

        &-title{
            width: 100%;
            height: 38px;
            line-height: 38px;
            font-size: 14px;
            font-weight: 700;
        }

        &-item{
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &:hover{
                cursor: pointer;
                color: #3983e6;
            }
        }
    }
</style>
