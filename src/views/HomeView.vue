<script setup lang="ts">
import { ref, onMounted } from "vue";
// import TheWelcome from '../components/TheWelcome.vue'
import { useMessage , useMessage2 } from "@/utils/common.js";
import { useMouse } from "@/utils/mouse.js";
const { x, y } = useMouse();


const msg2 = ref(null);
const msg3 = ref(null);

onMounted(() => {
	// ref 대신 querySelector
  const msg = document.querySelector(".msg");
  useMessage(msg, "안녕하세요");
  useMessage(msg2, "안녕하세요2");
  useMessage2(msg3, "안녕하세요3");
});
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    home

    <h1>home</h1>

    <div>
      마우스 좌표: {{ x }}, {{ y }}
    </div>

    <div>
      메시지 : <span class="msg"></span>
    </div>
    <div>
      메시지2 : <span ref="msg2"></span>
    </div>
    <div>
      메시지3 : <span ref="msg3"></span>
    </div>
  </main>
</template>
