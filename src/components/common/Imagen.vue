<template>
    <div>
        <img :src="imageUrl" />
        {{ imageUrl }}
    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';
    import { defineProps } from 'vue'

    interface Props {
        imageUrl: string,
        width?: string,
        heigth?: string,
        urlDestino?: string
        alt?: string
        class?: string
    };

    defineProps<Props>()
</script>
