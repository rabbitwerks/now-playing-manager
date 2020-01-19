<template>
  <div class="tracklist--outer">
    <div class="tracklist--header">
      Available Tracks
    </div>
    <div class="tracklist--main">
      <Track-Item
        v-for="(track, i) in avaliableTracks"
        :key="track.track + i"
        :index="i"
        :artist="track.artist"
        :track="track.track"
      />
    </div>
  </div>
</template>

<script>
import Track_Item from './Track_Item.vue';

export default {
  components: {
    'Track-Item': Track_Item,
  },
  computed: {
    avaliableTracks() {
      return this.$store.state.avaliableTracks;
    },
  },
};
</script>

<style scoped>
.tracklist--outer {
  height: 100%;
  border: 3px solid #42b983;
}
.tracklist--header {
  font-size: 1.5rem;
  padding: .5rem;
  border-bottom: 3px solid #42b983;
}
.tracklist--main {
  height: 78vh;
  overflow-y: scroll;
}
</style>
