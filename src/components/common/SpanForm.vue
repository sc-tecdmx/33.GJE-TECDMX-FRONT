<template>
    <span :class="spanClass">
        <icon-base
        :iconClass="iconClass"
        />
        {{ texto }}
    </span>
</template>

<script>
    import IconBase from './IconBase.vue';
    export default {
        name: 'SpanForm',
        components: {
            IconBase
        },
        props: {
            spanClass: {
                type: String,
                required: true
            },
            iconClass:{
                type: String,
                required: true
            }, 
            texto: {
                type: String,
                required: true
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>