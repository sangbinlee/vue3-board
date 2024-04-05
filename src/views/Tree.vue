<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue' 
import TreeItem from '@/components/TreeItem'

const API_URL = `http://localhost:8080/v1/dir`
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

  