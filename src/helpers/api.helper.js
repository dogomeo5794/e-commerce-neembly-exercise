import axios from "axios";

const interceptors = {
  register: (api) => {
    api = api.interceptors;
    api.request.use(
      (config) => {
        const token = localStorage.getItem("jwt") || null;
        if (token && !config.headers["Authorization"]) {
        //   config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    api.response.use(
      (config) => {
        return config;
      },
      (error) => {
        let status = error?.response?.status || null;
        if (status === 401) {
          console.log('API Response')
        }
        return Promise.reject(error);
      }
    );
  },
};

const baseApi = `${import.meta.env.VITE_APP_BASE_API}/${import.meta.env.VITE_APP_BASE_API_VERSION}`

const publicApiBaseUrl = axios.create({
  baseURL: baseApi || "http://localhost:8000",
});

const protectedApiBaseUrl = axios.create({
  baseURL: baseApi || "http://localhost:8000",
});

interceptors.register(protectedApiBaseUrl);

export {
    protectedApiBaseUrl,
    publicApiBaseUrl
}
