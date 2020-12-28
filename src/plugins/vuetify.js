import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: '#3263f4',
        secondary: '#222b45',
        tertiary: '#151a30',
        // accent: '#36f',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#00bcd4',
        success: '#8bc34a'
      },
    },
  },
})

export default vuetify