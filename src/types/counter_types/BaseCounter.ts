interface MakeCounter {
  id: string;
  class: string;
  faction: string;
  unit_name: string;
  unit_type: string;
  unit_size: string;
  formation_id: string;
  special_forces: string;
  c_ref: number;
  x_init: number;
  y_init: number;
}

interface BaseCounter {
  id: string;
  class: string;
  unit_name: string;
  unit_type: string;
  formation_id: string;
  special_forces?: string;
  xPos: number;
  yPos: number;
}

export default BaseCounter;
