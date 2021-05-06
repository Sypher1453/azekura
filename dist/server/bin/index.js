"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app_1 = require("../app");
var config_1 = require("../config");
var mongoose = require("mongoose");
var port = process.env.PORT || config_1.serverPort;
app_1.app.set('port', port);
var server = http.createServer(app_1.app);
server.listen(port, function () {
    mongoose.connect(config_1.mongoUrl);
});
//# sourceMappingURL=index.js.map