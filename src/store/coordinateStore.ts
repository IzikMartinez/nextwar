import { defineStore } from "pinia";

export const useCoordStore = defineStore("main", {
  state: () => ({
    counterCoords: {
      x: 4,
      y: 5,
    },
  }),
  getters: {
    counterX: (state) => {
      state.counterCoords.x * 150 + 50;
    },
    counterY: (state) => {
      state.counterCoords.y * 87 + 30;
    },
  },
});
