<script setup lang="ts">
console.clear()
import TreeItem from '@/components/TreeItem.vue';
import { onMounted, ref, watchEffect } from 'vue';
// import TheWelcome from '../components/TheWelcome.vue'

// const API_URL = `http://localhost:8080/v1/dir`
const API_URL = `/v1/dir`
const treeData = ref(null)

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = `${API_URL}`
  treeData.value = await (await fetch(url)).json()
})

onMounted(() => { 
});
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"></TreeItem>
  </ul>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>

  