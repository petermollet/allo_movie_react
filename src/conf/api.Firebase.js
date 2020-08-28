import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://dyma-react-allomovie.firebaseio.com/'
});

export default apiFirebase;