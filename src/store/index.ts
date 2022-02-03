import { createStore } from "vuex";

const store = createStore({
  state: {
    hexCoords: {},
    counterCoords: {
      x: 0,
      y: 0,
    },
  },
  getters: {
    getX: (state) => {
      return state.counterCoords.x * 150 + 50;
    },
    getY: (state) => {
      return state.counterCoords.y * 87 + 30;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
