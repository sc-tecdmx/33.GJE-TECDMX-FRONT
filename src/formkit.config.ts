import { es } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
 import { rootClasses } from './formkit.theme'
// import '@formkit/themes/genesis'
// import { genesisIcons } from '@formkit/icons'


export default defaultConfig({
  locales: { es },
  locale: 'es',
  config: {
   rootClasses,
  },
  // theme: 'genesis', // will load from CDN and inject into document head
  /*icons: {
    ...genesisIcons
  }*/
})