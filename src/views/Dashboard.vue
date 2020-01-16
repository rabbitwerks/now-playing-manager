<template>
  <div class="dashboard">
    <div class="dashboard--container fxbx" >
      <Track-List class="f2"/>
      <div class="now-playing f3">
        hello
      </div>
      <Completed-Track-List  class="f2" />
    </div>
  </div>
</template>

<script>
import Track_List from '../components/Track_List.vue';
import Completed_Track_List from '../components/Completed_Tracks_List.vue';

export default {
  components: {
    'Track-List': Track_List,
    'Completed-Track-List': Completed_Track_List,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 1rem 2rem;
  height: 10;
}
</style>
