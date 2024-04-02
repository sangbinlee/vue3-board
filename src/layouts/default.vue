<template>
  <!-- <header>
    <h1>header</h1> 
  </header> -->
    <PageHeader />
    <!-- <div style="padding-bottom: 100px;"> -->
    <div class="container mt-3">


        <slot />


    </div>
    <PageFooter />

  <!-- <hr />

  <footer>
    <a href="https://github.com/posva/pinia">
    footer
      GitHub
    </a> - by
    <a href="https://github.com/posva">@posva</a> 2021
    <br />
    Using Vue v{{ vueVersion }} and Pinia v{{ piniaVersion }}.
  </footer> -->
</template>

<script setup lang="ts">

import PageFooter from "@/components/Footer.vue";
import PageHeader from "@/components/Header.vue";


import { version as piniaVersion } from 'pinia/package.json'
import { version as vueVersion } from 'vue/package.json'
</script>

<style scoped> 
</style>