<template>
    <button 
    class="btn btn-dark float-end border-0 mt-0 mb-4" 
    type="submit"
    :style="{background: colorFondo}">
    {{ titulo }}</button>
</template>

<script>

    export default {
        name: 'BtnBase',
        props: {
            titulo: String,
            colorFondo: String
        },
}
</script>
