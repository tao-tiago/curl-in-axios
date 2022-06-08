import axios from "axios";
import curl_axios from "../src/main";

declare module "axios" {
  export interface AxiosRequestConfig {
    curlObject?: string;
  }
}

curl_axios(axios);

describe("Testing curlObject in Axios", () => {

  it("should return a 200 with the value 'ok-get'", async () => {
    const res = await axios.get("http://localhost:3000/");

    expect(res.status).toBe(200);
    expect(res.data.message).toBe("ok-get");
  });

  it("should return a 200 with the value 'nothing'", async () => {
    const res = await axios.post("http://localhost:3000/");

    expect(res.status).toBe(200);
    expect(res.data.message).toBe("nothing");
  });

  it("should return the response with object '{\"message\":\"data-post\"}'", async () => {
    const res = await axios.post("http://localhost:3000/", { dummy: "data-post" });
    const data = JSON.stringify(res.data);

    expect(data).toBe("{\"message\":\"data-post\"}");
  });

  it("should return the response with the defined curl command", async () => {
    const res = await axios.post("http://localhost:3000/", { dummy: "data-post" });

    expect(res.config.curlObject).toBe(`curl -X POST "http://localhost:3000/" -H "Content-Type:application/x-www-form-urlencoded" --data '{"dummy":"data-post"}'`);
  });

});