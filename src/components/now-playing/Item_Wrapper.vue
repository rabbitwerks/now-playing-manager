<template>
  <div class="item--wrapper f1 fxbx spc-ctr">
    <h3 class="item--label">
      {{ label }}
    </h3>
    <span class="item--value">
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: 'Unknown',
    },
  },
};
</script>

<style scoped>
.item--wrapper {
  border-top: 1px solid #42b983
}
.item--label {
  margin-right: 1rem
}
</style>
