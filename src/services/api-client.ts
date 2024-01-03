import axios from 'axios';

export interface FetchReponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ef4b58bf552f42e9bcfdb189b87d0fb8'
  }
})
