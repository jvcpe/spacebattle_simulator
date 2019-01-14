<template>
  <div>
    <h3>Name :</h3>
    <span>{{fleet.name}}</span>
    <h3>Number of vessels :</h3>
    <span>{{fleet.nb_vessels}}</span>
  </div>
</template>

<script>
  export default {
    name: 'FleetDetail',
    props: ['fleet'],
  };
</script>

<style scoped>
</style>
