<template>
  <div id="app">
    <header>
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">X Project</span>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">X Project</span>
        </md-toolbar>

        <md-list>
          <md-list-item @click="$router.push('/')">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item @click="$router.push('./fleet_manager')">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Fleet Manager</span>
          </md-list-item>

          <md-list-item @click="$router.push('./ship_manager')">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Ship Manager</span>
          </md-list-item>

          <md-list-item @click="$router.push('./ship_creator')">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Ship Creator</span>
          </md-list-item>

          <md-list-item @click="$router.push('./fleet_creator')">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Fleet Creator</span>
          </md-list-item>

          <md-list-item @click="$router.push('./simulator')">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Battle Simulator</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-drawer>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  }),
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
