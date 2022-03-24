<template>
  <div id="app" class="fixed top-0 left-0 bg-opacity-80 bg-primary h-screen w-screen " >
    <Topbar></Topbar>
    <router-view class="top-0 left-32 mx-32 w-screen h-screen"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "@/components/Sidebar.vue";

export default defineComponent({
  components: { Topbar },
  setup() {
    console.log("mounted");
  },
});
</script>

<style lang="scss">
:root {
  --hex-color: black;
  --stroke: white;
}

#app {
  //body {
  //  border: none;
  //  background-image: linear-gradient(
  //    to bottom,
  //    rgba(0, 0, 0, 0.2),
  //    rgba(0, 0, 0, 0.8)
  //  );
  //}
}

.links {
  margin: auto;
}
</style>
