<template>
  <svg class="map-hexes">
    <g class="hex">
      <polygon points="100,0 50,87 100,174 200,174 250,87 200,0"></polygon>
    </g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent} from "vue";

export default defineComponent({
  name: "Hex",
  setup(props) {
    return {};
  },
});
</script>

<style scoped lang="scss">
polygon {
  fill: white;
  stroke: black;
  stroke-width: 2px;
  &:hover {
    fill: bisque;
  }
}

.hex {
  transform: translate(var(--x), var(--y));
}
</style>
