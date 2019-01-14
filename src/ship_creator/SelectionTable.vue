<template>
  <div class="table-selection">
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>Add {{attribute_name}}</md-button>
      <md-menu-content>
        <md-menu-item v-for="attribute in attributes_list" :key="attribute.id" v-on:click="attributes.push(attribute)">{{attribute.name}}</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-table v-model="attribute_name" md-card>
      <md-table-toolbar>
        <h1 class="md-title">{{attribute_name}}</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Elements</md-table-head>
        <md-table-head>Energy</md-table-head>
        <md-table-head></md-table-head>
      </md-table-row>

      <md-table-row v-for="attribute in attributes">
        <md-table-cell>{{attribute.name}}</md-table-cell>
        <md-table-cell>{{attribute.slot}}</md-table-cell>
        <md-table-cell>{{attribute.energy}}</md-table-cell>
        <md-table-cell><md-button v-on:click="attributes.splice(attributes.findIndex(v => v.id === attribute.id), 1)">DELETE</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'SelectionTable',
  props: ['attribute_name', 'attributes', 'attributes_list'],
};
</script>

<style></style>
