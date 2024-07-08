<template>
    <div>
        <ul>
            <li v-for="tematica in tematicas" :key="tematica.id">
                {{ tematica.s_tematica }}
                <button @click="edit(tematica)">Editar</button>
                <button @click="remove(tematica.n_id_tematica)">Borrar</button>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({ tematicas: Array })
/* defineProps<{
    tematicas?: Array
    isEditing: boolean
}> */
/* const emit = defineEmits<{
    (e: 'edit', tematica: any): void
    (e: 'remove', id: any): void
}>() */
/*
const emit = defineEmits(['edit'], ['remove'])
const edit = (tematica) => emit('edit', tematica)
const remove = (id) => emit('remove', id)
*/

const emit = defineEmits(['edit'], ['remove'])

</script>