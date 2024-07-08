// IFR Sustituis por Pinia import store from "./store";
// import { useSettingStore } from "@/stores/vista/cork-theme";
import useThemeStore from '@/stores/theme-store'
import { $themeConfig } from './theme.config'

export default {
  init() {
    const store = useThemeStore()

    // set default styles
    let val = localStorage.getItem('dark_mode') // light, dark, system
    if (!val) {
      val = $themeConfig.theme
    }
    // - OK - store.commit("toggleDarkMode", val);
    store.toggleDarkMode(val)

    val = localStorage.getItem('menu_style') // vertical, collapsible-vertical, horizontal

    if (!val) {
      val = $themeConfig.navigation
    }
    /// store.commit("toggleMenuStyle", val);
    store.toggleMenuStyle(val)

    val = localStorage.getItem('layout_style') // full, boxed-layout, large-boxed-layout
    if (!val) {
      val = $themeConfig.layout
    }
    //-- store.commit("toggleLayoutStyle", val);
    store.toggleLayoutStyle(val)
  },

  toggleMode(mode) {
    //-- IFR. Chafa corregir
    const store = useThemeStore()
    if (!mode) {
      const val = localStorage.getItem('dark_mode') //light|dark|system
      mode = val
      if (!val) {
        mode = 'light'
      }
    }
    store.toggleDarkMode(mode || 'light')
    return mode
  }
}
