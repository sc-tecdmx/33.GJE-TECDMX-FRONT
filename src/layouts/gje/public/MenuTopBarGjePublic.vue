<template>
<nav class="topbar">
    <ul class="list-unstyled menu-categories" id="topAccordion">
        <li class="menu single-menu">
            <a href="#" class="dropdown-toggle autodroprown">
                <div class="">
                    <span>Acerca de </span>
                </div>
            </a>
            <ul class="collapse submenu list-unstyled">
                <li>
                    <a href="https://www.tecdmx.org.mx/"> Nuestro Tribunal </a>
                </li>
                <li>
                    <router-link to="/index2">Pleno</router-link>
                </li>
                <li>
                    <router-link to="/index2">Áreas</router-link>
                </li>
                <li>
                    <router-link to="/index2">Directorio</router-link>
                </li>
                <li>
                    <router-link to="/index2">Programas TECDMX</router-link>
                </li>
                <li>
                    <router-link to="/index2">Marco Normativo</router-link>
                </li>
                <li>
                    <router-link to="#">Publicaciones</router-link>
                </li>
            </ul>
        </li>

        <li class="menu single-menu">
            <a href="javascript:;" class="dropdown-toggle">
                <div class="">
                    <span>Actividad Jurisdiccional</span>
                </div>
            </a>
            <ul class="collapse submenu list-unstyled">
                <li>
                    <router-link to="/"> Sesiones Públicas</router-link>
                </li>
                <li>
                    <router-link to="/"> Sentencias</router-link>
                </li>
            </ul>
        </li>

        <li class="menu single-menu">
            <a href="https://sentencias.tecdmx.org.mx/buscar/" class="dropdown-toggle">
                <div class="">
                    <span>Buscador Jurisdiccional</span>
                </div>
            </a>
        </li>

        <li class="menu single-menu">
            <a href="javascript:;" class="dropdown-toggle">
                <div class="">
                    <span>Tribunal Abierto</span>
                </div>
            </a>
        </li>

        <li class="menu single-menu">
            <a href="https://transparencia.tecdmx.org.mx/Cumplimiento-Ley-Contabilidad-Gubernamental/" class="dropdown-toggle">
                <div class="">
                    <span>Contabilidad Gubernamental</span>
                </div>
            </a>
        </li>
    </ul>
</nav></template>
<style scoped>
    .navbar{
        background: transparent!;
    }
     .topbar {
        background: transparent;
        padding: 0 16px;
        display:flex;
        justify-content: center;
        width: 100%;
        /*---- */
    }



   
    
    .topbar-nav.header nav.topbar  {
        background-color: transparent!;
    }

    .topbar-nav.header nav.topbar ul.menu-categories li.menu .submenu {
        background-color: #759090;
        border-radius: 0px;
        width: 200px;
        padding: 1px 0;

        /*transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s; */
        /*transition: all 0.3s  visibility 0s linear 0.3s;*/
        transition: background-color 2s ease-out;

    }
    
    .topbar-nav.header nav.topbar ul.menu-categories li.menu .submenu li {
        color: #ffffff;
        border-radius: 0px;
        font-family: Tahoma,Geneva,sans-serif,Arial,Helvetica,sans-serif;
        font-size: 20px;
        padding: 4px 0px 4px;
        
    } 
    .topbar-nav.header nav.topbar ul.menu-categories li.menu .submenu li a:visited {
        color: #ffffff;
        /* background-color: #ffffff;  */
    }

    .topbar-nav.header nav.topbar ul.menu-categories li.menu .submenu li a {
        color: #ffffff; 
        border-radius: 0px;
        font-family: Tahoma,Geneva,sans-serif,Arial,Helvetica,sans-serif;
        font-size: 20px;
        height: 36px;
     
    }

    .topbar-nav.header nav.topbar ul.menu-categories li.menu .submenu li a:hover {
        color: #000000;
        background-color: #ffffff;
    }

    .horizontal .topbar-nav.header nav.topbar ul.menu-categories li.menu a > div span {
        font-family: Tahoma,Geneva,sans-serif,Arial,Helvetica,sans-serif;
        font-size: 20px;
        vertical-align: text-bottom;
        color: #ffffff;
    }

    .single-menu{
        /* font-family: Raleway, Arial, Helvetica, sans-serif; */
        font-family: Tahoma, Geneva, sans-serif, Arial, Helvetica, sans-serif;
        font-size: 35px;
    }
</style>