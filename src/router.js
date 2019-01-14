import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './home/HomePage.vue';
import BattleSimulator from './simulator/BattleSimulator.vue';
import FleetConfigurator from './fleet_manager/FleetManager.vue';
import ShipConfigurator from './ship_manager/ShipManager.vue';
import FleetCreator from './fleet_creator/FleetCreator.vue';
import ShipCreator from './ship_creator/ShipCreator.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/simulator', component: BattleSimulator },
    { path: '/fleet_manager', component: FleetConfigurator },
    { path: '/ship_manager', component: ShipConfigurator },
    { path: '/fleet_creator', component: FleetCreator },
    { path: '/ship_creator', component: ShipCreator },
  ],
});
