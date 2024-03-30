/* 
 * This initialize set is specified for Laravel/Sanctum's
 * built-in cookie-based session authentication services.
 *
 * In this case is a Vue project that uses an interceptor for error handling
 * and works in conjunction with Vuex for handleError function.
 */
export default {  
  baseURL: process.env.VUE_APP_API_URL,  
  withCredentials: true, 
  handleError(error) {
    if ( error.response
      && [401, 419].includes(error.response.status)
      && store.getters["auth/authUser"]
      && !store.getters["auth/guest"]
    ) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error);
  }
}