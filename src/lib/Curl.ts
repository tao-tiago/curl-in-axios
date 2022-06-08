import { AxiosRequestConfig } from "axios";

export class Curl {
  private request: any;

  constructor(request: AxiosRequestConfig) {
    this.request = request;
  }

  private getMethod = () => {
    return `-X ${this.request.method.toUpperCase()}`;
  }

  private getHeaders = () => {
    let headers = this.request.headers;
    let curlHeaders = "";

    if (headers.hasOwnProperty("common")) {
      headers = this.request.headers[this.request.method];
    }

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

  private getBody = () => {
    let data = "";

    if (
      typeof this.request.data !== "undefined" &&
      this.request.data !== "" &&
      this.request.data !== null &&
      this.request.method.toUpperCase() !== "GET"
    ) {
      data = typeof this.request.data === "object" || Object.prototype.toString.call(this.request.data) === "[object Array]"
        ? JSON.stringify(this.request.data)
        : this.request.data;
    }

    return `--data '${data}'`.trim();
  }

  generateCommand = () => {
    return `curl ${this.getMethod()} "${this.getBuiltURL()}" ${this.getHeaders()} ${this.getBody()}`
      .trim()
      .replace(/\s{2,}/g, " ");
  }
}
