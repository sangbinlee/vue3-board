import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data = ref<resData[]>([]);
  const isLoading = ref(false);
  const fetchData = async () => {
    isLoading.value = true;
    try {
      const res = await getDataAPI();
      data.value = res;
    } catch (error) {
      console.log('API 호출 실패');
    } finally {
      isLoading.value = false;
    }
  };

  const pData = computed(() =>
    data.value.map((d) => ({
      id: d.id,
      content: d.url,
      name: d.side,
    }))
  );
  const nameData = computed(() => {
    return [...new Set(data.value.map((d) => d.name))];
  });

  return { isLoading, pData, nameData, fetchPhotos };
})
