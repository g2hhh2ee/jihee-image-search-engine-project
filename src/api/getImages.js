import generateQueryString from '../utils/generateQueryString';
import request from './request';

const BASE_URL = 'https://pixabay.com/api';

const getImages = async () => {
    const result = await request(
        `${BASE_URL}/?key=${process.env.REACT_APP_PIXABAY}`
    );
    return result;
};

export default getImages;
