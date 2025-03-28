"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'http://localhost:3000/auth/whoami';
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
