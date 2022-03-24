<template>
  <div class="map-section">
    <Topbar />
    <svg class="map" height="1000" width="2000">
      <g v-for="(hex, index) in HexList" :key="index">
        <Hex
          @click="callCounterMove(hex.x_pos, hex.y_pos, hex.terrain)"
          :terrain="hex.terrain"
          :x="hex.x_pos"
          :y="hex.y_pos"
        ></Hex>
      </g>
      <g v-for="(counter, index) in prcCounters" :key="index">
        <Counter
          :id="counter.id"
          :class="counter.class"
          :country="counter.faction"
          :unit_name="counter.unit_name"
          :unit_type="counter.unit_type"
          :unit_size="counter.unit_size"
          :formation_id="counter.formation_id"
          :x_in="counter.xPos"
          :y_in="counter.yPos"
          :ref="
            (el) => {
              counterStore.setRef(counter.id, accum);
              accum++;
              counterStore.counterRefs.push(el);
            }
          "
          @click="setCounterIndex(counter.id)"
        ></Counter>
      </g>
      <g v-for="(counter, index) in usaCounters" :key="index">
        <Counter
          :id="counter.id"
          :class="counter.class"
          :country="counter.faction"
          :unit_name="counter.unit_name"
          :unit_type="counter.unit_type"
          :unit_size="counter.unit_size"
          :formation_id="counter.formation_id"
          :x_in="counter.xPos"
          :y_in="counter.yPos"
          :ref="
            (el) => {
              counterStore.setRef(counter.id, accum);
              accum++;
              counterStore.counterRefs.push(el);
            }
          "
          @click="setCounterIndex(counter.id)"
        ></Counter>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">

import { onBeforeMount, ref } from "vue";
import { useCoordStore } from "@/store/coordinateStore";
import { CounterStore } from "@/store/counterStore";
import { CombatStore } from "@/store/combatStore";
import { UnitCounters } from "@/data/unitCounters";
import { makeGrid } from "@/scripts/makeGrid";

import Counter from "../components/Counter.vue";
import Hex from "../components/Hex.vue";
import Topbar from "@/components/phase-bar.vue";
import HexType from "@/types/hexType";

const store = useCoordStore();
const counterStore = CounterStore();
const combatStore = CombatStore();
const gridMake = makeGrid();

const counters = UnitCounters();
const prcCounters = counters.GroupArmy78;
const usaCounters = counters.I_Infantry;

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
  if (store.isMovePhase) {
    counterStore.counterRefs[store.counterIndex].counterMove(x, y, terrain);
  }
  // select attackers
  // select target
  // compute odds
  // roll for result
  // apply losses to units
  return null;
}

let accum = 0;

function setCounterIndex(unitId: string) {
  store.counterIndex = counterStore.getRefId(unitId);
  if (store.isCombatPhase && store.setAttacker) {
    counterStore.counterRefs[store.counterIndex].attack();
  }
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
