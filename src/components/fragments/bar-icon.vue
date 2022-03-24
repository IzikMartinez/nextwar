<template>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";

const props = defineProps({
  iconName: String,
})

const iconUrl = computed(()=> {
  return "./src/assets/" + props.iconName +".svg";
})

</script>

<style scoped>

</style>