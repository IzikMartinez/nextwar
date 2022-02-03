import { defineStore } from "pinia";
import {ref} from "vue";

export const useCoordStore = defineStore("main", {
  state: () => {
    return {
      counterCoords: {
        x: 0,
        y: 0,
      },
      columnOffset: 300,
      rowOffset: 87,
      counterRef: ref(),
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
