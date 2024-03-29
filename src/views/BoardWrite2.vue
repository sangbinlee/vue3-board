<template>
  <v-sheet class="mx-auto" width="300">
    <v-form ref="form">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name *"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item *"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree? *"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="success" block @click="validate">
          Validate
        </v-btn>

        <v-btn class="mt-4" color="error" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn class="mt-4" color="warning" block @click="resetValidation">
          Reset Validation
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const form = ref();
const name = ref("");
const select = ref(null);
const checkbox = ref(false);
const nameRules = ref([
  (v) => !!v || "Name is required",
  (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
]);

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

async function validate() {
  // const { valid } = await this.$refs.form.validate();
  const { valid } = await form.value?.validate();
  if (valid) alert("Form is valid");
}
function reset() {
  // this.$refs.form.reset();
  form.value?.reset();
}
function resetValidation() {
  // this.$refs.form.resetValidation();
  form.value?.resetValidation();
}
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
