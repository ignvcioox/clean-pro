import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// Configuración de una instancia de Axios
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  // Log de peticiones para la depuración en desarrollo
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      console.log('API Request:', config.method?.toUpperCase(), config.url);
      return config;
    },
    (error) => {
      console.error('API Request Error:', error);
      return Promise.reject(error);
    },
  );

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      const responseData = error.response?.data;
      if (
        typeof responseData === 'string' &&
        responseData.includes('<!DOCTYPE html>')
      ) {
        console.error(
          'API Response Error: El servidor devolvió una página HTML (posible 404 o servidor apagado).',
        );
      } else {
        console.error('API Response Error:', responseData || error.message);
      }
      return Promise.reject(error);
    },
  );

  return client;
};

export const baseURL = createApiClient();
export default baseURL;
