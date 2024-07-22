<template>
     <div class="bg-dark p-3 text-start rounded border-bottom text-white d-flex justify-content-between h6 div-header" @click="toggle">
      {{ title }} 
    </div>
</template>

<script>
    export default {
        name: 'HeaderDark',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

    .div-header {
        cursor: pointer;
    }

</style>