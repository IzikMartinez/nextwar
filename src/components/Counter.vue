<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    style="position: relative"
  >
    <g id="USA_Back">
      <rect v-bind:class="attributes.main_color" width="600" height="600" />
      <rect
        v-bind:class="attributes.stripe_color"
        y="220"
        width="600"
        height="120"
      />
      <g id="Corps_Color" data-name="Corps Color">
        <template v-if="$props.country === 'USA'">
          <g id="US_Army_Sigil">
            <path
              class="national-symbol"
              d="M432.79,67.77l15.69,5.09a54.33,54.33,0,0,1,46.87-34.13V22.24A70.86,70.86,0,0,0,432.79,67.77Z"
              transform="translate(0)"
            />
            <path
              class="national-symbol"
              d="M454.41,148.16l9.76-13.38a53.91,53.91,0,0,1-17.86-55.17l-15.72-5.1a70.23,70.23,0,0,0,23.82,73.65Z"
              transform="translate(0)"
            />
            <path
              class="national-symbol"
              d="M537.58,152.34,527.89,139a54,54,0,0,1-57.95,0l-9.8,13.42a70.55,70.55,0,0,0,77.44,0Z"
              transform="translate(0)"
            />
            <path
              class="national-symbol"
              d="M567.21,74.48l-15.73,5.13a53.77,53.77,0,0,1-17.88,55.15l9.71,13.41a70.26,70.26,0,0,0,23.9-73.69Z"
              transform="translate(0)"
            />
            <path
              class="national-symbol"
              d="M502.44,22.18v16.6a54.34,54.34,0,0,1,46.85,34.09L565,67.73A70.89,70.89,0,0,0,502.44,22.18Z"
              transform="translate(0)"
            />
            <path
              class="national-symbol"
              d="M499,38.85l12.13,37.34h39.26L518.65,99.27l12.13,37.34L499,113.53l-31.77,23.08,12.13-37.34L447.62,76.19h39.26Z"
              transform="translate(0)"
            />
          </g>
        </template>
        <template v-else-if="$props.country === 'PRC'">
          <g id="PRC" class="PRC-Sigil" transform="translate(360 15)">
            <path id="s" d="M54,17.4,87.3,120,0,56.6H107.91L20.61,120Z" />
            <path
              id="s-2"
              data-name="s"
              d="M155.91,0l-3.16,35.83L134.24,5l33.11,14.07-35.06,8.07Z"
            />
            <path
              id="s-3"
              data-name="s"
              d="M199.9,42.06,183.09,73.85,178,38.25l25.05,25.81L167.61,57.9Z"
            />
            <path
              id="s-4"
              data-name="s"
              d="M204.09,105.47l-28.32,22.17,9.88-34.58L198,126.85l-29.84-20.09Z"
            />
            <path
              id="s-5"
              data-name="s"
              d="M155.18,132.08,153.51,168l-19.77-30,33.66,12.7-34.69,9.51Z"
            />
          </g>
        </template>
        <template v-else-if="$props.country === 'ROK'">
          <g transform="scale(4) translate(120 23)">
            <g transform="rotate(-56.3099325) ">
              <!--arctan(-3/2)-->
              <g id="b2">
                <path id="b" d="M-6-26H6v2H-6zm0 3H6v2H-6zm0 3H6v2H-6z" />
                <use xlink:href="#b" y="44" />
              </g>
              <path stroke="#fff" d="M0,17v10" />
              <path fill="#cd2e3a" d="M0-12A12 12 0 0 1 0 12z" />
              <path fill="#0047a0" d="M0-12A12 12 0 0 0 0 12 6 6 0 0 0 0 0z" />
              <circle cy="-6" fill="#cd2e3a" r="6" />
            </g>
            <g transform="rotate(-123.6900675)">
              <use xlink:href="#b2" />
              <path stroke="#fff" d="M0-23.5v3M0,17v3.5M0,23.5v3" />
            </g>
          </g>
        </template>
        <template v-else-if="country === 'DPRK'">
          <g transform="scale(9 9) translate(30 -7)">
            <circle fill="#fff" cx="24" cy="18" r="8"/>
            <g id="star" transform="translate(24,18) scale(7.75)" fill="#ED1C27">
              <g id="cone">
                <polygon id="triangle" points="0,0 0,1 .5,1" transform="translate(0,-1) rotate(18)"/>
                <use xlink:href="#triangle" transform="scale(-1,1)" id="use12"/>
              </g>
              <use xlink:href="#cone" transform="rotate(72)" id="use14"/>
              <use xlink:href="#cone" transform="rotate(-72)" id="use16"/>
              <use xlink:href="#cone" transform="rotate(144)" id="use18"/>
              <use xlink:href="#cone" transform="rotate(-144)" id="use20"/>
            </g>
          </g>
        </template>
        <rect
          id="black box"
          v-bind:class="attributes.symbol_color"
          x="155"
          y="180"
          width="290"
          height="200"
          rx="18"
        />
        <rect
          id="unit_color"
          v-bind:class="attributes.color"
          x="167.5"
          y="192.5"
          width="265"
          height="175"
          rx="14"
        />
      </g>
      <template v-if="unit_type === 'ABCT' || unit_type === 'HCAB'">
        <g id="ABCT">
          <path
            v-bind:class="attributes.symbol_color"
            d="M175.07,12.29a53.94,53.94,0,0,0-8.69-5.77h0a55,55,0,0,0-26-6.52H55.27A54.82,54.82,0,0,0,28.9,6.7a54,54,0,0,0-8.66,5.83A55.17,55.17,0,0,0,0,55.27v8.52a55.21,55.21,0,0,0,25.19,46.36,55.8,55.8,0,0,0,9.71,5h0a55.16,55.16,0,0,0,20.36,3.88h85.06a55.27,55.27,0,0,0,55.26-55.27V55.27A55.15,55.15,0,0,0,175.07,12.29ZM60.21,10.51h75.18a51.61,51.61,0,0,1,20.07,4L97.79,56.85l-58-42.2A51.69,51.69,0,0,1,60.21,10.51ZM11.34,63V56c0-14.7,7.48-27.75,19.08-36.08L89.49,63,35.71,102.42C21.15,94.54,11.34,79.85,11.34,63Zm124,45.51H60.21a52,52,0,0,1-13.77-1.83L97.81,69l51.68,37.61A52.24,52.24,0,0,1,135.39,108.54ZM184.25,63c0,16.72-9.67,31.32-24.08,39.24L106.11,62.91l58.8-43.16c11.75,8.32,19.34,21.47,19.34,36.27Z"
            transform="translate(205 220)"
          />
        </g>
      </template>
      <template
        v-if="
          $props.unit_type === 'SBCT' ||
          unit_type === 'MCAB' ||
          unit_type === 'LCAB'
        "
      >
        <g id="wheeled_armor_symbol">
          <path
            v-bind:class="attributes.symbol_color"
            d="M249.45,324.57a22.68,22.68,0,1,0,22.68,22.67A22.67,22.67,0,0,0,249.45,324.57Zm0,39.13a16.46,16.46,0,1,1,16.45-16.46A16.45,16.45,0,0,1,249.45,363.7Z"
            transform="translate(0)"
          />
          <path
            v-bind:class="attributes.symbol_color"
            d="M297.64,324.57a22.68,22.68,0,1,0,22.67,22.67A22.67,22.67,0,0,0,297.64,324.57Zm0,39.13a16.46,16.46,0,1,1,16.45-16.46A16.45,16.45,0,0,1,297.64,363.7Z"
            transform="translate(0)"
          />
          <path
            v-bind:class="attributes.symbol_color"
            d="M345.83,324.57a22.68,22.68,0,1,0,22.67,22.67A22.67,22.67,0,0,0,345.83,324.57Zm0,39.13a16.46,16.46,0,1,1,16.45-16.46A16.45,16.45,0,0,1,345.83,363.7Z"
            transform="translate(0)"
          />
          <path
            id="Small_Armor_symbol"
            data-name="Small Armor"
            v-if="unit_type === 'SBCT' || unit_type === 'MCAB'"
            v-bind:class="attributes.symbol_color"
            d="M337.7,228.19H257.58c-28.74,0-52.07,20.62-52.07,46.06v7.09c0,25.44,23.33,46.06,52.07,46.06H337.7c28.76,0,52.06-20.62,52.06-46.06v-7.09C389.76,248.81,366.46,228.19,337.7,228.19Zm41.38,52.52c0,21-20.6,37.94-46,37.94H262.23c-25.41,0-46-17-46-37.94v-5.83c0-21,20.63-37.94,46-37.94h70.82c25.43,0,46,17,46,37.94Z"
            transform="translate(0)"
          />
        </g>
        <g id="med_armor_symbol" v-if="unit_type === 'SBCT'">
          <rect
            id="Medium_armor_symbol"
            class="cls-11"
            x="203.5"
            y="192.5"
            width="9"
            height="174"
          />
        </g>
      </template>
      <g
        id="infantry-symbol"
        v-if="unit_type !== 'ABCT' && unit_type !== 'HCAB'"
      >
        <rect
          v-bind:class="attributes.symbol_color"
          x="140.73"
          y="279.21"
          width="313.81"
          height="8.5"
          transform="translate(200.91 -116.01) rotate(32.79)"
        />
        <rect
          v-bind:class="attributes.symbol_color"
          x="140.73"
          y="279.21"
          width="313.81"
          height="8.5"
          transform="translate(-106.37 207.84) rotate(-33)"
        />

        <template v-if="attributes.special_forces === 'mountain'">
          <g id="Mountain">
            <polygon
              v-bind:class="attributes.symbol_color"
              points="300.18,297.64 269,372.5 331.36,372.5 		"
            />
          </g>
        </template>
        <template v-if="attributes.special_forces === 'marines'">
          <path
            id="Marine"
            v-bind:class="attributes.symbol_color"
            d="M349.94,288.12l-7.44-14.27c-0.2-0.36-0.7-0.36-0.9,0l-7.44,14.27
		c-0.18,0.34,0.07,0.75,0.44,0.75h4.06c-0.28,7.95-5.97,15.01-14.7,19.63c-2.27,1.2-4.76,2.24-7.41,3.09
		c-3.75,1.19-7.84,2.01-12.15,2.34V252.2h23.28c1.39,0,2.51-1.15,2.51-2.56v-1.28c0-1.42-1.13-2.57-2.51-2.57H304.4v-6.01
		c4.78-1.82,8.18-6.5,8.18-11.99c0-7.07-5.64-12.8-12.58-12.8c-6.95,0-12.59,5.74-12.59,12.8c0,5.49,3.41,10.18,8.19,12v6h-23.28
		c-1.39,0-2.52,1.15-2.52,2.57v1.28c0,1.41,1.13,2.56,2.52,2.56h23.28v61.77c-4.5-0.32-8.76-1.15-12.67-2.39
		c-2.84-0.9-5.5-2.03-7.9-3.36c-8.46-4.62-13.93-11.56-14.21-19.36h4.57c0.38,0,0.62-0.41,0.44-0.75l-7.44-14.27
		c-0.19-0.36-0.7-0.36-0.89,0l-7.44,14.27c-0.18,0.34,0.06,0.75,0.44,0.75h4.21c-1.23,2.48-1.9,5.08-1.9,7.79
		c0,11.42,11.83,21.22,28.69,25.4l15.98,7.48c1.33,0.62,2.87,0.62,4.21,0l15.66-7.34c17.18-4.08,29.3-13.99,29.3-25.54
		c0-2.71-0.66-5.31-1.89-7.79h4.73C349.88,288.87,350.12,288.46,349.94,288.12z M292.66,227.8c0-4.13,3.28-7.47,7.34-7.47
		c4.05,0,7.33,3.34,7.33,7.47s-3.28,7.47-7.33,7.47C295.94,235.27,292.66,231.93,292.66,227.8z"
          />
        </template>
        <template v-if="attributes.special_forces === 'paratrooper'">
          <path
            id="Para"
            v-bind:class="attributes.symbol_color"
            d="M395,303.23l-5.41,6.51c-8.81-8.94-21.65-14.58-35.95-14.58c-26.55,0-48.07,19.43-48.07,43.39
		c0,0.48,0.01,0.97,0.03,1.45h-9.67c0.02-0.48,0.03-0.97,0.03-1.45c0-23.96-21.52-43.39-48.07-43.39c-15.23,0-28.8,6.39-37.6,16.36
		l-5.28-6.36c10.36-11.43,25.73-18.67,42.89-18.67c24.16,0,44.78,14.37,52.84,34.58c8.01-20.49,28.68-35.07,52.91-35.07
		C369.98,286,384.69,292.63,395,303.23z"
          />
        </template>
      </g>

      <g id="Formation">
        <template v-if="unit_size === 'brigade'">
          <text
            id="X"
            v-bind:class="attributes.formation_color"
            transform="translate(260 177) scale(1.1 1)"
          >
            X
          </text>
        </template>
        <template v-else-if="unit_size === 'division'">
          <text
            id="XX"
            v-bind:class="attributes.formation_color"
            transform="translate(230 177) scale(1.1 1)"
          >
            XX
          </text>
        </template>
        <template v-else-if="unit_size === 'corps'">
          <text
            id="XXX"
            v-bind:class="attributes.formation_color"
            transform="translate(200 177) scale(1.1 1)"
          >
            XXX
          </text>
        </template>
      </g>

      <g id="Unit_ID" data-name="Unit ID">
        <text v-bind:class="attributes.unit_id_color" transform="translate(27.2 104.83)">
          {{ props.unit_name }}
        </text>
      </g>
      <g id="Stats" class="text-color">
        <g id="Attack" data-name="Attack">
          <text
            id="_3-2"
            data-name="3"
            v-bind:class="attributes.stats_color"
            transform="translate(81.62 538.96)"
          >
            {{ stats.attack }}
          </text>
        </g>
        <g id="Defense" data-name="Defense">
          <path
            id="shield"
            class="shield"
            d="M362.83,405.91v76.88c0,.63,0,1.24,0,1.86-.81,42.78-29.69,77.15-65.16,77.15s-64.37-34.37-65.19-77.15c0-.62,0-1.23,0-1.86V405.91c1.76,6.85,15.67,12.19,32.59,12.19s30.86-5.35,32.61-12.21c1.73,6.86,15.66,12.21,32.59,12.21S361.08,412.76,362.83,405.91Z"
            transform="translate(0)"
          />
          <g id="_3" data-name="3">
            <text id="_3-2" data-name="3" class="defense">
              {{ stats.defense }}
            </text>
            />
          </g>
        </g>
        <g id="Mechanized_D">
          <rect
            id="mechanized_movement"
            v-if="
              attributes.movement_type === 'mechanized' ||
              attributes.movement_type === 'light'
            "
            v-bind:class="attributes.movement_background_color"
            x="430"
            y="410"
            width="110"
            height="150"
            rx="14"
          />
          <circle
            v-if="attributes.movement_type === 'wheeled'"
            class="charcoal"
            cx="485"
            cy="490"
            r="85"
          />
          <text
            id="_8"
            data-name="8"
            v-bind:class="attributes.movement_color"
            transform="translate(445 550) scale(0.84 1)"
          >
            {{ stats.movement }}
          </text>
        </g>
        <g id="ER" data-name="ER" transform="translate(10 10)">
          <polygon
            class="charcoal"
            points="453.54 269.29 518.74 191.34 583.94 269.29 518.74 347.24 453.54 269.29"
          />
          <text
            id="_6"
            data-name="6"
            v-bind:class="attributes.small_text_color"
            transform="translate(490 310)"
          >
            {{ stats.efficiency_rating }}
          </text>
        </g>
        <g id="Stacking">
          <circle class="charcoal" cx="80" cy="280" r="60" />
          <text
            v-bind:class="attributes.small_text_color"
            transform="translate(55 318)"
          >
            {{ stats.stacking_value }}
          </text>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
import { defineComponent, onBeforeMount, reactive } from "vue";

export default defineComponent({
  name: "Counter",
  props: {
    country: String,
    unit_name: String,
    unit_type: String,
    unit_size: String,
    formation_id: String,
    special_forces: String,
  },
  setup: function (props, context) {
    const stats = reactive({
      unit_id: "1 SBCT",
      attack: 3,
      defense: 3,
      movement: 8,
      efficiency_rating: 6,
      stacking_value: 2,
    });

    const attributes = reactive({
      main_color: String,
      stripe_color: String,
      color: "cls-14",
      unit_id_color: "unit-id-white",
      formation_color: "formation",
      stats_color: "white",
      small_text_color: "small-white",
      symbol_color: "black",
      movement_color: "white",
      movement_background_color: String,
      movement_type: "",
      special_forces: String,
    });

    function assignStats(attack, defense, movement, stacking) {
      stats.attack = attack;
      stats.defense = defense;
      stats.movement = movement;
      stats.stacking_value = stacking;
    }

    function assignAttrs(move_type) {
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

    function assignStatsAttrs(attack, defense, movement, stacking, move_type) {
      assignStats(attack, defense, movement, stacking);
      assignAttrs(move_type);
    }

    onBeforeMount(() => {
      attributes.special_forces = props.special_forces;
      if (props.country === "USA") {
        attributes.main_color = "main-color-USA";
        attributes.stripe_color = "stripe-color-USA";
        stats.efficiency_rating = 7;
        if (props.unit_type === "SBCT") {
          assignStatsAttrs(4, 5, 8, 2, "wheeled");
        } else if (props.unit_type === "ABCT") {
          assignStatsAttrs(7, 7, 8, 2, "tracked");
        } else {
          assignStatsAttrs(3, 4, 4, 1, "light");
        }
        switch (props.formation_id) {
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
      } else if (props.country === "PRC") {
        // CHINA
        attributes.main_color = "main-color-PRC";
        attributes.stripe_color = "stripe-color-PRC";
        stats.efficiency_rating = 6;
        if (props.unit_type === "MCAB") {
          assignStatsAttrs(4, 4, 7, 2, "wheeled");
        } else if (props.unit_type === "HCAB") {
          assignStatsAttrs(6, 5, 8, 2, "tracked");
        } else if (props.unit_type === "LCAB") {
          assignStatsAttrs(3, 4, 6, 2, "wheeled");
        }
      } else if (props.country === "ROK") {
        attributes.main_color = "white";
        attributes.stats_color = "black";
        attributes.formation_color = "formation-black";
        attributes.unit_id_color = "unit-id-black";
      } else if(props.country === "DPRK") {
        attributes.main_color = "main-color-DPRK";
        attributes.stripe_color = "stripe-color-DPRK";
      }
    });

    return {
      attributes,
      stats,
      props,
    };
  },
});
</script>

<style scoped lang="scss">
.stripe-color-USA {
  fill: #a4a966;
}

.stripe-color-PRC {
  fill: #f5ea14;
}

.stripe-color-DPRK {
  fill: #024fa2;
}

.main-color-USA {
  fill: #6f7328;
}

.main-color-USMC {
  fill: #28736d;
}

.main-color-PRC {
  fill: #ed2128;
}

.main-color-DPRK {
  fill: #ed1c27;
}

.PRC-Sigil {
  fill: #f5ea14;
}

@mixin white-fill {
  fill: #fff;
}

@mixin font-weight-700 {
  font-weight: 700;
}

@mixin crimson-text {
  font-family: CrimsonText-Bold, Crimson Text, serif;
}

@mixin ibm {
  font-family: IBMPlexSerif-Bold, IBM Plex Serif, serif;
}

@mixin small-text {
  @include crimson-text;
  font-weight: 600;
  font-size: 120px;
}
.small-white {
  @include small-text;
  fill: white;
}
.small-black {
  @include small-text;
  fill: black;
}

@mixin unit-id {
  font-size: 90px;
  font-family: Impact, sans-serif;
  //transform: translate(104.83 27.2);
}

.unit-id-white {
  @include unit-id;
  fill: white;
}

.unit-id-black {
  @include unit-id;
  fill: black;
}

.text-color {
  .white {
    @include crimson-text;
    @include font-weight-700;
    font-size: 180px;
    fill: #ffffff;
  }
  .black {
    @include crimson-text;
    @include font-weight-700;
    font-size: 180px;
    fill: #000000;
  }
}

.defense {
  @include ibm;
  transform: matrix(10, 0, 0, 11, 260, 538.96);
  font-weight: 500;
  fill: black;
}

.national-symbol {
  @include white-fill;
}

.charcoal {
  fill: #393939;
}
.black {
  fill: #000000;
}
.white {
  fill: #ffffff;
}

.yellow {
  fill: #fff100;
}
.lime {
  fill: #d6de23;
}
.navy {
  fill: #0a31a8;
}
.cobalt {
  fill: #1b75bb;
}
.light-blue {
  fill: #26a9e0;
}
.green {
  fill: #06d767;
}
.aqua {
  fill: #00a14b;
}
.forest-green {
  fill: #186518;
}
.purple {
  fill: #9966cc;
}
.coral {
  fill: #ff7f50;
}
.red {
  fill: #ec1c24;
}

.cls-10,
.cls-17,
.cls-8 {
  fill: #fff;
}

.shield {
  @include white-fill;
}

.cls-4 {
  font-size: 161px;
  letter-spacing: 0.05em;
}

.cls-11,
.cls-4,
.cls-7 {
  fill: #231f20;
}

.cls-4,
.cls-5 {
  font-family: IBMPlexSerif-Bold, IBM Plex Serif;
}

.cls-4,
.cls-5,
.cls-8 {
  font-weight: 700;
}

.cls-5 {
  font-size: 163.87px;
  letter-spacing: 0.05em;
}

.cls-6 {
  fill: #404041;
}

.cls-8 {
  font-size: 102.21px;
}

.cls-15,
.cls-8 {
  @include crimson-text;
}

@mixin movement-allowance {
  font-size: 165px;
  font-family: JetBrainsMono-ExtraBold, JetBrains Mono, monospace;
  font-weight: 800;
}

.mechanized-ma {
  @include movement-allowance;
  fill: #ec1c24;
}

.light-infantry-ma {
  @include movement-allowance;
  fill: yellow;
}

.motorized-ma {
  @include movement-allowance;
  fill: #26a9e0;
}

.cls-10 {
  fill-rule: evenodd;
}

.cls-11,
.cls-12,
.cls-13,
.cls-14 {
  stroke: #231f20;
  stroke-miterlimit: 10;
}

.cls-14 {
  fill: #26a9e0;
}

.cls-15 {
}

.cls-16 {
  font-size: 85px;
}

@mixin formation {
  font-size: 85px;
  @include ibm;
  @include font-weight-700;
}

.formation {
  @include formation;
  fill: #fff;
}

.formation-black {
  @include formation;
  fill: black;
}

.cls-17 {
  font-size: 90.18px;
  font-family: Impact, sans-serif;
}
</style>
