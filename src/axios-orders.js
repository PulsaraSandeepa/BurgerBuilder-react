import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-react-45004.firebaseio.com/'
})
export default instance;
