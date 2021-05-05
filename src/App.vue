<template>
  <div id="app">
    <router-link to="new-game">New Game</router-link>
    <router-link to="map">Map</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    console.log("mounted");
  },
})
</script>

<style>
* {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8));
}
</style>
