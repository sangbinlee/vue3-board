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
    <router-link to="/" class="navbar-brand">vue3</router-link>
    <ul class="navbar-nav mr-auto">
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
      <li class="nav-item">
        <router-link to="/pinia" class="nav-link">pinia</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/air" class="nav-link">air</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/tree" class="nav-link">tree</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/list" class="nav-link">list</router-link>
      </li>

    
      <li v-if="showAdminBoard" class="nav-item">
        <router-link to="/admin" class="nav-link">Admin Board</router-link>
      </li>
      <li v-if="showModeratorBoard" class="nav-item">
        <router-link to="/mod" class="nav-link">Moderator Board</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
      </li>

    </ul>




    <div v-if="!currentUser" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/register" class="nav-link">
          <font-awesome-icon icon="user-plus" /> Sign Up
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">
          <font-awesome-icon icon="sign-in-alt" /> Login
        </router-link>
      </li>
    </div>

    <div v-if="currentUser" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">
          <font-awesome-icon icon="user" />
          {{ currentUser.username }}
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="logOut">
          <font-awesome-icon icon="sign-out-alt" /> LogOut
        </a>
      </li>
    </div>







  </nav>

</template>

<!-- <script setup> -->
<script >
// defineProps<{
//   msg: string;
// }>();
export default {
  name: "Header",
  data() {
    return {
      content: "",
    };
  },
  mounted() { 
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      console.log('logout...................')
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped> 
</style>
