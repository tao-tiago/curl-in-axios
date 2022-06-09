# Versions
* 0.1.0 - Version compatible with CommonJS and Modules. Compatible with TypeScript, Frontend and Backend (Node)

# Description

This module is an axios third-party module to log any axios request as a cURL command in the console.

# How it works

The module makes use of axios' interceptors to log the request as a cURL command. It also stores it in the response's config object. Therefore, the command can be seen in the app's console, as well as in the `res.config.curlCommand` property of the response.

# How to use it

curl-in-axios is super easy to use. First you'll have to install it.

```shell
npm i curl-in-axios
```

Then all you have to do is import and instanciate curl-in-axios in your app. Here's a sample:

```javascript
import axios from 'axios';
import curl from 'curl-in-axios';

// initializing curl-in-axios with your axios instance
curl(axios);

axios.post("http://localhost:3000/", { dummy: "data-post" })
  .then(res => {
    console.log(res.config.curlCommand);
    // curl -X POST "http://localhost:3000/" -H "Content-Type:application/x-www-form-urlencoded" --data '{"dummy":"data-post"}'
  }).catch(err => {
    console.log(err);
  });
```

# Axios Version Compatible (tested)

## Version 0.27.0 or higher