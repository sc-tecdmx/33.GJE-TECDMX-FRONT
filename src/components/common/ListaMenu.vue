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
/*
    import IconBase from '@/components/common/IconBase.vue'
    export default {
        name: 'ListaMenu',
        components: {
            IconBase
        },
        props: {
            iconClass: {
                type: String,
                required: true
            },
            rutaName: {
                type: String,
                required: true
            },
            texto: {
                type: String,
                required: true
            }, 
            liClass: {
                type: String,
                required: true
            },
            aClass: {
                type: String,
                required: true
            },
            slash: {
                type: String,
                required: true
            }, 
            spanClass: {
                type: String,
                required: true
            }

    }
}
    */

    import { defineProps } from 'vue';
    import IconBase from './IconBase.vue';


// Definición de props con tipos
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
        margin-top: 16px;
        margin-bottom: 16px;
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
        font-size: 18px;
    }
     
    .col {
        color: #2C3E50;
    }

    .span {
        padding: 0px 5px 0px 5px;
        color: #2C3E50;
        text-decoration: none;
    }

    .text {
        font-size: $text-md;
    }

    .text-sm {
        font-size: $text-sm;
    }
</style>