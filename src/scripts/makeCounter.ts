import { reactive } from "vue";

export function makeCounter(
  spec_ops: string,
  country: string,
  formation_id: string,
  unit_type: string
) {
  const stats = reactive({
    attack: 3,
    defense: 3,
    movement: 8,
    efficiency_rating: 6,
    stacking_value: 2,
  });

  const attributes = reactive({
    main_color: "",
    stripe_color: "",
    color: "cls-14",
    unit_id_color: "unit-id-white",
    formation_color: "formation",
    stats_color: "white",
    small_text_color: "small-white",
    symbol_color: "black",
    movement_color: "white",
    movement_background_color: "",
    special_forces: "",
    movement_type: "",
  });

  function assignStats(
    attack: number,
    defense: number,
    movement: number,
    stacking: number
  ) {
    stats.attack = attack;
    stats.defense = defense;
    stats.movement = movement;
    stats.stacking_value = stacking;
  }

  function assignMovementAttrs(move_type: string) {
    if (move_type === "wheeled") {
      attributes.movement_background_color = "null";
      attributes.movement_color = "motorized-ma";
      attributes.movement_type = "wheeled";
    } else if (move_type === "tracked") {
      attributes.movement_background_color = "white";
      attributes.movement_color = "mechanized-ma";
      attributes.movement_type = "mechanized";
    } else if (move_type === "light") {
      attributes.movement_background_color = "black";
      attributes.movement_color = "light-infantry-ma";
      attributes.movement_type = "light";
    }
  }

  function assignStatsAttrs(
    attack: number,
    defense: number,
    movement: number,
    stacking: number,
    move_type: string
  ) {
    assignStats(attack, defense, movement, stacking);
    assignMovementAttrs(move_type);
  }

  function createCounter() {
    if (spec_ops != "") {
      attributes.special_forces = spec_ops;
    }
    if (country === "USA") {
      attributes.main_color = "main-color-USA";
      attributes.stripe_color = "stripe-color-USA";
      stats.efficiency_rating = 7;
      if (unit_type === "SBCT") {
        assignStatsAttrs(4, 5, 8, 2, "wheeled");
      } else if (unit_type === "ABCT") {
        assignStatsAttrs(7, 7, 8, 2, "tracked");
      } else {
        assignStatsAttrs(3, 4, 4, 1, "light");
      }
      switch (formation_id) {
        case "I":
          attributes.color = "red";
          break;
        case "CAV":
          attributes.color = "green";
          break;
        case "II":
          attributes.color = "coral";
          break;
        case "III":
          attributes.color = "yellow";
          break;
        case "XXV":
          attributes.color = "light-blue";
          break;
        case "10-mtn":
          attributes.color = "purple";
          attributes.special_forces = "mountain";
          break;
        case "101-abn":
          attributes.color = "forest-green";
          attributes.symbol_color = "white";
          attributes.special_forces = "paratrooper";
          break;
        case "82-abn":
          attributes.color = "navy";
          attributes.symbol_color = "white";
          attributes.special_forces = "paratrooper";
          break;
        default:
          attributes.color = "white";
          break;
      }
    } else if (country === "PRC") {
      // CHINA
      attributes.main_color = "main-color-PRC";
      attributes.stripe_color = "stripe-color-PRC";
      stats.efficiency_rating = 6;
      if (unit_type === "MCAB") {
        assignStatsAttrs(4, 4, 7, 2, "wheeled");
      } else if (unit_type === "HCAB") {
        assignStatsAttrs(6, 5, 8, 2, "tracked");
      } else if (unit_type === "LCAB") {
        assignStatsAttrs(3, 4, 6, 2, "wheeled");
      } switch (formation_id) {
        case "79ga":
          attributes.color = "red";
          break;
        case "80ga":
          attributes.color = "green";
          break;
        case "78ga":
          attributes.color = "coral";
          break;
        case "III":
          attributes.color = "yellow";
          break;
        case "XXV":
          attributes.color = "light-blue";
          break;
        case "10-mtn":
          attributes.color = "purple";
          attributes.special_forces = "mountain";
          break;
        case "101-abn":
          attributes.color = "forest-green";
          attributes.symbol_color = "white";
          attributes.special_forces = "paratrooper";
          break;
        case "82-abn":
          attributes.color = "navy";
          attributes.symbol_color = "white";
          attributes.special_forces = "paratrooper";
          break;
        default:
          attributes.color = "white";
          break;
      }
    } else if (country === "ROK") {
      attributes.main_color = "white";
      attributes.stats_color = "black";
      attributes.formation_color = "formation-black";
      attributes.unit_id_color = "unit-id-black";
    } else if (country === "DPRK") {
      attributes.main_color = "main-color-DPRK";
      attributes.stripe_color = "stripe-color-DPRK";
    }
  }

  return {
    stats,
    attributes,
    createCounter,
  };
}
