import Vue from 'vue';
import Vuex from 'vuex';

import fleetsModule from './modules/fleets';
import shipsModule from './modules/ships';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fleets: fleetsModule,
    ships: shipsModule,
  },
});
