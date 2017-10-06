<template>
    <div id="home-wrapper">
        <c-header></c-header>
        <c-nav></c-nav>
        <c-entrance></c-entrance>
        <c-sb></c-sb>
        <c-pd :scroll-num="scroll"></c-pd>
        <c-footer></c-footer>
        <c-fixedbox></c-fixedbox>
    </div>
</template>

<script>

import Lib from 'assets/lib.js';

import cHeader from './c_header'
import cNav from './c_nav'
import cEntrance from './c_entrance'
import cSb from './c_searchbanner'
import cPd from './c_pdetail'
import cFooter from './c_footer'
import cFixedbox from './c_fixedbox'

export default {
    components: {
        cHeader,
        cNav,
        cEntrance,
        cSb,
        cPd,
        cFooter,
        cFixedbox
    },
    data(){
        return {
            //滚动量
            scroll: 0
        }
    },
    created(){
    },
    mounted(){
        //绑定方法
        window.addEventListener('scroll', this.throttle(this.windowScroll, 200));
    },
    methods: {
        windowScroll(){
            this.scroll = document.documentElement.scrollTop;
        }
    }
}
</script>

<style lang="less" scoped>
    // @import '~assets/less/common.less';
    #home-wrapper{
        min-width: 980px;
    }
</style>
