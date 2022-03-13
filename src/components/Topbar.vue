<template>
  <button v-if="store.isCombatPhase" @click="moveClick">Movement Phase</button>
  <button v-if="store.isMovePhase" @click="combatPhaseClick">
    Combat Phase
  </button>
  <template v-if="store.isCombatPhase === true">
    <button @click="attackerClick">Set attackers</button>
    <button @click="defenderClick">Set set defenders</button>
    <button @click="combatClick">Attack</button>
    <label>Total attack: {{ combatStore.totalAttack }} </label>
    <label>Defense: {{ combatStore.totalDefense }}</label>
    <label>Column: {{ store.oddsRatio }}</label>
    <label
      >Your losses: {{ result.your_loss }}, Enemy losses:
      {{ result.enemy_loss }}</label
    >
  </template>
</template>

<script setup lang="ts">
import { useCoordStore } from "@/store/coordinateStore";
import { reactive } from "vue";
import { CombatOdds } from "@/scripts/combatOdds";
import {CombatStore} from "@/store/combatStore";

const store = useCoordStore();
const combatStore = CombatStore();

function moveClick() {
  store.isMovePhase = true;
  store.isCombatPhase = false;
}

function combatPhaseClick() {
  store.isMovePhase = false;
  store.isCombatPhase = true;
  console.log("combat phase: ", store.isCombatPhase);
}

function attackerClick() {
  store.setAttacker = true;
  store.setDefender = false;
}

function defenderClick() {
  store.setDefender = true;
  store.setAttacker = false;
}

const result = reactive({
  your_loss: 0,
  enemy_loss: 0,
  retreat: false,
});

function combatClick() {
  const combatOdds = CombatOdds(store.totalAttack, store.defender);
  const holder = combatOdds.getResult();
  result.your_loss = holder.yours;
  result.enemy_loss = holder.theirs;
  result.retreat = holder.retreat ?? false;
}
</script>

<style scoped></style>
