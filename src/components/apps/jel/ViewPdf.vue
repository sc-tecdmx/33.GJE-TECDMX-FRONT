<template>
    <div>
        <iframe :src="pdfUrl" width="100%" height="600px"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'ViewPdf',
        props: {
            pdfUrl: {
            type: String,
            required: true
            }
        },
        computed: {
            pdfSrc() {
            return require('src/assets/pdf/demanda.pdf');
            }
        }

    }
</script>
