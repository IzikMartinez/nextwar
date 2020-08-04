<template>
  <div class="new-game-page">

    <div class="players">
      <label for="p1" class="player-label">Player 1</label>
      <input type="text"
             name="p1"
             id="p1"
             class="player-input"
             placeholder="Enter name..."
             v-model="player1_name"
      >

      <label for="p2" class="player-label">Player 2</label>
      <input type="text"
             name="p2"
             id="p2"
             class="player-input"
             placeholder="Enter name..."
             v-model="player2_name"
      >
    </div>

    <div class="roles">

      <label for="sides-p1"></label><select name="Side" id="sides-p1" class="sides" v-model="p1_side">
        <option value="india">India</option>
        <option value="pakistan">Pakistan</option>
        <option value="solo">Solo</option>
      </select>


      <label for="sides-p2"></label><select
        name="Side"
        id="sides-p2"
        class="sides"
        v-model="p2_side"
        v-if="p1_side !== 'india' && p1_side !== 'pakistan'"
      >
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="solo">Solo</option>
      </select>
    </div>

    <button @click="toMap">TEST</button>
  </div>

</template>

<script>
export default {
  name: "NewGame",
  data() {
    return {
      player1_name: '',
      player2_name: '',
      p1_side: '',
      p2_side: ''
    }
  },
  methods: {
    toMap() {
      this.$router.push('/Map')
    }
  }
}
</script>

<style scoped>

.players {
  margin-top: 50px;
  display: block;
}

.players .player-label {
  display: block;
  margin-top: 5vh;
}

.players .player-input {
  display: block;
  margin-left: 41vw;
  width: 15vw;
  padding: 10px;

  appearance: none;
  outline: none;

  /*FONT*/
  color: #313131;
  font-size: 14px;
  font-weight: 600;

  /*BOX APPEARANCE*/
  background-color: rgba(255,255,255,0.50);
  border-radius: 5px;
}

.players .player-input:focus {
  background-color: white;
  color: black;
}

.roles {
  margin-top: 5vh;
}

.roles .sides {
  margin: 5px;
  border-radius: 5px;
  width: 7vw;
}


</style>