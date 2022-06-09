import { AxiosInstance } from "axios";
import { Curl } from "./lib/Curl";

declare module "axios" {
  export interface AxiosRequestConfig {
    curlCommand?: string;
  }
}

function defaultCallback(err: string) {
  console.error(err);
}

export default (instance: AxiosInstance, callback = defaultCallback) => {
  instance.interceptors.request.use((req) => {
    try {
      const curl = new Curl(req);
      const curlGenerate = curl.generateCommand();

      Object.assign(req, {
        curlCommand: curlGenerate
      });

    } catch (err) {
      callback(err);

    } finally {
      return req;

    }
  });
};

