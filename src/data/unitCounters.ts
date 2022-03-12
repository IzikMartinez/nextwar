import { ref } from "vue";
import PRC_Counter from "@/types/counter_types/PRC_Counter";
import USA_Counter from "@/types/counter_types/USA_Counter"

export function UnitCounters() {
  const usaFaction = "USA";
  const prcFaction = "PRC";
  const brigade = "brigade";
  const GroupArmy78 = ref<PRC_Counter[]>([
    {
      id: "prc_78ga_8hcab",
      class: "counter-img",
      unit_name: "8 HCAB",
      unit_type: "HCAB",
      xPos: 0,
      yPos: 0,
      faction: prcFaction,
      unit_size: brigade,
      formation_id: "78ga",
    },
    {
      id: "prc_78ga_78hcab",
      class: "counter-img",
      unit_name: "78 HCAB",
      unit_type: "HCAB",
      xPos: 0,
      yPos: 1,
      unit_size: brigade,
      faction: prcFaction,
      formation_id: "78ga",
    },
    {
      id: "prc_78ga_202hcab",
      class: "counter-img",
      unit_name: "20 HCAB",
      unit_type: "HCAB",
      xPos: 1,
      yPos: 1,
      faction: prcFaction,
      unit_size: brigade,
      formation_id: "78ga",
    },/*
    {
      id: "prc_78ga_204hcab",
      class: "counter-img",
      unit_name: "204 HCAB",
      unit_type: "HCAB",
      xPos: 0,
      yPos: 0,
      faction: prcFaction,
      unit_size: brigade,
      formation_id: "78ga",
    },
    {
      id: "prc_78ga_8hcab",
      class: "counter-img",
      unit_name: "8 HCAB",
      unit_type: "HCAB",
      xPos: 0,
      yPos: 0,
      faction: prcFaction,
      unit_size: brigade,
      formation_id: "78ga",
    },
    {
      id: "prc_78ga_8hcab",
      class: "counter-img",
      unit_name: "8 HCAB",
      unit_type: "HCAB",
      xPos: 0,
      yPos: 0,
      faction: prcFaction,
      unit_size: brigade,
      formation_id: "78ga",
    },
    */
  ]);

  const Iformatiion = "I"
  const I_Infantry = ref<USA_Counter[]>([
    {
      id: "USA_1st_1ABCT",
      class: "counter-img",
      unit_name: "1 ABCT",
      unit_type: "ABCT",
      xPos: 1,
      yPos: 0,
      unit_size: brigade,
      faction: usaFaction,
      formation_id: Iformatiion,
    },
    {
      id: "USA_1st_2ABCT",
      class: "counter-img",
      unit_name: "2 ABCT",
      unit_type: "ABCT",
      xPos: 2,
      yPos: 0,
      unit_size: brigade,
      faction: usaFaction,
      formation_id: Iformatiion,
    },
  ]);

  return { GroupArmy78, I_Infantry};
}