<template>
    <i :class="iconClass"></i>
</template>

<script>
    export default {
        name: 'IconBase',
        props: {
            iconClass: {
                type: String,
                required: true
                }
        }
    }
</script>

<style lang="scss" scoped>


</style>