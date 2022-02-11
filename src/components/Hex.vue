<template xmlns="http://www.w3.org/2000/svg">
  <svg class="map-hexes">
    <g class="hex" :style="`--x: ${hex_x}; --y: ${hex_y}`">
      <polygon
        v-bind:class="attributes.terrain"
        points="100,0 50,87 100,174 200,174 250,87 200,0"
      ></polygon>

      <text class="coordinates">({{ coordinates.x }}, {{ coordinates.y }})</text>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps, onBeforeMount, reactive } from "vue";

const props = defineProps({
  terrain: String,
  x: Number,
  y: Number,
});

const coordinates = reactive({
  x: 0,
  y: 0,
});

const attributes = reactive({
  terrain: "clear",
  leg_ma: 0,
  light_ma: 0,
  motorized_ma: 0,
  mechanized_ma: 0,
});



function oddColumn(col: number) {
  return col % 2 == 0 ? 0 : 87;
}

const hex_x = computed(() => {
  return (coordinates.x as number) * 150;
});

const hex_y = computed(() => {
  return (coordinates.y as number) * 174 + oddColumn(props.x as number);
});

onBeforeMount(() => {
  coordinates.x = props.x as number;
  coordinates.y = props.y as number;
  if (props.terrain === "rough") {
    attributes.terrain = "rough";
    attributes.leg_ma = 1;
    attributes.light_ma = 1;
    attributes.motorized_ma = 2;
    attributes.mechanized_ma = 3;
  } else if (props.terrain === "highland") {
    attributes.terrain = "highland";
  } else if (props.terrain === "river") {
    attributes.terrain = "river";
  } else if (props.terrain === "mountain") {
    attributes.terrain = "mountain";
  } else {
    attributes.terrain = "";
  }
});
</script>

<style scoped lang="scss">
@mixin stroke {
  stroke: black;
  stroke-width: 3px;
}

.hex {
  --x: 0;
  --y: 0;
  transform: matrix(1, 0, 0, 1, var(--x), var(--y));
}

polygon {
  fill: white;
  @include stroke;
  &:hover {
    fill: #c4dfea;
  }
}

.rough {
  fill: bisque;
}

.highland {
  fill: saddlebrown;
}

.mountain {
  fill: #4e220b;
}

.river {
  stroke: #1f6dff;
  stroke-width: 10px;
}

.coordinates {
  transform: translate(120px, 20px);
  font-size: 1.2em;
  font-family: "Iosevka Extrabold Oblique", monospace;
}
</style>
