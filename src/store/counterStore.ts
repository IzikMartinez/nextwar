import { defineStore } from "pinia";
import { ref } from "vue";

export const CounterStore = defineStore("counterMain", {
  state: () => ({
    counterRefs: ref([]),
    counterRefsMap: new Map(),
    refIndex: 0,
  }),
  getters: {},
  actions: {
    setRef(unitID: string, index: number) {
      this.counterRefsMap.set(unitID, index);
      //this.refIndex = this.refIndex + 1;
    },
    getRefId(unitID: string) {
      return this.counterRefsMap.get(unitID);
    },
    getRef(unitID: string): never {
      const refID = this.getRefId(unitID);
      // @ts-ignore
      return this.counterRefs[refID];
    },
  },
});
