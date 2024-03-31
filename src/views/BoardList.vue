<template>




  <!-- <div>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <p v-if="loading">loading...</p>
    <div v-else>
      <p>Status: {{ status }}</p>
      {{ data }}
    </div>
  </div> -->







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
import { ref, onMounted, toRefs, reactive } from "vue";
import axios from "axios";
// import { useAxios } from "@/api/axios"
import { useRouter } from "vue-router";





// import TheWelcome from "../components/TheWelcome.vue";




// import { useAlert } from "@/composables/alert";


    const id = ref(1);
    // const { data, loading, exec, error, status } = useAxios();


    // const { response, data, error, loading, execute } = useAxios(
    //   'v1/sign-up',
    //   {
    //     method: 'post',
    //   },
    //   {
    //     immediate: false,
    //     onSuccess: () => {
    //       console.log("Success");
    //     },
    //     onError: err => {
    //       console.log(error.value);
    //       console.log(err);
    //     }
    //   }
    // );


    // if you have other reactive data
    // const state = reactive({
    //   username: '',
    //   email: '',
    //   password: '',
    //   loading: loading,
    //   // ... rest of your reactive data ...
    // });

    // const signup = () => {
    //   execute({
    //     username: state.username,
    //     email: state.email,
    //     password: state.password,
    //   });
    // };

    // if you're using vue-validate
    // const v$ = useVuelidate(rules, state);

    // // Always return the refs, because the template uses the reactive data
    // return {
    //   ...toRefs(state),
    //   v$,
    //   signup,
    // };





// const { alerts, vAlert, vSuccess } = useAlert;
// const form = ref()


// const posts = ref([]);
// const loading = ref(false);

// const error = ref()
// const params = ref()
// const totalCount = ref(null);


// const save = () => {
//   try {
//     const data = { ...form.value, createdAt: Date.now() };
//     createPost(data);
//     vSuccess('등록이 완료되었습니다.')
//   } catch (error) {
//     console.log(error);
//     vAlert(error.message)
//   } 
// };

// function createPost(data){
//   console.log('data', data);
// }


// const fetchPosts = async () => {
//   try {
//     loading.value = true;
//     const { data, headers } = await getPosts(params.value);
//     posts.value = data;
//     totalCount.value = headers["x-total-count"];
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// }

//////////////////////////////////////////////



// const store = useDataStore();
// const { pData } = storeToRefs(store);

// const { isLoading, nameData } = storeToRefs(store);
// const { fetchPhotos } = store;

// onMounted(async () => {
//   await fetchPhotos();
// });
//////////////////////////////////////////////


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
