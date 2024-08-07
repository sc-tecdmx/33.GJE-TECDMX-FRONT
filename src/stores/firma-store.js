import { defineStore } from "pinia";
import axios from "axios";
import { ref } from 'vue';
import {main_pfx, main_cer} from '@/core/firmav2/main-refactor.mjs';

const urlPKI = import.meta.env.VITE_API_PKIURL;

export const useFirmaStore = defineStore('firmaStore',() => {
    const catState = ref({
    });

    const rechazarDocumento = async(data, token) => {
        const url = urlPKI + "/api/documento/rechazar-documento";
        //showAlert('rechazar');
        // try {
        //   await axios.post(url, data, {headers:{"Authorization": `Bearer ${token}`}}).then((response) => {
        //      console.log(response)
        //      //showAlert('rechazar', response.data.message);
        //         });
            
        //    } catch (error) {
        //      console.log(error)
        //    }
        new window.Swal({
          icon: 'warning',
          title: '\u00BFDesea rechazar este documento?',
          text: "El documento ser\u00E1 rechazado para todos los firmantes",
          showCancelButton: true,
          confirmButtonText: 'Rechazar',
          padding: '2em',
      }).then(async(result) => {
          if (result.value) {
            try {
              await axios.post(url, data, {headers:{"Authorization": `Bearer ${token}`}}).then((response) => {
                 console.log(response)
                 //showAlert('rechazar', response.data.message);
                 new window.Swal('�Rechazado!', response.data.message, 'success');
                  setTimeout(()=>{
                    window.location.reload();
                  }, 500);
                    });
                
               } catch (error) {
                 console.log(error)
               }
          }
      });
    }
    const enviarFirmantes = async(data, token) => {
      const url = urlPKI + "/api/documento/enviar-documento";
      
      try {
           await axios.post(url, data, {headers:{"Authorization": `Bearer ${token}`}}).then((response) => {
           console.log(response)
           if(response.data.status === 'fail'){
            showMessage(response.data.message, 'error');
           }else{
              //showAlert('enviarFirmantes', response.data.message);
              new window.Swal({
                icon: 'success',
                title: 'Enviar',
                text: response.data.message,
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                padding: '2em',
              }).then((result) => {
                  if (result.value) {
                    window.location.href = "/";
                  }
              });
           }
           
              });
          
         } catch (error) {
           console.log("ERROR",error)
         }
  }
    const goToFirma = async(idDoc, token) => {
      const url = urlPKI + "/api/documento/go-to-firmar";
      let data = {
        idDocumento: idDoc
      }
      try {
        const response = await axios.post(url, data, {headers:{"Authorization": `Bearer ${token}`}});
        return response;
         } catch (error) {
           console.log(error)
         }
    }
    const cargaCertificado = async(data, token) => {
      const url = urlPKI + import.meta.env.VITE_ADD_CERTIFICADO;
      try {
        const response = await axios.post(url, data, {headers:{"Authorization": `Bearer ${token}`}});
        // console.log("CARGA-CERT",response)
        if(response.data.status === 'fail'){
          showMessage(response.data.message, 'error');
        }else{
          showMessage(response.data.message);
        }
        //return response;
         } catch (error) {
           console.log(error)
         }
    }


    //Alerts 
    // const showAlert = async (tipo, mensaje) => {
    //   //console.log(mensaje)
    //   switch(tipo){
    //   case 'rechazar':
    //     new window.Swal({
    //         icon: 'warning',
    //         title: '&#191;Desea rechazar este documento?',
    //         text: "El documento ser� rechazado para todos los firmantes",
    //         showCancelButton: true,
    //         confirmButtonText: 'Rechazar',
    //         padding: '2em',
    //     }).then(async(result) => {
    //         if (result.value) {
    //           try {
    //             await axios.post(url, data, {headers:{"Authorization": `Bearer ${token}`}}).then((response) => {
    //                console.log(response)
    //                //showAlert('rechazar', response.data.message);
    //                new window.Swal('�Rechazado!', response.data.message, 'success');
    //                 setTimeout(()=>{
    //                   window.location.reload();
    //                 }, 500);
    //                   });
                  
    //              } catch (error) {
    //                console.log(error)
    //              }
    //         }
    //     });
    //     break;
    //   case 'enviarFirmantes':
    //     new window.Swal({
    //         icon: 'success',
    //         title: 'Enviar',
    //         text: mensaje,
    //         showCancelButton: false,
    //         confirmButtonText: 'Aceptar',
    //         padding: '2em',
    //       }).then((result) => {
    //           if (result.value) {
    //             window.location.href = "/";
    //           }
    //       });
    //     break;
    //   default:
    //     alert("Sin alerta");
    //     break;
    // }
    // };
    const showMessage = (msg = '', type = 'success') => {
      const toast = window.Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
      });
      toast.fire({
          icon: type,
          title: msg,
          padding: '10px 20px',
      });
  };

    return { 
        catState, 
        rechazarDocumento,
        goToFirma,
        enviarFirmantes,
        cargaCertificado
       }
})