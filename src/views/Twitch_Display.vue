<template>
  <div class="display">
    <Now-Playing--Display />
  </div>
</template>

<script>
import Current_Track from '../components/now-playing/Now_Playing.vue';

export default {
  components: {
    'Now-Playing--Display': Current_Track,
  },
};
</script>
