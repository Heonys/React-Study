import axios from "axios";

export default class getYouTubeApi {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchData(keyword) : this.#popularData();
  }

  async #searchData(keyword) {
    return await this.httpClient
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then(res => res.data.items)
      .catch(err => err);
  }

  async #popularData() {
    return await this.httpClient
      .get("/videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
          regionCode: "KR",
        },
      })
      .then(res => res.data.items)
      .catch(err => err);
  }
}

/* 
https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key={{key}}

http://localhost:3000/videos?key=AIzaSyCqVuGKH_BJQ0SEgFtqtOopojQ88AT0Afc&part=snippet&maxResults=25&chart=mostPopular&regionCode=KR
 */
