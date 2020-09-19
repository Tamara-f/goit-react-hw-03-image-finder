import axios from 'axios';

const API_KEY = '17615021-9599c8e133abdd89b923fc662';
axios.defaults.baseURL = 'https://pixabay.com/api';
const imgApi = async (query, page = 1) => {
  try {
    const res = await axios
      .get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => response.data.hits);
    return res;
  } catch (error) {
    throw error;
  }
};

export default { imgApi };
