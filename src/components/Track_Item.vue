<template>
  <div class="track--outer">
    <div class="track--artist">
      {{ artist }}
    </div>
    <div class="track--title">
      {{ title }}
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
    title: {
      type: String,
      required: true,
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
