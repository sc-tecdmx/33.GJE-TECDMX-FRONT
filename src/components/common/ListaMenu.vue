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
  
<script>
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
</script>
IconBase

<style lang="scss" scoped>

    
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
</style>