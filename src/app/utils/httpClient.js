import axios, { AxiosRequestConfig } from "axios";
axios.defaults.withCredentials = true;

class HTTPClient {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://127.0.0.1:8000/api/v1",
      withCredentials: true,
    });
  }

  /**
   *
   * @param {String} method
   * @param {String} endpoint
   * @param {FormData} data
   * @param {Object} params
   * @param {File} file
   */
  async request(method, endpoint, { data, params }) {
    /*
     * {AxiosRequestConfig} config
     */
    const config = {
      method,
      url: endpoint,
      params,
      data,
    };

    if (data instanceof FormData) {
      config.headers = {
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await this.instance.request({...config, withCredentials: true});
    return response.data;
  }

  async getAnimeList(sort, genres, search) {
    return this.request("GET", "/anime/list", {
      params: { sort, genres, search },
    });
  }

  async getGenreList() {
    return this.request("GET", "/genres/list", {});
  }

  async register(login, email, password) {
    const formData = new FormData();
    formData.append("username", login);
    formData.append("email", email);
    formData.append("password", password);

    return this.request("POST", "/users/", { data: formData });
  }

  async login(login, password) {
    const formData = new FormData();
    formData.append("username", login);
    formData.append("password", password);
    const data = await this.request("POST", "/users/login", { data: formData });

    return data.session_id;
  }

  async getMe() {
    return this.request("GET", "/users/me", {});
  }

  async addAnime(name, description, genres, imageFile) {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("genres", genres.toString());
    data.append("image_file", imageFile);

    return this.request("POST", "/anime", { data });
  }

  async getAnimeData(animeID) {
    return this.request("GET", `/anime/${animeID}`, {})
  }
}

const httpClient = new HTTPClient();
export default httpClient;
