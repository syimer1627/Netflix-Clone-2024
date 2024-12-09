 
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213` 
};

export default requests;