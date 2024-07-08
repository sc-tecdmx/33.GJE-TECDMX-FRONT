<template>
    <div class="container">
        <form @submit.prevent="submitFormulario" class="card-body">
            <h1>{{ id ? 'Editar' : 'Agregar' }} Tipo de acuerdo</h1>

            <input class="form-control mb-2" type="text" v-model="formData.nombre" placeholder="Nombre" required>
            <input type="text" placeholder="Descripción" v-model="formData.descripcion" class="form-control mb-3"
                required>
            <button :disabled="loading" class="btn btn-primary w-100">Guardar</button>
        </form>




        4 <!-- <FormKit type="form" :value=formData :submit-attrs="{-->
        <FormKit type="form" :submit-attrs="{
            inputClass: 'im-on-the-button',
            wrapperClass: 'im-on-the-wrapper',
            outerClass: 'im-on-the-outer-wrapper'
        }" @submit="submitFormulario">
            <FormKit name="n_id_tipo_acuerdo" type="hidden" />

            <FormKit type="text" name="s_tipo_acuerdo" id="s_tipo_acuerdo" label="Tipo de acuerdo" value={{
                formData.s_tipo_acuerdo }} help="edit me to get started" />
        </FormKit>
        <pre wrap>{{ JSON.stringify(formData) }}</pre>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const loading: any = ref(true);
const id: any = ref(null);
let controller: any;

let formData: any = reactive({});

onMounted(() => {
    id.value = route.params.n_id_tipo_acuerdo;
    loadFormData();
});

const loadFormData = async () => {

    console.log(' Se recibieron parámetros: [' + id.value + ']')
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;

        loading.value = true;

        let urlApiAsuntos = import.meta.env.VITE_API_GJE + "/api/gje/cat/tipo-acuerdo/" + id.value;
        console.log(urlApiAsuntos)

        const response = await fetch(urlApiAsuntos, {
            method: 'GET',
            signal: signal,
        });
        const data = await response.json();
        formData.value = data;
        console.log(formData.value)
    } catch (error) {
        console.log(error)
    }
}

const submitFormulario = async (formFields) => {
    let urlApiAsuntos = import.meta.env.VITE_API_GJE + "/api/gje/cat/tipo-acuerdo";
    try {

        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;

        console.log(formFields)
        const response = await fetch(urlApiAsuntos, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formFields),
            signal: signal, // Assign the signal to the fetch request
        });

        if (!response.ok) {
            console.log(response.status);
            console.log(response);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        loading.value = true;
        const responseData = await response.json();
        console.log('responseData');
        console.log(responseData);
        router.push({ name: 'cat-tipo-acuerdo' });

    } catch (error) {
        console.log(error)
    }

    loading.value = false;

}
</script>