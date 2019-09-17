import axios from 'axios';
import { busbudApiToken, apiURL } from '../config';

const instance = axios.create({
  baseURL: apiURL,
  headers: {
    'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
    'X-Busbud-Token': busbudApiToken
  },
  responseType: 'json'
});

const api = {
  searchBus : async (params) => {
    console.log(params);
    const response =
      await instance.get('/' + params.departCity + '/' + params.arriveCity + '/' + params.searchDate);
    return response;
  }
};

export default api;
