import axios from 'axios';

export const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com/video';

  const options = {
  method: 'GET',
  url: BASE_URL,
  params: {id: 'dQw4w9WgXcQ',maxResults: 50,},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};