<template>
  <div class="clickable" @click="$store.commit('selectFleet', {fleet})">
    <md-card class="md-clickable">
      <md-card-area>
        <md-card-header>
          <span class="md-title">{{fleet.name}}</span>
        </md-card-header>
        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>send</md-icon>
          </md-button>
          <md-button @click="test()" class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'FleetCard',
  props: ['fleet'],
  methods: {
    test() {
      console.log('test');
    },
  },
};
</script>

<style scoped>
  .md-card {
    width: 100%;
  }
  .clickable {
    width: 100%;
  }
</style>
