<template>
  <div class="navbar--main fxbx">
    <div class="navbar--brand f16 fxbx a-ctr">
      Now Playing Manager
    </div>
    <div
      @click="$router.push('/dashboard')"
      class="navbar--item f1 fxbx a-ctr j-fe pointer"
      >Dashboard
    </div>
    <div
      @click="$router.push('/display')"
      class="navbar--item f1 fxbx a-ctr j-fe pointer"
      >Display
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar--main {
  height: 3rem;
  padding: 0 2rem;
  border-bottom: 2px solid rgb(8, 155, 93);
}
.navbar--item:hover {
  color: rgb(130, 233, 138);
}
</style>
