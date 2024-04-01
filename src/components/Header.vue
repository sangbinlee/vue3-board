<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
</script>

<template>
  <!-- <header
    class="v-toolbar v-toolbar--flat v-toolbar--density-default bg-grey-lighten-4 v-theme--light v-locale--is-ltr v-app-bar"
    style="
      z-index: 1008;
      transform: translateY(0%);
      left: 0px;
      width: calc(100% + 0px);
    "
  >
    <div class="v-toolbar__content" style="height: 72px">
      <div class="wrapper">
        <nav>
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/list">list</RouterLink>
          <RouterLink class="nav-link" to="/list2">list2</RouterLink>
          <RouterLink class="nav-link" to="/write">write</RouterLink>
          <RouterLink class="nav-link" to="/write2">write2</RouterLink>
          <RouterLink class="nav-link" to="/tutorials">tutorials</RouterLink>
        </nav>
      </div>
      <div class="v-spacer"></div>
    </div>
  </header> -->

  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">bezKoder</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/list">list</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/list2">list2</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/write">write</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/write2">write2</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/tutorials">tutorials</RouterLink>
      </li>
      <li class="nav-item">
        <router-link to="/tutorials/add" class="nav-link">Add</router-link>
      </li>
    </div>
  </nav>

</template>

<style scoped> 
</style>
