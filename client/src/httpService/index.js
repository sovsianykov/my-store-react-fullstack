import axios from "axios";
import { API_ACTION_FETCH } from "@/App/Products/store/constants";
import { appRouter } from "@/App/Routing/appRouter";
import { POST_ORDERS} from "@/App/Order/store/constants";

class httpService {
  constructor() {
    let service = axios.create({
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, appRouter.Home);
        break;
      case 404:
        console.log(error)
        // this.redirectTo(document, "/");
        break;
      default:
        this.redirectTo(document, "/500");
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  get(path, callback) {
    return this.service
      .get(`${process.env.REACT_APP_BASE_URL}${path}`)
      .then((response) =>
        callback({ type: API_ACTION_FETCH.SUCCESS, payload: response.data.data }))
  }

  patch(path, payload, callback) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) => callback(response.status, response.data));
  }

  post(path, payload, callback) {
    return this.service
      .request({
        method: "POST",
        url: `${process.env.REACT_APP_BASE_URL}${path}`,
        responseType: "json",
        data: payload,
      })
      .then((response) => callback({type: POST_ORDERS, payload: response.data}));
  }
}

export default new httpService();
