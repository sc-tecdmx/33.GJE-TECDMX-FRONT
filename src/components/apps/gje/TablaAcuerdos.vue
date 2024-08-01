<template>
    <table class="table item-table">
        <thead>
            <tr>
                <th>Fecha de acuerdo</th>
                <th>Puntos de acuerdo</th>
                <th>Votación</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="acuerdo in acuerdos" :key="acuerdo.n_id_acuerdo">
                <td class="align-top">
                    <input type="date" class="form-control form-control-sm" v-model="acuerdo.d_fecha_acuerdo"
                        placeholder="Fecha de resolución" />
                </td>
                <td class="align-top">
                    <textarea class="form-control form-control-sm" v-model="acuerdo.s_punto_acuerdo"
                        placeholder="Puntos de acuerdo" />
                       <input class="form-control form-control-sm" type="file" id="file__s_url_infografia"
                        @change="onFileChange($event,'pdf', acuerdo )" accept=".pdf" />
                </td>
                <td class="align-top">
                    <select v-model="acuerdo.s_numero_votos" class="form-select form-select-sm mb-3">
                        <option>Seleccionar</option>
                        <option v-for="votacion in cat_votacion" :value="votacion.s_tipo_votacion"
                            :key="votacion.s_tipo_votacion">
                            {{ votacion.s_tipo_votacion }}
                        </option>-
                    </select>
                </td>
                <td><button type="button" class="btn btn-primary additem btn-sm" @click="agregarAcuerdo()">+</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import { defineModel, ref } from 'vue';

import type { TAcuerdo } from '@/core/types/gje/acuerdo.t'
import type { IVotacion } from '@/core/interfaces/votacion.i'

interface Props {
    tipo_acuerdo: number
}
const acuerdos      = defineModel<TAcuerdo[]>("acuerdos", {});
const cat_votacion  = defineModel<IVotacion[]>("cat_votacion", {});

const props =   defineProps<Props>()
const cargando      = defineModel<boolean>("cargando", {default:false});

    const onFileChange = async (event: Event, tipo:string, acuerdo:TAcuerdo) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            const archivo = target.files[0];
            console.log('onFileChange : ' + archivo.name)
            cargando.value = true
            const reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = async () => {
                const sentencia_name = archivo.name.replace(/\s/g, "-")
                const sentencia_b64 = reader?.result?.split(",")[1]
                if ( tipo =='pdf' ) {
                    
                    acuerdo.s_url_sentencia_pdf             = sentencia_name
                    acuerdo.file__b64_s_url_sentencia_pdf   = sentencia_b64
                }
                if ( tipo =='doc' ) {
                    acuerdo.file__b64_s_url_sentencia_doc   = sentencia_name
                    acuerdo.s_url_sentencia_doc             = sentencia_b64
                }
                cargando.value = false
                console.log("..." + acuerdo?.file__b64_s_url_sentencia_pdf?.substring(acuerdo?.file__b64_s_url_sentencia_pdf.length-20,acuerdo?.file__b64_s_url_sentencia_pdf.length))
            }
        }
        
        //-- TODO. Durante la carga actualizar la espera
    }
    const emptyAcuerdo= (id_tipo_acuerdo: number): TAcuerdo => {
    return {
        n_id_acuerdo: 0,
        n_id_medio_impugnacion: 0,
        n_id_tipo_acuerdo: id_tipo_acuerdo,
        d_fecha_acuerdo: '',
        s_punto_acuerdo: '',
        s_numero_votos: '',
        s_url_sentencia_pdf: '',
        file__b64_s_url_sentencia_pdf :''
    }
}

    const agregarAcuerdo = () => {
        console.log('Agregar un renglon')
        //--- TODO. Validar que el renglon actual esté lleno        
        //-- Hacer reactivo el botón agregar
        console.log('agregarAcuerdo() props.tipo_acuerdo: ' + props.tipo_acuerdo)
        acuerdos.value?.push(emptyAcuerdo(props.tipo_acuerdo))
    }
    const removerPlenario = (acuerdo:TAcuerdo) => {
        //-- TODO. Agregar la funciuón para quitar un renglón
        console.log('Quitar un renglon, previa confirmación :' + acuerdo.s_url_sentencia_pdf )
    }

</script>