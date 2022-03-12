import BaseCounter from "@/types/counter_types/BaseCounter";

interface USA_Counter extends BaseCounter {
  faction: "USA";
  unit_size: "brigade";
}

export default USA_Counter;
