<template>
  <div>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />
    <h2>SHIP CREATOR</h2>
      <form novalidate @submit.prevent="validateShip">
      <div class="md-layout md-gutter form">
        <div class="md-layout-item">
          <md-field :class="getValidationClass('name')">
            <label>Name</label>
            <md-input name="ship-name" id="ship-name" v-model="shipForm.name" :disabled="sending" />
            <span class="md-error" v-if="!$v.shipForm.name.required">The ship name is required</span>
            <span class="md-error" v-else-if="!$v.shipForm.name.minLength">Invalid first name ( more than 3 characters needed )</span>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field :class="getValidationClass('selected_ship_name')">
            <md-select :change="statsUpdate()" v-model="shipForm.selected_ship_name" name="selected_ship_name" id="selected_ship_name" placeholder="Type">
              <md-option v-for="ship in ships" :value="ship.name">{{ship.name}}</md-option>
            </md-select>
            <span class="md-error" v-if="!$v.shipForm.selected_ship_name.required">The ship type is required</span>
          </md-field>
          </div>
            <div class="md-layout-item">
              <md-field :class="getValidationClass('description')">
                <label>Description</label>
                <md-textarea v-model="shipForm.description"></md-textarea>
                <span class="md-error" v-if="!$v.shipForm.description.maxLength">Invalid first name ( less than 300 characters needed )</span>
              </md-field>
            </div>
        </div>
        <div >
          <div class="md-layout md-gutter md-elevation-1 base-stats-container">
            <span>Command Point : {{baseStats.cp}}</span>
            <span>Hull : {{baseStats.hull}}</span>
            <span>Shield : {{baseStats.shield}}</span>
            <span>Armor : {{baseStats.armor}}</span>
            <span>Damage : {{baseStats.damage}}</span>
            <span>Speed : {{baseStats.speed}}</span>
            <span>Evasion : {{baseStats.evasion}}%</span>
          </div>
        </div>


        <h3>Available elements : {{baseStats.el}}</h3>

        <div class="md-layout md-gutter form">
          <div class="md-layout-item">
            <SelectionTable attribute_name="Weapon" :attributes="shipForm.weapons" :attributes_list="weapons_list"></SelectionTable>
          </div>

          <div class="md-layout-item">
            <SelectionTable attribute_name="Utility" :attributes="shipForm.utilities" :attributes_list="utilities_list"></SelectionTable>
          </div>

          <div class="md-layout-item">
            <SelectionTable attribute_name="Defense" :attributes="shipForm.defenses" :attributes_list="defenses_list"></SelectionTable>
          </div>
        </div>
        <md-button type="submit" class="md-primary" :disabled="sending">Create ship</md-button>
        <md-snackbar :md-active.sync="shipSaved">The ship {{ lastShip }} was saved with success!</md-snackbar>
      </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

import SelectionTable from './SelectionTable.vue';

import weapons_list from '../statics/weapons';
import utilities_list from '../statics/utilities';
import defenses_list from '../statics/defenses';
import ships from '../statics/ships';

export default {
  name: 'ShipCreator',
  mixins: [validationMixin],
  components: {
    SelectionTable,
  },
  data: () => ({
    shipForm: {
      name: null,
      selected_ship_name: null,
      description: null,
      weapons: [],
      utilities: [],
      defenses: [],
    },
    baseStats: {
      cp: 0,
      hull: 0,
      shield: 0,
      armor: 0,
      damage: 0,
      speed: 0,
      evasion: 0,
      el: 0,
    },
    ships,
    weapons_list,
    utilities_list,
    defenses_list,
    lastShip: null,
    shipSaved: false,
    sending: false,
  }),
  validations: {
    shipForm: {
      name: {
        required,
        minLength: minLength(3),
      },
      description: {
        maxLength: maxLength(300),
      },
      selected_ship_name: {
        required,
      },
    },
  },
  methods: {
    getShipFromName(shipName) {
      if (shipName) {
        return this.ships.filter(obj => obj.name === shipName);
      }
      return [{
        name: null,
        cp: 0,
        slot: 0,
        base_hull: 0,
        base_evasion: 0,
        base_speed: 0,
      }];
    },
    statsUpdate() {
      console.log('update');
      const base = this.getShipFromName(this.shipForm.selected_ship_name);
      this.baseStats.el = this.getAvailableElements(base[0].slot);
      this.baseStats.shield = this.getBaseShield();
    },
    getAvailableElements(slot) {
      const base = slot;
      let slotW = 0;
      let slotD = 0;
      let slotU = 0;
      if (this.shipForm.weapons.length !== 0) {
        slotW = this.shipForm.weapons.map(w => w.slot).reduce((a, b) => a + b);
      }
      if (this.shipForm.defenses.length !== 0) {
        slotD = this.shipForm.defenses.map(w => w.slot).reduce((a, b) => a + b);
      }
      if (this.shipForm.utilities.length !== 0) {
        slotU = this.shipForm.utilities.map(w => w.slot).reduce((a, b) => a + b);
      }
      return base - slotW - slotD - slotU;
    },
    getValidationClass(fieldName) {
      const field = this.$v.shipForm[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
      return 0;
    },
    clearshipForm() {
      this.$v.$reset();
      this.shipForm.name = null;
      this.shipForm.description = null;
      this.shipForm.selected_ship_name = null;
      this.shipForm.weapons = [];
      this.shipForm.utilities = [];
      this.shipForm.defenses = [];
    },
    saveShip() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastShip = this.shipForm.name;
        this.shipSaved = true;
        this.sending = false;
        this.clearshipForm();
      }, 1500);
    },
    validateShip() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveShip();
      }
    },
    getBaseShield() {
      let totalBaseShield = 0;
      Object.values(this.shipForm.defenses).forEach((defense) => {
        if (defense.category === 'shield') {
          totalBaseShield += defense.defense;
        }
      });
      return totalBaseShield;
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
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
