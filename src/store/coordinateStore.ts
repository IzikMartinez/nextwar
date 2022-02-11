import { defineStore } from "pinia";

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
    };
  },
  getters: {
    counterX_pos: (state) => {
      return state.counterCoords.x * 150 + 50;
    },
    counterY_pos: (state) => {
      return state.counterCoords.y * 87 + 30;
    },
  },
});
