import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      expand: 'mdi-chevron-down',
      valid: 'mdi-check-bold',
      invalid: 'mdi-alert-outline',
      home: 'mdi-home-circle'
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#28285B',
        secondary: '#E73E53',
        buttons: '#28285B',
        homefone: '#FAFAFA',
        warning: '#FAFF00'
      },
      dark: {
        primary: '#28285B',
        secondary: '#E73E53',
        buttons: '#28285B',
        homefone: '#FAFAFA',
        warning: '#FAFF00'
      }
    }
  }
})
