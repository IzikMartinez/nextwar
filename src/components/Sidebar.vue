<template>
  <div class="fixed top-0 left-0 h-screen w-32 bg-primary flex flex-col text-center shadow-lg">
    <div id="top" class="flex-grow-0">
      <icon buttonText="sword">
        <img src="./src/assets/sword.svg" alt="">
      </icon>
    </div>
    <div id="bottom">
      <router-link to="/" class="sidebar-icon-low">Home</router-link>
      <router-link to="/new-game" class="sidebar-icon-low">New Game</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import icon from "@/components/fragments/bar-icon.vue";

</script>

<style scoped>
  .attack {
    background: url("./src/assets/sword.svg");
  }

</style>