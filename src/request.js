const API_Key = "k_7u33wy23";
const API_Key2 = 'k_9b7s4szv'
const API_Key3 ='k_vcvn9nh0'
const request = {// api key (Aakash-Rajendran)k_24xyzip8
  //api key (aakash) k_84qj5v7p
  trendingmovies: `/MostPopularMovies/${API_Key}`,
  upcomming: `/ComingSoon/${API_Key3}`,
  netflixoriginals:`/Company/${API_Key}/co0144901`,
  // lastyearhits: `/IMDbList/k_ip2ve139/ls041656709`,//tamil movies
  Actionmovies: `/IMDbList/${API_Key2}/ls027328830`,
  comedymovies: `/IMDbList/${API_Key3}/ls058726648`,
  horrormovies: `/IMDbList/${API_Key2}/ls026573448`,
  besttamilmovies:`/IMDbList/${API_Key}/ls062036891`,
 // newArrival :`/Title/${API_Key2}/tt10579952`,
   ontheater: `/InTheaters/k_9b7s4szv`,
//  documentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};
export default request;
