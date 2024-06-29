import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useBodyStore } from "@/stores/vista/body-store";
/*
  cork-theme.ts y appSettingStore son los mismos
*/

interface ThemeState {
  layout: string;

  is_show_sidebar: boolean;
  is_show_search: boolean;
  is_dark_mode: boolean;

  dark_mode: string;
  menu_style: string;
  layout_style: string;
  countryList: any[];
}

export const  useThemeStore = defineStore('themeStore', () => {
  
  const bodyStore = useBodyStore();
  const state = ref<ThemeState>({
    layout          : 'app',

    is_show_sidebar : true,
    is_show_search  : true,
    is_dark_mode    : false,

    dark_mode       : 'light',
    menu_style      : 'vertical',
    layout_style    : 'full',
    countryList     : [ { code: "es", name: "Spanish" } ],
  })
  const setLayout = (value : string ) => {
    state.value.layout = value
    
  }

  const getLayout = () => {
    return state.value.layout;
  }
  const getLayoutStyle = () => {
    return state.value.layout_style;
  }
  const getMenuStyle = () => {  
    return state.value.menu_style;
  }

  const isShowSidebar = () => {
    return state.value.is_show_sidebar;
  };


  const toggleSideBar = (value: any) => {
    state.value.is_show_sidebar = value
  }

  const toggleSearch = (value: any) => {
    state.value.is_show_search = value
  }

  const toggleDarkMode = (value: any) => {
    value = value || 'light'; //light|dark|system
    localStorage.setItem('dark_mode', value);
    state.value.dark_mode = value;
    if (value == 'light') {
      state.value.is_dark_mode = false;
    } else if (value == 'dark') {
      state.value.is_dark_mode = true;
    } else if (value == 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        state.value.is_dark_mode = true;
      } else {
        state.value.is_dark_mode = false;
      }
    }

    if (state.value.is_dark_mode) {
      bodyStore.addBodyClassname("dark");
    } else {
      bodyStore.removeBodyClassName("dark");
    }
  }

  const toggleMenuStyle = (value : string) => {
    //horizontal|vertical|collapsible-vertical
    value = value || '';
    localStorage.setItem('menu_style', value);
    state.value.menu_style = value;
    if (!value || value === 'vertical') {
      state.value.is_show_sidebar = true;
    } else if (value === 'collapsible-vertical') {
      state.value.is_show_sidebar = false;
    }
  }

  const toggleLayoutStyle = (value : string) => {
    //boxed-layout|large-boxed-layout|full
    value = value || '';
    localStorage.setItem('layout_style', value);
    state.value.layout_style = value;
  }

  //-------- Get Values
  

  return {
    state,
    useThemeStore,
    toggleSideBar,
    setLayout,getLayout,
    toggleSearch,
    toggleDarkMode,
    toggleMenuStyle,
    toggleLayoutStyle,

    getLayoutStyle,
    getMenuStyle,
    isShowSidebar,
    }
})

export default useThemeStore;