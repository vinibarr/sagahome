import Axios from 'axios';
import DefaultConstants from '../data/Constants';

const AxiosHelper = Axios.create({
    baseURL: DefaultConstants.baseUrl
});

export {
    AxiosHelper
}