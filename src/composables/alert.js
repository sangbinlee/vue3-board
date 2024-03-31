import { ref } from 'vue'

export function useAlert() {
  const alerts = ref([])
  const vAlert = (message, type = 'error') => {
    alerts.value.push({ message, type })
    setTimeout(() => {
      alerts.value.shift()
    }, 2000)
  }
  const vSuccess = message => vAlert(message, 'success')
  // return한 것들은 해당 컴포넌트에서 사용해야하는 상태나 메소드! 
  return {
    alerts,
    vAlert,
    vSuccess,
  }
}