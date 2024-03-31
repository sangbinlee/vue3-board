import { ref } from 'vue'
import axios from "axios"; 
 
export default function useBitcoin() {
    const coin = ref(0)
  


    const fetchBitcoinRate = () => {
    //   setInterval(() => {
        // refetch()
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        axios.get(url)
            .then(response => {
                console.log('response', response);
                postss.value = response.data;
                console.log('postss', postss);
            })

    //   }, 20000)
    }



 
    return { coin, fetchBitcoinRate } 
}