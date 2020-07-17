<template>
    <v-card
        class="price-card"
        transition="slide-x-transition"
    >
      <!-- <figure style="position: absolute; bottom: -8px; right: 0; z-index: 0">
        <svg width="173" height="158" viewBox="0 0 173 158" fill="none">
          <g style="mix-blend-mode: multiply;">
            <path d="M173 3.05176e-05C77.4548 2.21647e-05 7.62439e-06 70.7 0 157.913L163 157.913C168.523 157.913 173 153.436 173 147.913L173 3.05176e-05Z" fill="url(#paint0_linear)">
            </path>
          </g>
          <defs>
            <linearGradient xmlns="http://www.w3.org/2000/svg" id="paint0_linear" x1="55.1039" y1="326.262" x2="293.465" y2="87.9013" gradientUnits="userSpaceOnUse">
              <stop stop-color="#28285B"></stop>
              <stop offset="0.1125" stop-color="#2E295B"></stop>
              <stop offset="0.2599" stop-color="#3E2B5A"></stop>
              <stop offset="0.4267" stop-color="#592E59"></stop>
              <stop offset="0.6076" stop-color="#7F3257"></stop>
              <stop offset="0.7987" stop-color="#AF3855"></stop>
              <stop offset="0.9898" stop-color="#E73E53"></stop>
            </linearGradient>
          </defs>
        </svg>
      </figure> -->
      <v-card-text class="mt-2 mt-sm-0" align="center" style="position: relative; z-index: 1">
        <h1 class="price">
          <sup>$</sup>{{ price }}<span class="mo">/mo</span>
        </h1>
        <p>{{ download }} Mbps Download</p>
        <p>{{ upload }} Mbps Upload</p>
        <p>Unlimited Data</p>
      </v-card-text>
    </v-card>
</template>

<style>
.price-card {
  padding: 28px 16px;
  margin: 40px 20px;
  width: 240px;
  height: 300px;
  transition: all 0.8s;
}
p, .question {
  font-size: 16px;
  line-height: 180%;
}
p {
  text-align: center;
  color: #000;
}
.question {
  font-weight: bold;
}
.price {
  color: #28285B;
}
.mo {
  font-weight: normal;
  font-size: 18px;
}
@media screen and (max-width: 959px) {
  .price-card {
    padding: 16px;
    width: 250px;
    height: 320px;
  }
}
</style>

<script>

export default {
  name: 'PriceCard',
  data () {
    return {
      price: 50,
      download: 50,
      upload: 50
    }
  }
}
</script>
