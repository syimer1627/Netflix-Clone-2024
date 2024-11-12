const API_KEY = process.env.REACT_App_API_KEY;
const requests = {
   
    feachBigBrothers: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
    feachRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    feachDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    feachCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    feachTheSubstance: `/movie/now_playing?api_key=${API_KEY}&with_genres=933260`,
    feachMovies: `/movie/changes?api_key=${API_KEY}&with_genres= 1371918`,
    
}