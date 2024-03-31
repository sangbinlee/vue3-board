import { unref , onMounted, onUnmounted } from 'vue'

export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}


export function useMessage(target, message) {
    console.log('target', target);
    console.log('message', message);
//   target.value.innerHTML = message;
  unref(target).innerHTML = message;
}


export function useMessage2(target, message) {
    console.log('target', target);
    console.log('message', message);
  target.value.innerHTML = message;
//   unref(target).innerHTML = message;
}