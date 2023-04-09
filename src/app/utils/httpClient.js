import axios from "axios";

class HTTPClient {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://127.0.0.1:8000/api/v1",
      withCredentials: true
    })
  }

  async request(method, endpoint, {data, params}) {
    const response = await this.instance.request({
      method,
      url: endpoint,
      params,
      data
    })
    return response.data;
  }

  async getAnimeList(sort, genres) {
    return this.request("GET", "/anime/list", {params: {sort, genres}})
  }

  async getGenreList() {
    return this.request("GET", "/genres/list", {})
  }

  async register(login, email, password) {
    const formData = new FormData();
    formData.append("username", login);
    formData.append("email", email);
    formData.append("password", password)

    return this.request("POST", "/users/", {data: formData});
  }

  async login(login, password) {
    const formData = new FormData();
    formData.append("username", login);
    formData.append("password", password)
    const data = await this.request("POST", "/users/login", {data: formData});

    return data.session_id
  }

  async getMe() {
    return this.request("GET", "/users/me", {})
  }

  async addAnime({name, description, genres, imageFile}) {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description)
    data.append("genres", genres.toString());
    data.append("image_file", imageFile);

    return this.request("POST", "/anime", {data});
  }
}

const httpClient = new HTTPClient();
export default httpClient;