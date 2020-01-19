<template>
  <div class="tracklist--outer">
    <div class="tracklist--header">
      Available Tracks
    </div>
    <div class="tracklist--main">
      <Track-Item
        v-for="track in tracks"
        :key="track.title"
        :artist="track.artist"
        :title="track.title"
      />
    </div>

  </div>
</template>

<script>
import Track_Item from './Track_Item.vue';

export default {
  data() {
    return {
      tracks: [
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
        {
          artist: 'Unit 21',
          title: 'Lets Have Fun',
        },
      ],
    };
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
  height: 78vh;
  overflow-y: scroll;
}
</style>
