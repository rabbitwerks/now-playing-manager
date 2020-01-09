<template>
  <div id="app" class="fxbx fd-c">
    <!-- TODO: refactor navbar to usual nav -->
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">Display</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('./assets/css/flexbox-util.css');
@import url('./assets/css/main.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*TODO: Style App using flexbox and util lib */
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
