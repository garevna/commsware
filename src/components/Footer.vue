<template>
  <v-container fluid dark class="primary">
    <v-row width="100%" align="center" justify="center" class="mx-auto">
      <v-col cols="12" sm="7">
        <v-card flat class="transparent mx-auto" max-width="400">
          <v-card-title>
            <p class="left-16">ABOUT COMMSWARE</p>
          </v-card-title>
          <v-card-text>
            <p class="left-14">
              CommsWare is an Australian Internet service provider offering the fastest and most affordable fibre optic connection to business and residential customers.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat class="transparent mx-auto" max-width="400">
          <p class="left-14"><v-icon>$address</v-icon> {{ address }}</p>
          <p class="left-14" style="cursor: pointer"><v-icon>$mail</v-icon> <a :href="mail">{{ email }}</a></p>
          <p class="left-14" @click="call" style="cursor: pointer">
            <span><v-icon>$phone</v-icon> {{ phone }}</span>
          </p>
          <p class="left-14">ABN: {{ abn }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
* {
  color: #fff!important;
}
.footer--bottom-content {
  position: absolute;
  left: 0;
  margin-bottom: -4px;
  bottom: 10px;
}
.ref {
  cursor: pointer;
}
.left-16 {
  text-align: left;
  font-size: 16px;
}
.left-14 {
  text-align: left;
  font-size: 14px;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Footer',

  data: () => ({
    //
  }),

  computed: {
    ...mapState(['phone', 'address', 'abn', 'email']),
    mail () {
      return `mailto: ${this.email}`
    }
  },
  methods: {
    call () {
      window.open(`tel:${this.officePhone}`)
    }
  }
}
</script>
