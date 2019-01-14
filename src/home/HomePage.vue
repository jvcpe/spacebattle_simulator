<template>
  <div class="main">
    <img width="500" height="500" src="../assets/moon-full.svg" alt="Un kiwi en SVG">
    <p class="home-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium sapien nec dui
      rutrum interdum. Integer porta tincidunt pharetra. Curabitur rutrum, erat cursus tincidunt
      dictum, dui ipsum porta turpis, at porttitor quam lectus a lacus. Cras ac risus enim. Morbi
      eleifend neque massa. Cras et est dui. Donec tristique iaculis quam, sit amet convallis elit
      blandit eu. Suspendisse suscipit dui quis tellus cursus sollicitudin. Sed finibus magna nec
      ultrices feugiat. Donec sapien est, pulvinar et commodo nec, aliquet et dui. Cras laoreet vel
      odio vitae condimentum. Curabitur suscipit libero justo, ac mattis tortor commodo quis.
    </p>
    <md-button class="md-raised md-primary" @click="$router.push('/configurator')">
      Get started !
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    margin-top: 50px;
  }
.home-text {
  margin: 3% 3% 1% 3%;
  padding: 5px;
}
</style>
