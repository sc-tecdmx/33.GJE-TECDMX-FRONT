import AuthLayout  from "@/layouts/te/auth-layout.te.vue";

import  SignIn        from '@/views/auth/sign-in.vue'
import  SignInAzure   from '@/views/auth/sign-in-azure.vue';

export default {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    children: [
        { path: '/auth/sign-in'       , name: 'sign-in'          , component: SignIn        , meta: { pageTitle: "Login"        , breadcrumbs: ["Login"]} },
        { path: '/auth/sign-in-azure' , name: 'sign-in-in-azure'  , component: SignInAzure        , meta: { pageTitle: "Login"        , breadcrumbs: ["Login"]} }
        /* { path: '/auth/sign-up'     , name: 'sign-up'    , component: RegistroView     , meta: { pageTitle: "Registro"     , breadcrumbs: ["Registro"]} },
        { path: '/auth/recuperar'   , name: 'recuperar'   , component: RecuperarView    , meta: { pageTitle: "Recuperar"    , breadcrumbs: ["Recuperar"]} },
        { path: '/auth/restablecer' , name: 'restablecer' , component: ReestablecerView , meta: { pageTitle: "Reestablecer" , breadcrumbs: ["Reestablecer"]} }, */
    ]
};
