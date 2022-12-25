import axios from "axios";

// export default getYouTubeApi;

export default class getFakeYouTubeApi {
  async search(keyword) {
    return keyword ? this.#searchData(keyword) : this.#popularData();
  }

  async #searchData() {
    return await axios
      .get(`/data/search.json`)
      .then(res => res.data.items)
      .catch(err => err);
  }

  async #popularData() {
    return await axios
      .get(`/data/popular.json`)
      .then(res => res.data.items)
      .catch(err => err);
  }
}
