import api from '@/api/$api';
import aspida from '@aspida/fetch';

const fetchConfig = {
  headers: {
    'X-MICROCMS-API-KEY': process.env.API_KEY as string,
  },
  baseURL: process.env.BASE_URI as string,
};

export const apiClient = api(aspida(fetch, fetchConfig));
