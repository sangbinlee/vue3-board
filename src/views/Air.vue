<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/user';
import { useMouse } from "@/utils/mouse.js";
import { onMounted, ref } from 'vue';
const { x, y } = useMouse();

 

onMounted(() => { 
});






const user = useUserStore()
const cart = useCartStore()

    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }

    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        cart.rawItems = []
      }
    }

    async function buy() {
      const n = await cart.purchaseItems()

      console.log(`Bought ${n} items`)

      cart.rawItems = []
    }

    // @ts-ignore
    window.stores = { user, cart }
 

</script>

<template>
  <div>
    <h2>Hello {{ user.name }}</h2>

    <!-- 등록 -->
    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>

    <!-- 목록 -->
    <form @submit.prevent="buy">
      <!-- 등록목록 -->
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button
            @click="cart.removeItem(item.name)"
            type="button"
          >X</button>
        </li>
      </ul>

      <!-- 버튼영역 -->
      <button :disabled="!user.name">Buy</button>
      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >Clear the cart</button>
    </form>    
  </div>
</template>

 