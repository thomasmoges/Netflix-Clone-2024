// 83fb4b381b1c7b8d4e7a08ff39b4efad
// const API_KEY = process.env.REACT_APP_API_KEY;
// const requests = {
//     fetchTreading: `/treading/all/week?api_key=${API_KEY}&language-en-US`,
//     fetchNetflixOrginals:`/discover/tv?api_key=$(API_KEY)&width_networks=213`,
//     fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language-en-US`
//    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&width_genres-25`,
//     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&width_genres-27`,
//     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&width_genres-10749`,
//     fetchDocumentariesMovies:`/discover/movie?api_key=${API_KEY}&width_genres-99`,
//     fetchTopShow:`tv/popular?api_key=${API_KEY}&language-en-US&page=1`
// };

// export default requests;


const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};

export default requests;