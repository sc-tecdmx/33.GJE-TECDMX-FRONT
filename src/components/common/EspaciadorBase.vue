<template>
    <div :style="{ width: ancho + '%', height: alto + 'px' }">

    </div>
</template>

<script>
    export default {
        name: 'EspaciadorBase',
        props: {
            ancho: {
                type: Number,
                required: false
            },
            alto: {
                type: Number,
                required: true
            }
        }
    }
</script>
