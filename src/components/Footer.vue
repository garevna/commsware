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
          <p class="left-14">{{ address }}</p>
          <p class="left-14" @click="call" style="cursor: pointer">
            <span width="10" height="10" class="mr-2" style="display: inline-block;">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9.77581 7.9031L8.23146 6.35859C7.92386 6.05222 7.41446 6.06153 7.09614 6.37996L6.31809 7.15784C6.26894 7.13074 6.21806 7.10245 6.16457 7.07242C5.67324 6.80019 5.00077 6.42705 4.29314 5.7189C3.58341 5.00926 3.20993 4.33576 2.93686 3.84412C2.90804 3.79203 2.88044 3.74181 2.85317 3.69412L3.37536 3.17271L3.63208 2.91567C3.95089 2.59678 3.95968 2.08752 3.65279 1.78026L2.10845 0.235575C1.80157 -0.0712539 1.29194 -0.0619457 0.973128 0.256949L0.537879 0.694697L0.549773 0.706505C0.403829 0.892728 0.281873 1.10751 0.191117 1.33912C0.107457 1.55959 0.0553713 1.76998 0.0315547 1.98079C-0.172366 3.67134 0.600165 5.21637 2.69671 7.31295C5.59478 10.2108 7.93024 9.99189 8.03099 9.9812C8.25043 9.95498 8.46072 9.90254 8.67444 9.81955C8.90405 9.72985 9.11868 9.60807 9.30479 9.46244L9.3143 9.47089L9.75524 9.03911C10.0734 8.72028 10.0825 8.21085 9.77581 7.9031Z" fill="white"/>
              </svg>
            </span>
            <span>{{ phone }}</span>
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
    ...mapState(['phone', 'address', 'abn'])
  },
  methods: {
    call () {
      window.open(`tel:${this.officePhone}`)
    }
  }
}
</script>
