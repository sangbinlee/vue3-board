<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-btn color="secondary" @click="onClickWrite">글쓰기</v-btn>

  <div class="row" style="margin-bottom: 100px">
    <div class="col-md-12">
      <h3>Cat Facts</h3>
    </div>
    <div class="col-md-12">
      <ul class="list-group">
        <li
          v-for="(fact, index) in catFacts"
          :key="index"
          class="list-group-item"
        >
          {{ index + 1 }}. {{ fact.text }}
        </li>
      </ul>
    </div>
    <div class="row mt-3 mb-5">
      <div class="col-md-12 text-center">
        <button @click="loadMoreFacts" class="btn btn-md btn-primary">
          {{ fetchingFacts ? "..." : "Load more" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
// import TheWelcome from "../components/TheWelcome.vue";

const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];

const router = useRouter();

interface AnimalFacts {
  text: string;
}
const catFacts = ref([] as AnimalFacts[]);

const fetchingFacts = ref(false);
async function loadMoreFacts() {
  fetchingFacts.value = true;
  const catFactsResponse = await axios.get<AnimalFacts[]>(
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5",
  );
  catFacts.value.push(...(catFactsResponse.data || []));

  fetchingFacts.value = false;
}

function onClickWrite() {
  router.push("/write");
}

async function fetchInitialCatFacts() {
  const catFactsResponse = await axios.get<AnimalFacts[]>(
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5",
  );
  catFacts.value = catFactsResponse.data;
}

async function test() {
  await axios.get("/user/12345").catch(function (error) {
    console.error(error.toJSON());

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}

onMounted(async () => {
  await fetchInitialCatFacts();
  await test();
});
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
