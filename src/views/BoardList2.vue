<template>
  <div>

    <h3 style="color:Orange">coin</h3>
    <div >
    {{coin}}  
    </div>

    <hr>


    <h3 style="color:SlateBlue">Bitcoin Price Index</h3>
    <div v-for="(bpiData, index) in bpiData.bpi" :key="index">
      {{bpiData.description}}:
      <span class="lighten">
        <span v-html="bpiData.symbol"></span>
        {{ bpiData.rate_float | $filters.currencydecimal }}
      </span>
    </div>

    <hr>

    <h3 style="color:Orange">User Data</h3>
    <div v-for="user in users" :key="user.id">
    {{user.id}} {{user.name}}
    </div>

    <hr>

    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.id }} {{ post.title }}</h3>
        <!-- <p>{{ post.body }}</p> -->
      </li>
    </ul>


    <hr>

    <h2>Postss</h2>
    <ul>
      <li v-for="post in postss" :key="post.id">
        <h3>{{ post.id }} {{ post.title }}</h3>
        <!-- <p>{{ post.body }}</p> -->
      </li>
    </ul>


    <hr>

    <hr>



  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, toRefs, reactive } from "vue";
  import axios from "axios"; 







  import usePosts from "@/composables/posts";
  import useBitcoin from "@/composables/bitcoin";
  const { postss, getPosts } = usePosts()
  const { coin, fetchBitcoinRate } = useBitcoin()


  const posts = ref([]);
  async function created() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const users = ref([])
  const load = async () => {
    try {
      let data = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!data.ok) {
      throw Error('Error occurs when loading data')
      }
    users.value = await data.json()
    } catch(e) {
      console.log("Failed to load data")
    }
  }

  const bpiData = ref([])
  const dataLoad = async () => {
    try {
      let data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      if(!data.ok) {
        throw Error('error when load data')
      }
      bpiData.value = await data.json()
      console.log(bpiData)
    } catch {
        console.log("Failed to load data")
    }
  }

  onMounted( () => {
    fetchBitcoinRate()
    getPosts()
    created();
    // dataLoad()
    load();
  });
  // onMounted(async () => {
  //   await created();
  //   await dataLoad();
  //   await load();
  // });



</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
