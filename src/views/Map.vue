<template>
  <div class="map-section">
    <svg class="map" height="5000" width="3000">
      <g style="transform: scale(0.5)" v-for="hex in mapState.hexes" :key="hex">
        <Hex v-bind:x="hex.x" v-bind:y="hex.y"></Hex>
      </g>
    </svg>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive } from "vue";
import Hex from "@/components/Hex";

export default defineComponent({
  name: "Map",
  components: {
    Hex,
  },
  setup() {
    const mapState = reactive({
      hexes: [],
    });
    /* Make Columns
     *  Input: Number (int), y_in (int)
     *  Output: None
     *  Description: This function uses a for loop to generate multiple elements for the Hexes list. i is the iterator
     *   k is the y value modifier. Each row needs to be 87 pixels away from the last, and thus k multiples the y_in
     *   variable by 87 to produce the position for the desired row.
     * */
    function makeColumns(num, y_in) {
      let i;
      let k = 87 * y_in;
      for (i = 0; i < num; i++) {
        let j = i * 300;
        mapState.hexes.push({ x: j, y: k });
      }
    }

    function makeOddColumns(num, y_in) {
      let i;
      let k = 87 * y_in;
      for (i = 0; i < num; i++) {
        let j = i * 300 + 150;
        mapState.hexes.push({ x: j, y: k });
      }
    }

    onBeforeMount(() => {
      let rows = 20;
      let i;

      for (i = 0; i < rows; i += 2) {
        makeColumns(9, i);
        makeOddColumns(8, i + 1);
      }
    });

    return {
      mapState
    };
  },
});
</script>

<style scoped>
.map-section {
  max-width: 100%;
  width: max-content;
}

.map-section .map {
  overflow: auto;
  position: relative;
}
</style>
