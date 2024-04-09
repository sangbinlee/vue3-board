axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
  return config;
});
const defaultConfig = {
    method: 'get',
};

const defaultOptions = {
    immediate: true,
};

export const useAxios = (url, config = {}, options = {}) => {
    const response = ref(null);
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const { onSuccess, onError, immediate } = {
        ...defaultOptions,
        ...options,
    };

    const execute = body => {
        data.value = null;
        error.value = null;
        loading.value = true;
        axios(unref(url), {
            ...defaultConfig,
            ...config,
            data: typeof body === 'object' ? body : {},
        })
            .then(res => {
                response.value = res;
                data.value = res.data;
                if (onSuccess) {
                    onSuccess(res);
                }
            })
            .catch(err => {
                error.value = err;
                if (onError) {
                    onError(err);
                }
            })
            .finally(() => {
                loading.value = false;
            });
    };
    if (immediate) execute();

    return {
        response,
        data,
        error,
        loading,
        execute,
    };
};