const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
   
    fetchBigBrothers: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    
};

export default requests;

