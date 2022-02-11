<template>
  <div class="map-section">
    <svg class="map" height="1000" width="2000">
      <g v-for="(hex, index) in HexList" :key="index">
        <Hex
          @click="callCounterMove(hex.x_pos, hex.y_pos, hex.terrain)"
          :terrain="hex.terrain"
          :x="hex.x_pos"
          :y="hex.y_pos"
        ></Hex>
      </g>

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
          @click="setCounterIndex(index)"
        ></Counter>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useCoordStore } from "@/store/coordinateStore";
import MakeCounter from "@/types/counter";
import { makeGrid } from "@/scripts/makeGrid";
import Counter from "../components/Counter.vue";
import Hex from "../components/Hex.vue";
import HexType from "@/types/hexType";

const store = useCoordStore();
const gridMake = makeGrid();
const counterRefs = ref([]);

const counters = ref<MakeCounter[]>([
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

const HexList = ref<HexType[]>([
  {
    terrain: "clear",
    x_pos: 0,
    y_pos: 0,
  },
  {
    terrain: "rough",
    x_pos: 1,
    y_pos: 0,
  },
  {
    terrain: "rough",
    x_pos: 2,
    y_pos: 0,
  },
  {
    terrain: "mountain",
    x_pos: 3,
    y_pos: 0,
  },
  {
    terrain: "clear",
    x_pos: 0,
    y_pos: 1,
  },
  {
    terrain: "rough",
    x_pos: 1,
    y_pos: 1,
  },
  {
    terrain: "rough",
    x_pos: 2,
    y_pos: 1,
  },
  {
    terrain: "mountain",
    x_pos: 3,
    y_pos: 1,
  },
  {
    terrain: "clear",
    x_pos: 0,
    y_pos: 2,
  },
  {
    terrain: "rough",
    x_pos: 1,
    y_pos: 2,
  },
  {
    terrain: "rough",
    x_pos: 2,
    y_pos: 2,
  },
  {
    terrain: "mountain",
    x_pos: 3,
    y_pos: 2,
  },
  {
    terrain: "clear",
    x_pos: 0,
    y_pos: 3,
  },
  {
    terrain: "rough",
    x_pos: 1,
    y_pos: 3,
  },
  {
    terrain: "rough",
    x_pos: 2,
    y_pos: 3,
  },
  {
    terrain: "mountain",
    x_pos: 3,
    y_pos: 3,
  },

]);

function callCounterMove(x: number, y: number, terrain: string) {
  //store.counterCoords.x = x / 150;
  //store.counterCoords.y = y / 87;
  counterRefs.value[store.counterIndex].counterMove(x, y, terrain);
  return null;
}

function setCounterIndex(index: number) {
  store.counterIndex = index;
}

onBeforeMount(() => {
  const rows = 10;
  for (let i = 0; i < rows; i += 2) {
    gridMake.makeColumns(8, i);
    gridMake.makeColumns(7, i + 1, true);
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
