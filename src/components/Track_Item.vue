<template>
  <div
    @dblclick="setCurrentTrack"
    @click.shift="replayTrack"
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
    played: {
      type: Boolean,
      required: true,
    },
    replayed: {
      type: Boolean,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      hasBeenPlayed: false,
    };
  },
  methods: {
    setCurrentTrack() {
      // checks if song has been played and negates the click event if true
      if (this.played) {
        return;
      }
      // pushes the clicked track to the now playing component
      this.$store.dispatch('set_NowPlaying_ACTION', {
        artist: this.artist,
        track: this.track,
        played: true,
        replayed: false,
        index: this.index,
      });
    },
    replayTrack() {
      this.$store.dispatch('set_NowPlaying_ACTION', {
        artist: this.artist,
        track: this.track,
        played: true,
        replayed: true,
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
