import axios from "axios";


class HTTPClient {
  constructor() {
    this.sessionID = ""
    this.instance = axios.create({
      baseURL: "http://127.0.0.1:8000/api/v1",
      withCredentials: true
    })
  }

  async request(method, endpoint, {data, params}) {
    const response = await this.instance.request({
      method,
      url: endpoint,
      params
    })
    return response.data;
  }

  async getAnimeList(sort, genres) {
    return this.request("GET", "/anime/list", {params: {sort, genres}})
  }

  async getGenreList() {
    return this.request("GET", "/genres/list", {})
  }
}

const httpClient = new HTTPClient();
export default httpClient;