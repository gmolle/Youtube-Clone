import axios from "axios";

const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyBeMXMlmU0qibCoh_adkU3wN4eyTW0bl7A'
  }
})

export default request