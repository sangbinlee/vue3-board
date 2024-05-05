<script setup lang="ts">
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import Layout from "@/layouts/default.vue";


// onMounted(() => {
//     EventBus.on("logout", () => {
//       this.logOut();
//     });
// });


// onBeforeUnmount(() => {
//   EventBus.remove("logout");
// });


</script>

<template>
  <Layout>

      <RouterView />


  </Layout>
</template>

<style scoped> 
</style>
