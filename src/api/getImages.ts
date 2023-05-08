import request from './request';
import { IParamObj } from '../types';

const BASE_URL = 'https://pixabay.com/api';

const defaultParam = {
    key: process.env.REACT_APP_PIXABAY || '',
    safesearch: 'true',
};

const getImages = async (paramObj: IParamObj) => {
    const params = new URLSearchParams({
        ...defaultParam,
        ...paramObj,
    }).toString();
    const result = await request(`${BASE_URL}/?${params}`);
    return result;
};

export default getImages;
