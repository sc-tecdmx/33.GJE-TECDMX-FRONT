import { ref } from "vue";
import { defineStore } from 'pinia';

export interface Alert {
    message: string,
    type: string
}
export const useAlertStore = defineStore("alertStore",()=>{

    // const id = 'alert'
    const alert = ref({} as Alert);

    const success = (message : string) => {
        alert.value = { message, type: 'alert-success' };
    }
    const  error = (message: string) => {
        alert.value = { message, type: 'alert-danger' };
    }

    const clear = ()=>  {
        alert.value = {} as Alert;
    }
    return { alert,success, error, clear}
});
