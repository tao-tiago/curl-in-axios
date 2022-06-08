// import { AxiosRequestConfig } from "axios";

export class Curl {
  private static INSTANCE: any;
  private request: any;

  constructor(config) {
    this.request = config;
  }

  public static getInstance(config): any {
    if (!Curl.INSTANCE) {
      Curl.INSTANCE = new Curl(config);
    }

    return this.INSTANCE;
  }

  /*

  private getHeaders = () => {
    let headers = this.request.headers,
      curlHeaders = "";

    // get the headers concerning the appropriate method (defined in the global axios instance)
    if (headers.hasOwnProperty("common")) {
      headers = this.request.headers[this.request.method];
    }

    // add any custom headers (defined upon calling methods like .get(), .post(), etc.)
    for (let property in this.request.headers) {
      if (
        !["common", "delete", "get", "head", "patch", "post", "put"].includes(
          property
        )
      ) {
        headers[property] = this.request.headers[property];
      }
    }

    for (let property in headers) {
      if ({}.hasOwnProperty.call(headers, property)) {
        let header = `${property}:${headers[property]}`;
        curlHeaders = `${curlHeaders} -H "${header}"`;
      }
    }

    return curlHeaders.trim();
  }

  private getMethod = () => {
    return `-X ${this.request.method.toUpperCase()}`;
  }

  private getBody = () => {
    if (
      typeof this.request.data !== "undefined" &&
      this.request.data !== "" &&
      this.request.data !== null &&
      this.request.method.toUpperCase() !== "GET"
    ) {
      let data =
        typeof this.request.data === "object" ||
          Object.prototype.toString.call(this.request.data) === "[object Array]"
          ? JSON.stringify(this.request.data)
          : this.request.data;
      return `--data '${data}'`.trim();
    } else {
      return "";
    }
  }

  private getUrl = () => {
    if (this.request.baseURL) {
      let baseUrl = this.request.baseURL
      let url = this.request.url
      let finalUrl = baseUrl + "/" + url
      return finalUrl
        .replace(/\/{2,}/g, '/')
        .replace("http:/", "http://")
        .replace("https:/", "https://")
    }
    return this.request.url;
  }

  private getQueryString = () => {
    if (this.request.paramsSerializer) {
      const params = this.request.paramsSerializer(this.request.params)
      if (!params || params.length === 0) return ''
      if (params.startsWith('?')) return params
      return `?${params}`
    }
    let params = ""
    let i = 0

    for (let param in this.request.params) {
      if ({}.hasOwnProperty.call(this.request.params, param)) {
        params +=
          i !== 0
            ? `&${param}=${this.request.params[param]}`
            : `?${param}=${this.request.params[param]}`;
        i++;
      }
    }

    return params;
  }

  private getBuiltURL = () => {
    let url = this.getUrl();

    if (this.getQueryString() !== "") {
      url += this.getQueryString();
    }

    return url.trim();
  }

  generateCommand() {
    return `curl ${this.getMethod()} "${this.getBuiltURL()}" ${this.getHeaders()} ${this.getBody()}`
      .trim()
      .replace(/\s{2,}/g, " ");
  }
  */
}
