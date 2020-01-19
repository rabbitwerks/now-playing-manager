<template>
  <div class="tracklist--outer">
    <div class="tracklist--header">
      Completed Tracks
    </div>
    <div class="tracklist--main">
      <Track-Item
        v-for="(track, i) in completedTracks"
        :key="track.track + i"
        :artist="track.artist"
        :track="track.track"
        :index="track.index"
      />
    </div>

  </div>
</template>

<script>
import Track_Item from './Track_Item.vue';

export default {
  computed: {
    completedTracks() {
      return this.$store.state.completedTracks;
    },
  },
  components: {
    'Track-Item': Track_Item,
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
}
.tracklist--main {
  max-height: 80vh;
  overflow-y: scroll;
}
</style>
