<template>
  <v-container class="mt-10">
    <v-row align="center" justify="center">
      <h1 style="color: #28285B; text-align: center">
        Australia's Residential Internet Connection
      </h1>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo-with-name.svg')"
          class="my-3"
          contain
          height="180"
        />
      </v-col>

      <v-col class="mb-4">
        <p>
          CommsWare is an authorised retail service provider. Our fibre optic broadband is a superior alternative to the NBN.
        </p>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <h2>
          <span style="color: #E73E53">FIBRE</span> INTERNET PLAN
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="text-center">
      <!-- <v-col cols="12" class="mb-4 mx-auto"> -->
        <PriceCard />
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<script>

import PriceCard from '@/components/PriceCard.vue'

export default {
  name: 'Home',
  components: {
    PriceCard
  }
}
</script>
