<template xmlns="http://www.w3.org/2000/svg">
  <svg class="map-hexes">
    <g class="hex">
      <polygon
        v-bind:class="attributes.terrain"
        points="100,0 50,87 100,174 200,174 250,87 200,0"
      ></polygon>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { defineProps, onBeforeMount, reactive } from "vue";



const props = defineProps({
  terrain: String,
  hex_x: Number,
  hex_y: Number,
});
const attributes = reactive({
  terrain: "clear",
  leg_ma: Number,
  light_ma: Number,
  motorized_ma: Number,
  mechanized_ma: Number,
});

onBeforeMount(() => {
  if (props.terrain === "rough") {
    attributes.terrain = "rough";
  } else if (props.terrain === "highland") {
    attributes.terrain = "highland";
  } else if (props.terrain === "river") {
    attributes.terrain = "river";
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

.hex {
  transform: translate(var(--x), var(--y));
}
</style>
