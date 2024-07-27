import useThemeStore from '@/stores/theme-store'
import { $themeConfig } from './theme.config'

export default {
  init() {
    const store = useThemeStore()
    let val = localStorage.getItem('dark_mode') // light, dark, system
    if (!val) {
      val = $themeConfig.theme
    }
    store.toggleDarkMode(val)
    val = localStorage.getItem('menu_style') // vertical, collapsible-vertical, horizontal
    if (!val) {
      val = $themeConfig.navigation
    }
    store.toggleMenuStyle(val)
    val = localStorage.getItem('layout_style') // full, boxed-layout, large-boxed-layout
    if (!val) {
      val = $themeConfig.layout
    }
    store.toggleLayoutStyle(val)
  },

  toggleMode(mode) {
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