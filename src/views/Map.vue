<template>
  <div class="map-section">
    <img class="counter-img" src="../assets/SBCT.svg" alt="stryker" />
    <svg class="map" height="5000" width="3000">
      <template v-for="{ index, x, y } in hexState.hexes" :key="index">
        <g class="hexen" >
          <hex v-bind:x="x" v-bind:y="y" @click="clickLog(x, y)" />
        </g>
      </template>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from "vue";
import { store } from "@/store";
import hex from "../components/Hex.vue";

export default defineComponent({
  name: "Map",
  components: {
    hex,
  },
  setup(props, context) {
    const hexState = reactive({
      hexes: [{}],
      coords: store.state.hexCoords,
    });
    const rowOffset = 87;
    const columnOffset = 300;
    /* Make Columns
     *  Input: Number (int), y_in (int)
     *  Output: None
     *  Description: This function uses a for loop to generate multiple elements for the Hexes list. i is the iterator
     *   k is the y value modifier. Each row needs to be 87 pixels away from the last, and thus k multiples the y_in
     *   variable by 87 to produce the position for the desired row.
     * */
    function getRowOffset(row_index: number) {
      return rowOffset * row_index;
    }

    function getColumnOffset(odd: boolean): number {
      return odd ? 150 : 0;
    }

    function makeColumns(num_of_col: number, row_index: number, odd = false) {
      const k = getRowOffset(row_index);
      const c_offset = getColumnOffset(odd);
      for (let column = 0; column < num_of_col; column++) {
        let j = column * columnOffset + c_offset;
        hexState.hexes.push({ x: j, y: k });
      }
    }

    function clickLog(x: number, y: number) {
      store.state.hexCoords = { x, y };
      console.log(store.state.hexCoords);
    }

    onBeforeMount(() => {
      const rows = 10;
      for (let i = 0; i < rows; i += 2) {
        makeColumns(8, i);
        makeColumns(7, i + 1, true);
      }
    });

    return {
      hexState,
      clickLog,
    };
  },
});
</script>

<style scoped lang="scss">
.map-section {
  max-width: 100%;
  width: max-content;
  position: relative;
  .map {
    overflow: auto;
    position: absolute;
  }
}

.hexen {
  transform: scale(0.5);
}

.counter-img {
  border-radius: 8em;
  &:hover { transform: scale(0.1) }
}
</style>
