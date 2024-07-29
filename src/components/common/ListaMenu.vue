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


    // DEFINIR TIPO DE PROPS
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

        .ml {
            padding: 5px;
            color: #F5F5F5;
            font-size: $text-lg;
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

</style>