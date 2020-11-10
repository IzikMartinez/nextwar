<template>
  <svg class="map-hexes">
    <g transform="translate(0,0)">
      <polygon :style="cssVars" points="100,0 50,87 100,174 200,174 250,87 200,0"></polygon>
    </g>
  </svg>
</template>

<script>

export default {
  name: "Hex",
  data () {
    return {
      col_in: 0,
      row_in: 0,
      foot: 1,
      motor: 1,
      mechanized: 1
    }
  },
  props: {
    hexColor: {
      type: String,
      default: "white"
    }
  },
  computed: {
    cssVars() {
      return {
        '--hex-color': this.hexColor,
        '--stroke': 'black',
      }
    }
  }
}
</script>

<style scoped>

polygon {
  fill: var(--hex-color);
  stroke: var(--stroke);
}


</style>