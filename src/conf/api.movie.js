import * as axios from 'axios';



const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})
export default apiMovie;




apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmJlMTY2MTRmMTFiOGM0OTBmNjczMzNhMDk4ZDM2MSIsInN1YiI6IjVkN2Y4YzcxZjA2NDdjNzYyOTlkOTA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.50EI4M3V9ztGkVfmAU1Nibko3b0zbH3afImUMgJS0DA'
    return req;
})





export const apiMovieMap = (m) => ({ 
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: m.release_date + ' | ' + m.vote_average + '/10 (' +  m.vote_count + ')',
    description: m.overview
});