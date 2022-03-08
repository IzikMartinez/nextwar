import { defineStore } from "pinia";
import { CombatOdds } from "@/scripts/combatOdds";

export const useCoordStore = defineStore("main", {
  state: () => {
    return {
      counterCoords: {
        x: 0,
        y: 0,
      },
      columnCoefficient: 300,
      rowOffset: 87,
      counterIndex: 0,
      isMovePhase: true,
      isCombatPhase: false,
      setAttacker: false,
      setDefender: false,
      attackers: [0],
      defender: 1,
    };
  },
  getters: {
    counterX_pos: (state) => {
      return state.counterCoords.x * 150 + 50;
    },
    counterY_pos: (state) => {
      return state.counterCoords.y * 87 + 30;
    },
    totalAttack: (state) => {
      return state.attackers.reduce((a, b) => a + b);
    },
    oddsRatio: (state) => {
      // return state.attackers.reduce((a, b) => a + b) / state.defender;
      const combatOdds = CombatOdds(
        state.attackers.reduce((a, b) => a + b),
        state.defender
      );
      return combatOdds.getColumnIndex();
    },
  },
});
