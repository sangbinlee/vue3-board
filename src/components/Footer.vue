<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
import { useMouse } from "@/utils/mouse.js";
const { x, y } = useMouse();
</script>

<template>
  <footer
    class="v-footer v-theme--light bg-grey text-right"
    style="
      bottom: 0px;
      z-index: 1006;
      transform: translateY(0%);
      position: fixed;
      height: 44px;
      left: 0px;
      width: calc(100% + 0px);
    "
  >
    all right reserved

    마우스 좌표: {{ x }}, {{ y }}
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
