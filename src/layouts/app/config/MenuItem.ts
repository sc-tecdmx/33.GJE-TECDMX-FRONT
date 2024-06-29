export interface MenuItem {
    titulo          : string;
    route?          : string;
    icon?           : string;
    
    submenu?        : Array<MenuItem>;
    subsubmenu?     : Array<MenuItem>;
}