<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/new-game">New Game</router-link>
    <router-view></router-view>
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

<style lang="scss">
:root {
  --hex-color: black;
  --stroke: white;
}

#app {
  body {
    border: none;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.8)
    );
  }
}

.links {
  margin: auto;
}
</style>
