import {defineStore} from "pinia";
import {ref} from "vue";
import {CounterStore} from "@/store/counterStore";

export const CombatStore = defineStore("combatMain", {
  state: () => ({
    attackers: ref([]),
    defender: ref(),
    attackerIndex: 0,
  }),
  getters: {
    totalAttack: (state) => {
      let total = 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.attackers.forEach(element => total += element.getStats.attackVal);
      return total;
    },
    totalDefense: (state) => {
      if (state.defender.getStats.defenseVal)
        return state.defender.getStats.defenseVal;
      else return 1; // this number will be the denominator, and we cannot divide by zero
    },
  },
  actions: {
    addAttacker(unitID: string) {
      const counterStore = CounterStore();
      this.attackers.push(counterStore.getRef(unitID));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      counterStore.counterRefs.forEach( element => console.log(element.getFlag))
    },
    addDefender(unitID: string) {
      const counterStore = CounterStore();
      this.defender = counterStore.getRef(unitID);
    },
    increment() {
      this.attackerIndex++;
    },
  },
});
