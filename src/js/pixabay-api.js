
import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "19018033-87a1a51fb4261bc6ee99901a2";

export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
      params: {
       key: API_KEY,
       q: query,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: 'true',
      }, 
    }) 
    .then(response => response.data)
};




