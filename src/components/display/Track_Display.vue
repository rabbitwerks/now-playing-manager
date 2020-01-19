<template>
  <div class="now-playing--outer fxbx fd-c">
    <div class="now-playing--header f1">
      <h1>Now Playing</h1>
    </div>
    <div class="now-playing--content f5 fxbx fd-c">
      <Item-Wrapper
        label="Artist:"
        :value="nowPlaying.artist || 'Unknown'"
      />
      <Item-Wrapper
        label="Track:"
        :value="nowPlaying.track || 'Unknown'"
      />
    </div>
  </div>
</template>

<script>
import Item_Wrapper from '../now-playing/Item_Wrapper.vue';

export default {
  components: {
    'Item-Wrapper': Item_Wrapper,
  },
  computed: {
    nowPlaying() {
      return this.$store.state.nowPlaying;
    },
  },
};
</script>

<style scoped>
.now-playing--outer {
  height: 10rem;
  margin: 0 3rem;
  border: 3px solid #42b983;
  background-color: rgb(24, 31, 34);
}
.now-playing--header {
  padding: .5rem 0;
  border-bottom: 3px solid #42b983;
}
</style>
