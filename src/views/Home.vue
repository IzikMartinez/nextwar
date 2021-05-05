<template>
  <div class="game-select">
<!--    <button class="india-button" @click="$router.push('NewGame')"></button>-->
<!--    <button class="taiwan-button"></button>-->
  </div>
</template>

<script>
export default {
  name: "Select-Game",
};
</script>

<style scoped>
.game-select {
  margin: auto;
}

.game-select .india-button {
  width: calc(768px / 4);
  height: calc(1366px / 4);

  background: url("../assets/In-Pak.svg");
  background-size: calc(768px / 4) calc(1366px / 4);

  /*BUTTON APPEARANCE*/
  outline: none;
  appearance: none;
  border-radius: 10px;
  filter: grayscale(100);
  margin-right: 20px;
}

.game-select .india-button:hover {
  filter: none;
}

.game-select .taiwan-button {
  width: calc(768px / 4);
  height: calc(1366px / 4);

  background: url("../assets/Taiwan.svg");
  background-size: calc(768px / 4) calc(1366px / 4);

  /*BUTTON APPEARANCE*/
  outline: none;
  appearance: none;
  border-radius: 10px;
  filter: grayscale(100);
}

.game-select .taiwan-button:hover {
  filter: none;
}

.game-select .NW-button {
  width: calc(768px / 4);
  height: calc(1366px / 4);

  background: url("../assets/back.jpg");
  background-size: calc(768px / 4) calc(1366px / 4);

  /*BUTTON APPEARANCE*/
  outline: none;
  appearance: none;
  border-radius: 10px;
  filter: grayscale(100);
}

.game-select .NW-button:hover {
  filter: none;
}
</style>
