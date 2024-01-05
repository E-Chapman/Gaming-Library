import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export interface FetchReponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ef4b58bf552f42e9bcfdb189b87d0fb8'
  }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchReponse<T>>(this.endpoint, config)
    .then(res => res.data);
  }
}

export default APIClient;
