<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
</script>

<template>
  <header
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
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/list">list</RouterLink>
          <RouterLink to="/write">write</RouterLink>
          <RouterLink to="/write2">write2</RouterLink>
        </nav>
      </div>

      <div class="v-spacer"></div>
      <!---->
    </div>
    <!---->
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  /* max-height: 100vh; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  margin: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
