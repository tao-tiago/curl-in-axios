import { AxiosInstance } from "axios";
import { Curl } from "./lib/Curl";

function defaultCallback(err: string) {
  console.error(err);
}

export default (instance: AxiosInstance, callback = defaultCallback) => {
  instance.interceptors.request.use((req) => {
    try {
      const curl = new Curl(req);
      const curlGenerate = curl.generateCommand();

      Object.assign(req, {
        curlObject: curlGenerate
      });

    } catch (err) {
      callback(err);

    } finally {
      return req;

    }
  });
};

