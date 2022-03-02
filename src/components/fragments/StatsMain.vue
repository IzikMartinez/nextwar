<template>
  <g id="Defense" data-name="Defense" class="container">
    <path
      v-if="props.stat_type === 'defense'"
      id="shield"
      class="symbol-color"
      d="M362.83,405.91v76.88c0,.63,0,1.24,0,1.86-.81,42.78-29.69,77.15-65.16,77.15s-64.37-34.37-65.19-77.15c0-.62,0-1.23,0-1.86V405.91c1.76,6.85,15.67,12.19,32.59,12.19s30.86-5.35,32.61-12.21c1.73,6.86,15.66,12.21,32.59,12.21S361.08,412.76,362.83,405.91Z"
      transform="translate(0)"
    />
    <rect
      id="mechanized_movement"
      v-if="
        props.movement_type === 'mechanized' || props.movement_type === 'light'
      "
      class="track-background"
      :style="`--trackcolor: ${movementBackgroundColor}`"
      x="430"
      y="410"
      width="110"
      height="150"
      rx="14"
    />
    <circle
      v-if="props.movement_type === 'wheeled'"
      class="circle-color"
      cx="485"
      cy="490"
      r="85"
    />
    <text
      id="_3-2"
      data-name="3"
      class="text-color"
      :style="`--text-color: ${textColor}; --x: ${computedX}; --y: ${computedY}`"
    >
      {{ props.stat_value }}
    </text>
    />
  </g>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  stat_value: Number,
  stat_type: String,
  movement_type: String,
});

const textColor = computed(() => {
  if ((props.movement_type as string) === "wheeled") return "#26a9e0";
  else if ((props.movement_type as string) === "mechanized") return "red";
  else return "black";
});

const computedX = computed(() => {
  if ((props.stat_type as string) == "defense") return 255;
  else if ((props.stat_type as string) === "movement") return 443;
  else return 100;
});

const computedY = computed(() => {
  return 550;
});

const movementBackgroundColor = computed(() => {
  if ((props.movement_type as string) === "light") return "black";
  else return "white";
});
</script>

<style scoped lang="scss">
@mixin ibm {
  font-family: "Iosevka Extrabold", IBM Plex Serif, serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
}

.text-color {
  @include ibm;
  --text-color: #fff;
  --x: 250;
  --y: 545;
  transform: matrix(1, 0, 0, 1, var(--x), var(--y));
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 12em;
  fill: var(--text-color);
}
.symbol-color {
  --color: white;
  fill: var(--color);
}

.circle-color {
  text-align: center;
  fill: #393939;
}

.track-background {
  --trackcolor: white;
  fill: var(--trackcolor);
}
</style>
