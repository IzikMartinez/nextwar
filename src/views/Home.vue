<template>
  <div class="game-select">
    <h1>Next War</h1>
    <button
      class="inpak"
      @click="$router.push({ name: 'Map', params: { id: 1 } })"
    />
    <button
      class="taiwan"
      @click="$router.push({ name: 'Map', params: { id: 2 } })"
    />
    <button
      class="korea"
      @click="$router.push({ name: 'Map', params: { id: 3 } })"
    />
    <button
      class="poland"
      @click="$router.push({ name: 'Map', params: { id: 4 } })"
    />
    <button
      class="vietnam"
      @click="$router.push({ name: 'Map', params: { id: 5 } })"
    />
  </div>

  <div class="grid-container">
    <counter
      class="counter"
      unit_name="1 SBCT"
      unit_type="SBCT"
      country="USA"
      unit_size="brigade"
      formation_id="XXV"
    ></counter>
    <counter
      class="counter"
      unit_name="2 HCAB"
      unit_type="HCAB"
      country="PRC"
      unit_size="brigade"
      formation_id="I"
    ></counter>
    <counter
      class="counter"
      unit_name="3 MCAB"
      unit_type="MCAB"
      country="PRC"
      unit_size="brigade"
    ></counter>
    <counter
      class="counter"
      unit_name="1 BCT"
      country="USA"
      unit_size="brigade"
      formation_id="10-mtn"
    ></counter>
    <counter
      class="counter"
      unit_name="2 BCT"
      country="USA"
      unit_size="brigade"
      formation_id="101-abn"
    ></counter>
    <counter
      class="counter"
      unit_name="3 BCT"
      country="USA"
      unit_size="brigade"
      formation_id="82-abn"
    ></counter>
  </div>
</template>

<script>
import counter from "../components/Counter";
export default {
  name: "Select-Game",
  components: { counter },
};
</script>

<style scoped lang="scss">
$wi: calc(768px / 4);
$hi: calc(1366px / 4);

@mixin game-btn {
  width: $wi;
  height: $hi;
  background-size: $wi $hi;
  /* MARGIN */
  margin-top: 5rem;
  margin-right: 1rem;
  margin-left: 1rem;
  /* APPEARANCE */
  outline: none;
  appearance: none;
  border-radius: 1rem;
  filter: grayscale(100);
  &:hover {
    filter: none;
  }
}

.game-select {
  margin: auto;
  text-align: center;
  h1 {
    font-family: Impact, sans-serif;
    font-size: 4rem;
    color: white;
  }
  .inpak {
    @include game-btn;
    background: url("../assets/In-Pak.svg");
  }
  .taiwan {
    @include game-btn;
    background: url("../assets/Taiwan.svg");
  }
  .korea {
    @include game-btn;
    background: url("../assets/Taiwan.svg");
  }
  .poland {
    @include game-btn;
    background: url("../assets/Taiwan.svg");
  }
  .vietnam {
    @include game-btn;
    background: url("../assets/Taiwan.svg");
  }
}

.grid-container {
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: auto auto auto;
  padding: 2px;
}

.grid-container .counter {
  transform: scale(0.4);
  margin: 0;
  padding: 0;
}
</style>
