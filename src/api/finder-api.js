import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36500157-b7cca980640d9acdd8232fab9';

const fetchImages = async query => {
  try {
    const { data } = await axios.get(
      `?key=${API_KEY}&q=${query}&page=1&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
fetchImages('cat');

export { fetchImages };
