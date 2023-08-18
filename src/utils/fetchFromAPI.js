import axios from 'axios';

export const BASE_URL =  'https://youtube-v31.p.rapidapi.com/captions';

  const options = {

  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    
  },
  headers: {
    'X-RapidAPI-Key': 'f865aab3b5msh0ec972e6afe12eap10f60djsn02658f90fe7b',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    if (error.response) {
      console.error("Response data:", error.response.data);
    }

    throw error;
  }
};
