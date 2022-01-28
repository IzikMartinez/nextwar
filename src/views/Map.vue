<template>
  <div class="map-section">
    <svg class="map" height="1000" width="2000">
      <template v-for="{ index, x, y } in hexState.hexes" :key="index">
        <g class="hexen">
          <hex
            v-bind:x="x"
            v-bind:y="y"
            @click="clickLog(x, y)"
            terrain="clear"
          />
        </g>
      </template>
      <counter
        class="counter-img"
        :style="`--rad: ${computedWidth}; --x: ${computedX}; --y: ${computedY}`"
        country="PRC"
        unit_name="2 MCAB"
        unit_type="MCAB"
        unit_size="brigade"
      ></counter>
    </svg>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onBeforeMount, reactive} from "vue";
import store from "@/store";
import hex from "../components/Hex.vue";
import counter from "@/components/Counter.vue";

export default defineComponent({
  name: "Map",
  components: {
    hex,
    counter,
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
      store.state.counterCoords.x = x / 150;
      store.state.counterCoords.y = y / 87;
      console.log(store.state.counterCoords);
    }

    const computedWidth = computed(() => {
      return 0.1;
    });

    const computedX = computed(() => {
      return store.state.counterCoords.x * 150 + 50;
    });

    const computedY = computed(() => {
      return store.state.counterCoords.y * 87 + 30;
    });

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
      computedWidth,
      computedX,
      computedY,
    };
  },
});
</script>

<style scoped lang="scss">
.map-section {
  max-width: 100%;
  width: max-content;
  .map {
    overflow: auto;
  }
}

.hexen {
  transform: scale(1);
}

.counter-img {
  --rad: 0.07;
  --x: 50;
  --y: 30;
  position: absolute;
  /*left: 900px;
  top: 600px;*/
  border-radius: 5em;
  transform: matrix(var(--rad), 0, 0, var(--rad), var(--x), var(--y));
  &:hover {
    transform: matrix(var(--rad), 0, 0, var(--rad), var(--x), var(--y));
  }
}
</style>
