<template>
  <div>
    <h2>SHIP CREATOR</h2>
    <div class="md-layout md-gutter form">
      <div class="md-layout-item">
        <md-field>
          <label>Name</label>
          <md-input v-model="name"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <md-select v-model="selected_ship" name="selected_ship" id="selected_ship" placeholder="Type">
            <md-option v-for="ship in ships" :value="ship">{{ship.name}}</md-option>
          </md-select>
        </md-field>
        </div>
          <div class="md-layout-item">
            <md-field>
              <label>Description</label>
              <md-textarea v-model="description"></md-textarea>
            </md-field>
          </div>
      </div>
      <div >
        <div class="md-layout md-gutter md-elevation-1 base-stats-container">
          <span>Command Point : {{selected_ship.cp}}</span>
          <span>Hull : {{selected_ship.base_hull}}</span>
          <span>Shield : </span>
          <span>Armor : </span>
          <span>Damage : </span>
          <span>Speed : {{selected_ship.base_speed}}</span>
          <span>Evasion : {{selected_ship.base_evasion}}%</span>
        </div>
      </div>


      <h3>Available elements : {{getAvailableElements()}}</h3>

      <div class="md-layout md-gutter form">
        <div class="md-layout-item">
          <SelectionTable attribute_name="Weapon" :attributes="weapons" :attributes_list="weapons_list"></SelectionTable>
        </div>

        <div class="md-layout-item">
          <SelectionTable attribute_name="Utility" :attributes="utilities" :attributes_list="utilities_list"></SelectionTable>
        </div>

        <div class="md-layout-item">
          <SelectionTable attribute_name="Defense" :attributes="defenses" :attributes_list="defenses_list"></SelectionTable>
        </div>
      </div>
    </div>
</template>

<script>
import SelectionTable from './SelectionTable.vue';

import weapons_list from '../statics/weapons';
import utilities_list from '../statics/utilities';
import defenses_list from '../statics/defenses';
import ships from '../statics/ships';

export default {
  name: 'ShipCreator',
  components: {
    SelectionTable,
  },
  data: () => ({
    name: null,
    selected_ship: {},
    description: null,
    ships,
    weapons_list,
    utilities_list,
    defenses_list,
    weapons: [],
    utilities: [],
    defenses: [],
  }),
  methods: {
    getAvailableElements() {
      const base = this.selected_ship.slot;
      let slotW = 0;
      let slotD = 0;
      let slotU = 0;
      if (this.weapons.length !== 0) {
        slotW = this.weapons.map(w => w.slot).reduce((a, b) => a + b);
      }
      if (this.defenses.length !== 0) {
        slotD = this.defenses.map(w => w.slot).reduce((a, b) => a + b);
      }
      if (this.utilities.length !== 0) {
        slotU = this.utilities.map(w => w.slot).reduce((a, b) => a + b);
      }
      return base - slotW - slotD - slotU;
    },
    test() {
      console.log('test');
    },
  },
};
</script>

<style>
  .form {
    padding-right: 5%;
    padding-left: 5%;
  }
  .base-stats-container {
    display: flex;
    justify-content: space-around;
    padding-top: 2%;
    padding-bottom: 2%;
  }
</style>
