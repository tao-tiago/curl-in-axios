# Versions
* 0.0.1 - Uses CommonJS Modules (TypeScript)

# Description

This module is an axios third-party module to log any axios request as a curl command in the console. It was originally posted as a suggestion on the axios repository, but since we believed it wasn't in the scope of axios to release such feature, we decided to make it as an independent module.

# How it works

The module makes use of axios' interceptors to log the request as a cURL command. It also stores it in the response's config object. Therefore, the command can be seen in the app's console, as well as in the `res.config.curlCommand` property of the response.

# How to use it

axios-curlirize is super easy to use. First you'll have to install it.

```shell
npm i --save axios-curlirize@latest
```

Then all you have to do is import and instanciate curlirize in your app. Here's a sample:

```javascript
import axios from 'axios';
import express from 'express';
import curlirize from 'axios-curlirize';

const app = express();

// initializing axios-curlirize with your axios instance
curlirize(axios);

// creating dummy route
app.post('/', (req, res) => {
  res.send({ hello: 'world!' });
});

// starting server
app.listen(7500, () => {
  console.log('Dummy server started on port 7500');
  /*
             The output of this in the console will be :
             curl -X POST -H "Content-Type:application/x-www-form-urlencoded" --data {"dummy":"data"} http://localhost:7500/
        */
  axios
    .post('http://localhost:7500/', { dummy: 'data' })
    .then(res => {
      console.log('success');
    })
    .catch(err => {
      console.log(err);
    });
});
```

# Features

## Changing the logger
By default, axios-curlirize uses the `console.log/error()` functions. It is possible to change the logger by doing something similar to this:

```javascript
// when initiating your curlirize instance
curlirize(axios, (result, err) => {
  const { command } = result;
  if (err) {
    // use your logger here
  } else {
    // use your logger here
  }
});
```

## Curilirize additional axios instance
To curlirize any other instances of axios (aside from the base one), please call the `curlirize()` method on that instance.
```javascript
const instance = axios.create({ baseURL: 'https://some-domain.com/api/', timeout: 1000, headers: {'X-Custom-Header': 'foobar'} });
curlirize(instance);
```

## Disable the logger

By default, all requests will be logged. But you can disable this behaviour unitarily by setting the `curlirize` option to false within the axios request.

```javascript
axios
  .post('http://localhost:7500/', { dummy: 'data' }, {
    curlirize: false
  })
  .then(res => {
    console.log('success');
  })
  .catch(err => {
    console.log(err);
  });
```

## Clear a request

```javascript
axios
  .post('http://localhost:7500/', { dummy: 'data' })
  .then(res => {
    res.config.clearCurl();
  })
  .catch(err => {
    console.log(err);
  });
```
