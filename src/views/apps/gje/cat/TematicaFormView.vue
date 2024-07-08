<template>
  <form @submit.prevent="handleSubmit">
    <FormKit type="text" v-model="form.title" placeholder="Title" />
    <button type="submit">{{ isEditing ? 'Update' : 'Add' }} Todo</button>
  </form>
</template>
<script setup lang="ts">

import { ref, watch } from 'vue';
import { FormKit } from '@formkit/vue';

/* defineProps<{ initialValues?: Objetct }> */
const props = defineProps({
  initialValues: { type: Object, default: () => ({ title: '' }) },
  isEditing: { type: Boolean, default: false }
})

const emit = defineEmits(['submit'])
/*
const form = ref(createFormKit({
  title: props.props.title,
})); */
/*
const form = ref(createFormKit({
  title: props.initialValues.title,
}));
*/
/*
watch(
  () => props.initialValues,
  (newVal) => {
    form.value = createFormKit(newVal);
  }
);
*/
const handleSubmit = () => {
  emit('submit', form.value);
};

</script>