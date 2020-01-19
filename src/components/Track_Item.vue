<template>
  <div
    @dblclick="setCurrentTrack"
    class="track--outer"
    >
    <div class="track--artist">
      {{ artist }}
    </div>
    <div class="track--title">
      {{ track }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: String,
      required: true,
    },
    track: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    setCurrentTrack() {
      this.$store.dispatch('set_NowPlaying_ACTION', {
        artist: this.artist,
        track: this.track,
        index: this.index,
      });
    },
  },
};
</script>

<style scoped>
.track--outer {
  border-top: 1px solid #42b983;
  padding: .35rem 0;
}
.track--outer:hover {
  background-color: rgb(87, 92, 87);
}

</style>
