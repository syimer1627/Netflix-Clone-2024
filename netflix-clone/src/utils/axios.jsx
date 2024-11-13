import axios from "axios";
const instance = axios.create({
    // baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    baseURL: "https://api.themoviedb.org/3",
})


export default instance;