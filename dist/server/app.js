"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
var body_parser_1 = require("body-parser");
var compression = require("compression");
var sites_1 = require("./routes/sites");
var app = express();
exports.app = app;
app.disable('x-powered-by');
app.use(body_parser_1.json());
app.use(compression());
app.use(body_parser_1.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, '../client')));
app.use('/api/sites', sites_1.siteRouter);
//# sourceMappingURL=app.js.map