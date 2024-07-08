<template>
    <div class="card mx-auto mt-5" style="width: 350px;">
        <form @submit.prevent="submitFormulario" class="card-body">
            <h1>{{ tipoAcuerdo ? 'Editar' : 'Agregar' }} Tipo acuerdo</h1>
            <input class="form-control mb-2" type="text" v-model="formData.n_id_tipo_acuerdo" placeholder="id" required>
            <input type="text" placeholder="Tipo de acuerdo" v-model="formData.s_tipo_acuerdo" class="form-control mb-3"
                required>
            <button :disabled="cargando" class="btn btn-primary w-100">Guardar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
// Cambiado import { API, ITarea } from "@/contantes";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

let tipoAcuerdo: any = reactive({});

onMounted(() => {
    loadFormData();
});


const loading: any = ref(true);
const id: any = ref(null);
let controller: any;
const loadFormData = async () => {
    id.value = route.params.n_id_tipo_acuerdo;
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
        tipoAcuerdo.value = data;
        console.log(tipoAcuerdo.value)
        //----- 
        formData.n_id_tipo_acuerdo = tipoAcuerdo.value.n_id_tipo_acuerdo
        formData.s_tipo_acuerdo = tipoAcuerdo.value.s_tipo_acuerdo
    } catch (error) {
        console.log(error)
    }
    loading.value = false;
}

/* Si recibe el formulario como componente
const props = defineProps({
    tarea: {
        type: Object as () => ITarea | null,
        default: null
    }
})
*/

const formData = reactive({
    n_id_tipo_acuerdo: '',
    s_tipo_acuerdo: ''
})
const cargando = ref(false)
//-- NO parametros const tarea = computed(() => props.tarea)


watch(tipoAcuerdo, () => {
    formData.n_id_tipo_acuerdo = tipoAcuerdo.value.n_id_tipo_acuerdo
    formData.s_tipo_acuerdo = tipoAcuerdo.value.s_tipo_acuerdo
})

const submitFormulario = async () => {
    cargando.value = true;
    let urlApiAsuntos = import.meta.env.VITE_API_GJE + "/api/gje/cat/tipo-acuerdo/";

    if (tipoAcuerdo.value) {
        urlApiAsuntos = urlApiAsuntos + id.value;
        await fetch(urlApiAsuntos, {
            method: 'PUT',
            body: JSON.stringify({ n_id_tipo_acuerdo: formData.n_id_tipo_acuerdo, s_tipo_acuerdo: formData.s_tipo_acuerdo }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } else {
        await fetch(urlApiAsuntos, {
            method: 'POST',
            body: JSON.stringify({ n_id_tipo_acuerdo: formData.n_id_tipo_acuerdo, s_tipo_acuerdo: formData.s_tipo_acuerdo }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    cargando.value = false;
    router.back()
}
</script>

<style scoped></style>