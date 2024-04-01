<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import PageFooter from "./components/Footer.vue";
import PageHeader from "./components/Header.vue";
</script>

<template>
  <PageHeader />
  <!-- <div style="padding-bottom: 100px;"> -->
  <div class="container mt-3">
    <RouterView />
  </div>
  <PageFooter />
</template>

<style scoped> 
</style>
