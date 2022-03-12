import BaseCounter from "@/types/counter_types/BaseCounter";

interface PRC_Counter extends BaseCounter {
  faction?: "PRC";
  unit_size?: "brigade";
}

export default PRC_Counter;
