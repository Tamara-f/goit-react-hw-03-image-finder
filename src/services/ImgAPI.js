import axios from 'axios';

const API_KEY = '17615021-9599c8e133abdd89b923fc662';

const ImgAPI = (query, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default { ImgAPI };
