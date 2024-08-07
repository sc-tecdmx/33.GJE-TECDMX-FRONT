<template>
    <li :class="liClass">
        <router-link :class="aClass" :to="rutaName">

                <icon-base
                :iconClass="iconClass"
                />
                {{ texto }}
                <span :class="spanClass">{{ slash }}</span>
                
        </router-link>
    </li>
</template>
  
<script setup lang="ts">

    import { defineProps } from 'vue';
    import IconBase from './IconBase.vue';


    const props = defineProps<{
    iconClass: string;
    rutaName: string;
    texto: string;
    liClass: string;
    aClass: string;
    slash: string;
    spanClass: string;
    }>();
</script>


<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/var";
        
    .li {
            list-style: none;
            margin-top: $margin-sm;
            margin-bottom: $margin-sm;
        }

        .li-icon {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        .a {
            padding: 10px 3px 10px 3px;
        }

        .li-mleft {
            list-style: none;
            margin-top: $margin-sm;
            margin-bottom: $margin-sm;
            font-size: 0px;
            position: relative;
            left: -100px;
            transition: left .5s;
        }
        .li-mleft:hover {
            background: $bg-dark;
            border-radius: 10px;
            width: 170px;
            position: relative;
            color: $white;
            left: 0px;
        }

        .li-m {
         top: 32px;
        }

        .li-m1 {
            top: 61px;
        }

        .li-m2 {
            top: 93px;
        }

        .li-m3 {
            top: 121px;
        }

        .li-m4 {
            top: 150px;
        }

        .li-m5 {
            top: 180px;
        }

        .a-transparent {
            font-size: 0px;
            transition: left 1s;
            font-weight: lighter!important;
        }

        .a-transparent:hover {
            font-size: $text-sm;
            position: relative;
            font-weight: 100!important;
            left: 20px;
            color: $white;
        }
        
        .ml-gen {
            padding: 5px;
            padding-left: $padding-mdl;
            padding-right: $padding-mdl;
            color: $color-c;
            font-size: $text-lg;
        }

        .ml {
            top: 9px;
            left: $left-9;
        }

        .ml1 {

            top: 56px;
            left: $left-9;
        }

        .ml2 {
            top: 102px;
            left: $left-9;
        }

        .ml3 {
            top: 148px;
            left: $left-9;
        }

        .ml4 {
            top: 194px;
            left: $left-9;
        }

        .ml5 {
            top: 240px;
            left: $left-9;
        }

        .ml6 {
            top: 286px;
            left: $left-9;
        }
        
        .col {
            color: $icon-color;
        }

        .span {
            padding: 0px 5px 0px 5px;
            color: $icon-color;
            text-decoration: none;
        }

        .text {
            font-size: $text-md;
        }

        .text-sm {
            font-size: $text-sm;
        }

        @media screen and (max-width: 992px){
        .a-none {
            font-size: 0px!important;
        }
    }

    @media screen and (max-width: 567px) {

        .ml{
            top: $top100;
            left: 0px!important;
        }

        .ml1{
            top: $top100;
            left: 48px!important;
        }

        .ml2 {
            top: $top100;
            left: 96px!important;
        }

        .ml3 {
            top: $top100;
            left: 144px!important;
        }
        
        .ml4 {
            top: $top100;
            left: 192px!important;
        }

        .ml5 {
            top: $top100;
            left: 240px!important;
        }

        .ml6 {
            top: $top100;
            left: 288px!important;
        }

    }

</style>