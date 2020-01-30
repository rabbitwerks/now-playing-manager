<template>
  <div id="app" class="fxbx fd-c">
    <!-- <Navbar--Main /> -->
    <router-view />
    <div class="footer fxbx spc-ctr">
      Created By RabbitWerks JavaScript
    </div>
  </div>
</template>

<script>
// import Navbar_Main from './components/navbar/Navbar_Main.vue';

export default {
  components: {
    // 'Navbar--Main': Navbar_Main,
  },
};
</script>

<style>
@import url('./assets/css/flexbox-util.css');
@import url('./assets/css/main.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cecece;
  overflow-y: hidden;
}
.footer {
  height: 3rem;
  border-top: 3px solid #42b983;
}
</style>
