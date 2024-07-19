<template>
    <h5 class="text-start fs-6 ms-5 ps-1 fw-bold lh-1 ">{{ data }}</h5>
</template>

<script>
    export default {
        name: 'T5Component',
        props: {
            data: {
                titulo: String
            }
        }
    }
</script>
