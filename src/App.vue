<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <v-avatar tile color="transparent">
        <v-img
          alt="phone"
          width="20"
          height="20"
          contain
          src="@/assets/icons/phone.svg"
          style="vertical-align: middle"
        />
      </v-avatar>
      <span style="cursor: pointer" @click="call">{{ phone }}</span>
    </v-app-bar>

    <v-content>
      <Home />
    </v-content>
    <v-bottom-navigation style="height: fit-content!important">
      <Footer />
    </v-bottom-navigation>
  </v-app>
</template>

<script>

import 'commsware-styles'

import Home from './views/Home.vue'
import Footer from '@/components/Footer.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    Home,
    Footer
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(['phone', 'address', 'abn'])
  },
  methods: {
    call () {
      window.open(`tel:${this.officePhone}`)
    }
  }
}
</script>
