<template>
  <div id="app">
    <Home style="align-content: center"></Home>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() { console.log("mounted")}
})
</script>

<style>
* {
}
</style>
