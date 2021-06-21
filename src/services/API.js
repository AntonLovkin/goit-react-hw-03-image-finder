import axios from 'axios';

const API_KEY = '21271693-9f15050c6f3761d48e024dcb2';
    const BASE_URL = 'https://pixabay.com/api/';

const fetchPictures = ({ searchQuery = '', currentPage = 1, largeImageURL }) => {
    return axios.get(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`
    )
        .then(response => response.data.hits);
};

export default { fetchPictures };