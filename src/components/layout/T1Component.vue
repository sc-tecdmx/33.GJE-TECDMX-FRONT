<template>
    <h1 class="h5 text-start mt-3 text-dark p-2">{{ texto }}</h1>
</template>

<script>
    export default {
        name: 'T1Component',
        props: {
            texto: String
        }
    }
</script>

<style lang="scss" scoped>

</style>