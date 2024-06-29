import type { MenuItem } from "@/layouts/app/config/MenuItem";

const MainMenuConfig: Array<MenuItem> = [
    { icon : "bi-house-fill",      titulo  : "Inicio",             route: "/inicio",},
    { icon : "bi-house-fill",      titulo  : "Ventas",
        submenu : [
            {   icon: "bi-inboxes-fill", titulo : "Ventas",  route: "/ventas"},
            {   icon: "bi-folder-symlink-fill", titulo : "Análisis",  route: "/analisis"},
        ]
    },
    { icon : "bi-globe",    titulo  : "Correspondencia",    
        submenu : [
            {   icon: "bi-inboxes-fill", titulo : "Correspondencia de entrada",  route: "/sgd/entrada/list"},
            {   icon: "bi-folder-symlink-fill", titulo : "Correspondencia de salida",  route: "/sgd/salida/list"},
        ]
    },
    { icon : "bi-inboxes-fill",    titulo  : "Reportes archivísticos",    
        submenu : [
            {   icon: "bi-file-earmark-spreadsheet-fill", titulo : "Inventarios",  route: "/gestion/reportes/inventarios"},
            {   icon: "bi-folder-symlink-fill", titulo : "Guía de archivo",  route: "/gestion/reportes/guia"},
        ]
    },
    { icon : "bi-globe",    titulo  : "Datos abiertos",    route: "/gestion/datos-abiertos" },
    { icon : "bi-file-earmark-lock2-fill",    titulo  : "Disposición documental",    route: "/gestion/datos-abiertos" },
    { icon : "bi-folder-symlink-fill",    titulo  : "Configuración",    route: "#",
        submenu : [
            {   icon: "bi-file-earmark-spreadsheet-fill", titulo : "Permisos",  route: "/gestion/configuracion/permisos",
                subsubmenu : [
                    { icon : "bi-globe", titulo  : "Roles",    route: "/gestion/permisos/roles" },
                    { icon : "bi-globe", titulo  : "Usuarios",    route: "/gestion/permisos/usuarios" },
                ]
            },
            {   icon: "bi-folder-symlink-fill", titulo : "Catálogos",  route: "/gestion/configuracion/catalogos",
                subsubmenu : [
                    { titulo  : "Unidades de adscripción",    route: "/catalogos/unidades_adscripcion" },
                    { titulo  : "Tipos de documentos",    route: "/catalogos/tipos_documentos" },
            ]
            },
        ]
    },
];
  
 export default MainMenuConfig;
