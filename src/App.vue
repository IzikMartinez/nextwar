<template>
  <div id="app">
    <main>
      <button class="title" @click="goHome"></button>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Impact", sans-serif;
}

#app {
  text-align: center;
  color: white;
  background-color: #141e26;
  /*background-image: url("assets/back.jpg");*/
  background-size: cover;
  background-position: bottom;
}

main {
  min-height: 100vh;
  padding: 25px;

  background: linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.25));
}

.title {
  background: url("assets/Home.svg");

  /*SIZE*/
  width: calc(230px * 1.5);
  height: calc(78px * 1.5);

  /*POSITION*/
  margin-top: 20px;

  /*APPEARANCE*/
  border: none;
}

.title:hover {
  fill: #313131;
}


</style>
