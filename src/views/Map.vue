<template>
  <div class="map-section">
    <svg class="map" height="1000" width="2000">
      <template v-for="{ index, x, y } in hexState.hexes" :key="index">
        <g class="hexen">
          <Hex
            v-bind:x="x"
            v-bind:y="y"
            @click="clickLog(x, y)"
            terrain="clear"
            :hex_x="x"
            :hex_y="y"
          />
        </g>
      </template>

      <g v-for="(counter, index) in counters" :key="index">
        <Counter
          :class="counter.class"
          :country="counter.faction"
          :unit_name="counter.unit_name"
          :unit_type="counter.unit_type"
          :unit_size="counter.unit_size"
          :ref="
            (el) => {
              counterRefs[index] = el;
            }
          "
        ></Counter>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, reactive} from "vue";
import { useCoordStore } from "@/store/coordinateStore";
import CounterAttrs from "@/types/counter";
import Counter from "../components/Counter.vue";
import Hex from "../components/Hex.vue";

const store = useCoordStore();
const hexState = reactive({
  hexes: [{}],
});
/* Make Columns
 *  Input: Number (int), y_in (int)
 *  Output: None
 *  Description: This function uses a for loop to generate multiple elements for the Hexes list. i is the iterator
 *   k is the y value modifier. Each row needs to be 87 pixels away from the last, and thus k multiples the y_in
 *   variable by 87 to produce the position for the desired row.
 * */

const counters = ref<CounterAttrs[]>([
  {
    class: "counter-img",
    faction: "PRC",
    unit_name: "1 MCAB",
    unit_type: "MCAB",
    unit_size: "brigade",
    formation_id: "78GA",
    special_forces: "no",
    c_ref: 1,
  },
  {
    class: "counter-img",
    faction: "PRC",
    unit_name: "2 MCAB",
    unit_type: "MCAB",
    unit_size: "brigade",
    formation_id: "78GA",
    special_forces: "no",
    c_ref: 2,
  },
  {
    class: "counter-img",
    faction: "PRC",
    unit_name: "3 MCAB",
    unit_type: "MCAB",
    unit_size: "brigade",
    formation_id: "78GA",
    special_forces: "no",
    c_ref: 3,
  },
]);
function getRowOffset(row_index: number) {
  return store.rowOffset * row_index;
}

function getColumnOffset(odd: boolean): number {
  return odd ? 150 : 0;
}

function makeColumns(num_of_col: number, row_index: number, odd = false) {
  const k = getRowOffset(row_index);
  const c_offset = getColumnOffset(odd);
  for (let column = 0; column < num_of_col; column++) {
    let j = column * store.columnOffset + c_offset;
    hexState.hexes.push({ x: j, y: k });
  }
}

const counterRefs = ref([]);
function clickLog(x: number, y: number) {
  //store.counterCoords.x = x / 150;
  //store.counterCoords.y = y / 87;
  console.log(counterRefs.value[2].testMethod(x,y));
}

const computedX = computed(() => {
  return store.counterX_pos;
});

const computedY = computed(() => {
  return store.counterY_pos;
});

onBeforeMount(() => {
  const rows = 10;
  for (let i = 0; i < rows; i += 2) {
    makeColumns(8, i);
    makeColumns(7, i + 1, true);
  }
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
</style>
