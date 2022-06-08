import { AxiosInstance } from "axios";
// import { Curl } from "./lib/Curl";

/*
function defaultLogCallback(curlResult, err) {
  const { command } = curlResult;
  if (err) {
    console.error(err);
  } else {
    console.info(command);
  }
}*/

export default (instance: AxiosInstance, callback) => {
  instance.interceptors.request.use((req) => {
    try {
      console.log(req);
      /*
      const curl = new Curl(req);

      req.curlObject = curl;
      req.curlCommand = curl.generateCommand();
      req.clearCurl = () => {
        delete req.curlObject;
        delete req.curlCommand;
        delete req.clearCurl;
      };
      */
    } catch (err) {
      /*
      // Even if the axios middleware is stopped, no error should occur outside.
      callback(null, err);
    } finally {
      if (req.curlirize !== false) {
        callback({
          command: req.curlCommand,
          object: req.curlObject
        });
      }
      return req;
      */
    }
  });
};

