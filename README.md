# codecamp

> A Vue.js project to demonnstrate concepts from framework

## Build Setup

``` bash

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev
```

## If you want to start from scratch
``` bash
$ npm install -g vue-cli
$ vue init webpack nameProject
$ cd nameProject
$ npm install --save vuetify
$ npm install --save axios vue-axios
$ npm install
$ npm run dev
```
### Use - add in your main.js

```javascript
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import("../node_modules/vuetify/dist/vuetify.min.css") 


Vue.use(Vuetify)
Vue.use(VueAxios, axios);
```