import { defineStore } from "pinia";
import { ref } from "vue";
import { CounterStore } from "@/store/counterStore";

export const CombatStore = defineStore("combatMain", {
  state: () => ({
    attackers: ref([]),
    defender: 0,
    attackerIndex: 0,
  }),
  getters: {
    totalAttack: (state) => {
      return state.defender;
    }
  },
  actions: {
    addAttacker(unitID: string) {
      const counterStore = CounterStore();
      this.attackers.push(counterStore.getRef(unitID));
    },
    addDefender(unitID: string) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const defenderCounter = CounterStore().getRef(unitID).getStats;
      this.defender = defenderCounter.defense;
    },
    increment() {
      this.attackerIndex++;
    },
  },
});
