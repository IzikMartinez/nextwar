<template>
  <div class="map-section">
    <div class="map-sub-parent">
      <svg class="map" height="500" width="500">
        <g style="transform: scale(2.5)">
          <g class="map-hexes">
            <g transform="translate(0,0)">
              <polygon points="100,0 50,87 -50,87 -100,0 -50,-87 50,-87"></polygon>
              <g class="tile"></g>
            </g>
            <g>
              <polygon points="100,0 0,0 100,100, 0,100" fill="white"></polygon>
            </g>
          </g>
        </g>

      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map"
}
</script>

<style scoped>

.map-section {
  max-width: 100%;
  width: max-content;
}

.map-section .map-sub-parent {
  margin-top: 5vh;
  overflow: auto;
  position: relative;
}

.map-section .map-hexes {
  transform: scale(0.5);
}
</style>