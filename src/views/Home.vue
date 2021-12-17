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
      country="ROK"
      unit_name="1 SBCT"
      unit_type="SBCT"
      unit_size="brigade"
      formation_id="XXV"
    ></counter>

    <counter
      class="counter"
      country="PRC"
      unit_name="1 LCAB"
      unit_type="LCAB"
      unit_size="brigade"
    ></counter>
    <counter
      class="counter"
      country="PRC"
      unit_name="2 MCAB"
      unit_type="MCAB"
      unit_size="brigade"
    ></counter>
    <counter
      class="counter"
      country="PRC"
      unit_name="3 HCAB"
      unit_type="HCAB"
      unit_size="brigade"
      formation_id="I"
    ></counter>
    <counter
      class="counter"
      country="DPRK"
      unit_name="1 BCT"
      unit_size="brigade"
      formation_id="10-mtn"
    ></counter>
    <counter
      class="counter"
      country="USA"
      unit_name="2 BCT"
      unit_size="brigade"
      formation_id="101-abn"
    ></counter>
    <counter
      class="counter"
      country="USA"
      unit_name="3 BCT"
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
  grid-column-gap: 1px;
  grid-template-columns: auto auto auto auto auto;
}

.grid-container .counter {
  transform: scale(0.4);
  margin: 0;
  padding: 0;
}
</style>
