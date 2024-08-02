<template>

    <!--HEADER-->
    <header-control-acceso/>
   <!--END HEADER-->

   <!--BREADCRUMS-->
   <bread-crumb-principal
    :dynamicComponents="components"
    />
    <!--END BREADCRUMS-->

   <!--LAYOUT-->
   <div class="layout w-100 h-auto d-flex h-50 d-inline-block justify-content-center mt-5 pt-4">

       <!--CONTAINER-->
       <div class="container-fluid mt-5 p-0 pt-2 rounded contenedor">

           <!--ROW-->
           <div class="row">

               <!--ASIDE-->
               <div class="w-25 aisde border-end position-fixed start-0">
                   <ul class="">
                       <!--LI 1-->
                       <lista-menu 
                       liClass="nav-item text-start pt-3 pb-3"
                       aClass="nav-link text"
                       iconClass="bi bi-plus-square-fill p-2"
                       texto="Alta de aplicaciones"
                       @click="altas"
                       />
                       <!--END LI 1-->

                       <!--LI 2-->
                       <lista-menu 
                       liClass="nav-item text-start pb-3"
                       aClass="nav-link text"
                       iconClass="bi bi-people-fill p-2"
                       texto="Usuarios"
                       @click="usuarios"
                       />
                       <!--END LI 2-->

                       <!--LI 3-->
                       <lista-menu 
                       liClass="nav-item text-start"
                       aClass="nav-link text"
                       iconClass="bi bi-person-fill-gear p-2"
                       texto="Asignar roles"
                       @click="consultas"
                       />
                       <!--END LI 3-->
                   </ul>
               </div>
               <!--END ASIDE-->

               <!--ARTICLE-->
               <div class="w-75 article position-absolute end-0 ps-5">

                   <t-1-component 
                   texto="Alta de aplicaciones"
                   />

                   <modal-control-usuario  
                   v-if="currentModal === 'ModalControlUsuario'" 
                   :show="isModalVisible" 
                   title="Alta de Aplicación"
                   :inputs="modalInputs"
                   message=""
                   @close="handleModalClose" 
                   @select-layout="handleLayoutSelection"
                   >
                   </modal-control-usuario>

                   <modal-control-usuario2
                   v-if="currentModal === 'ModalControlUsuario2'" 
                   :show="isModalVisible" 
                   title="Alta de módulo" 
                   :inputs="modalInputs"
                   message=""
                   @close="closeModal"
                   @select-layout="handleLayoutSelection" 
                   />

                   <modal-control-acceso3
                   v-if="currentModal === 'ModalControlAcceso3'" 
                   :show="isModalVisible" 
                   title="Alta de submódulo" 
                   :inputs="modalInputsSubModulo"
                   message=""
                   @close="closeModal"
                   @select-layout="handleLayoutSelection" 
                   />
                   <component 
                   :is="selectedLayout"
                   @open-modal="openModal" 
                   />

               </div>
               <!--END ARTICLE-->

           </div>
           <!--END ROW-->
          
       </div>
       <!--END CONTAINER-->
   </div>
   <!--END LAYOUT-->

</template>

<script setup lang="ts">

   import HeaderControlAcceso from '@/components/common/HeaderControlAcceso.vue';
   import LogoComponent from '@/components/layout/logos/LogoComponent.vue';
   import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
   import T1Component from '@/components/layout/T1Component.vue';
   import ListaMenu from '@/components/common/ListaMenu.vue';

   import ModalControlUsuario from '@/components/common/ModalControlUsuario.vue';
   import ModalControlUsuario2 from '@/components/common/ModalControlUsuario2.vue';
   import ModalControlAcceso3 from '@/components/common/ModalControlAcceso3.vue';
   import TablaControlAcceso from '@/components/apps/jel/TablaControlAcceso.vue';
   import AltaComponent from '@/components/apps/jel/AltaComponent.vue';
   import LayoutPrincipal from '@/components/apps/jel/LayoutPrincipal.vue';
   import DatosControl from '@/components/apps/jel/DatosControl.vue';
   import DatosControl3 from '@/components/apps/jel/DatosControl3.vue';

   import { ref, onMounted } from 'vue';
   import { useRouter } from 'vue-router'
   import DatosControl2 from '@/components/apps/jel/DatosControl2.vue';
   import ModalControlAcceso4 from '@/components/common/ModalControlAcceso4.vue';

   const router = useRouter();


   function consultas() {
   router.push({ name: 'jel-consultas' });
   }

   function usuarios() {
   router.push({ name: 'jel-usuarios' });
   }

    // DEFINIR EL TIPO DE DATOS
   interface ComponentData {
   liClass: string;
   rutaName: string;
   aClass: string;
   texto: string;
   iconClass: string;
   slash: string;
   spanClass: string;
   }

   // DEFINIR DATOS DEL COMPONENTE
   const components = ref<ComponentData[]>([]);

   // FUNCIÓN PARA CARGAR LOS COMPONENTES
   function loadComponents() {
   components.value = [
       { liClass: 'breadcrumb-item', rutaName: '/', aClass: 'text-primary fs-6 fw-normal', texto: '', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
       { liClass: 'breadcrumb-item', rutaName: '/', aClass: 'text-primary fw-normal fs-6', texto: 'Alta de aplicaciones', iconClass: '', slash: '', spanClass: 'span' },
       // MÁS...
   ];
   }

   function altas() {
   router.push({ name: 'jel-alta' });
   }

   // CRAGAR COMPONENTES EN LA TABLA
   onMounted(() => {
   loadComponents();
   });

   //VENTANA MODAL

// Definir los inputs del modal
const modalInputs = ref([
 { id: '1', type: 'text', label: 'Tipo de opción', model: 'opcion' },
 { id: '2', type: 'text', label: 'Código', model: 'codigo' },
 { id: '3', type: 'text', label: 'Nombre', model: 'nombre' },
 { id: '4', type: 'text', label: 'Slug', model: 'slug' }
]);

// Definir los inputs del modal
const modalInputsSubModulo = ref([
 { id: '1', type: 'text', label: 'Rol padre', model: 'rol' },
 { id: '2', type: 'text', label: 'Código', model: 'codigo' },
 { id: '3', type: 'text', label: 'Nombre', model: 'nombre' },
]);

/*
const isModalVisible = ref(false); // Inicialmente el modal está oculto
const selectedLayout = ref<DefineComponent | null>(AltaComponent); // Layout por defecto



//const openModal = () => {
const openModal = () => {

 isModalVisible.value = true; // Abre el modal

};

function handleLayoutSelection(layout: string) {
 switch (layout) {
   case 'AltaComponent':
     selectedLayout.value = AltaComponent;
     break;
   case 'DatosControl':
     selectedLayout.value = DatosControl;
     break;
     case 'LayoutPrincipal':
     selectedLayout.value = LayoutPrincipal;
     break;
   default:
     selectedLayout.value = null;
 }
 isModalVisible.value = false;
}

function handleModalClose() {
 isModalVisible.value = false; // Cierra el modal
}
*/
const isModalVisible = ref(false);
const currentModal = ref<string | null>(null);
const selectedLayout = ref<DefineComponent | null>(AltaComponent);

function openModal(modalName: string) {
 currentModal.value = modalName;
 isModalVisible.value = true;
}

function closeModal() {
 isModalVisible.value = false;
}

function handleLayoutSelection(layout: string) {
 switch (layout) {
   case 'AltaComponent':
     selectedLayout.value = AltaComponent;
     break;
   case 'DatosControl':
     selectedLayout.value = DatosControl;
     break;
   case 'DatosControl2':
     selectedLayout.value = DatosControl2;
     break;
     case 'DatosControl3':
     selectedLayout.value = DatosControl3;
     break;
   default:
     selectedLayout.value = null;
 }
 closeModal();
}

</script>

<style lang="scss" scoped>

   @import "../../assets/tecdmx/sass/jel/_var.scss";

   .header-ca {
       height: 54px;
       border-bottom: $border-width $border-style $border-color-gris;
       &__separator {
           width: 2px;
           height: 32px;
           background: $grey-claro;
           margin-top: 9px;
       }
   }

   .parrafo {
       color: $bg-dark;
   }

   .menu {
       width: 48px;
       height: 100%;
       
   }

   ul {
       height: 400px;
   }

   .bi {
       font-size: $text-md;
   }
   
   li {
       list-style: none;
       color: $bg-dark;
       font-size: 14px;
   }

</style>