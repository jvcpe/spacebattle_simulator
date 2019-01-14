<template>
  <div class="main">
    <aside>
      <md-list>
        <md-subheader>Fleet Management</md-subheader>
        <md-list-item v-for="fleet in $store.state.fleets.fleets"
                      :key="fleet.id">
          <FleetCard :fleet="fleet" />
        </md-list-item>
        <md-list-item>
          <md-button @click="$router.push('./fleet_creator')" class="md-raised new-fleet-button">New Fleet</md-button>
        </md-list-item>
      </md-list>
    </aside>
    <FleetDetail :fleet="$store.state.fleets.selectedFleet" />
  </div>
</template>

<script>
import FleetCard from './FleetCard.vue';
import FleetDetail from './FleetDetail.vue';

export default {
  name: 'BattleSimulator',
  components: { FleetDetail, FleetCard },
  data: () => ({
    selectedFleet: {},
  }),
};
</script>

<style scoped>
.main {
  height: 100%;
}
.md-list {
  width: 15%;
  height: 100%;
  float: right;
  vertical-align: top;
  border: 1px solid rgba(5,5,5,0.12);
}
.new-fleet-button {
  margin: 0;
  width: 100%;
}
.md-list-item {
  width: 100%;
}
</style>
