import { ref } from 'vue'
import axios from "axios"; 
 
export default function usePosts() {
    const postss = ref([])
 
    const getPosts = async () => {
        axios.get('posts')
            .then(response => {
                console.log('response', response);
                postss.value = response.data;
                console.log('postss', postss);
            })
    }
 
    return { postss, getPosts } 
}