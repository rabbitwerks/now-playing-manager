<template>
  <div class="dashboard">
    <div class="dashboard--container fxbx">
      <Track-List class="f2" />
      <Now-Playing class="f3" />
      <Completed-Track-List class="f2" />
    </div>
  </div>
</template>

<script>
import Track_List from '../components/Track_List.vue';
import Now_Playing from '../components/now-playing/Now_Playing.vue';
import Completed_Track_List from '../components/Completed_Tracks_List.vue';

export default {
  components: {
    'Track-List': Track_List,
    'Now-Playing': Now_Playing,
    'Completed-Track-List': Completed_Track_List,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 1rem 2rem;
  height: 10;
  overflow: hidden;
}
</style>
