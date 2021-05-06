"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteRouter = void 0;
var express_1 = require("express");
var sites_model_1 = require("../models/sites.model");
var siteRouter = express_1.Router();
exports.siteRouter = siteRouter;
var axios = require('axios');
var tech_types = ["python", "java", "script", "haskell"];
function checkContent(_b) {
    var _body = _b.toLowerCase();
    var counters = Array(tech_types.length);
    var maxIndex = -1;
    var maxCounter = 0;
    for (var i = 0; i < tech_types.length; i++) {
        counters[i] = _body.split(tech_types[i]).length - 1;
        console.log(tech_types[i]);
        console.log(counters[i]);
        if (counters[i] > maxCounter) {
            maxIndex = i;
            maxCounter = counters[i];
        }
    }
    if (maxCounter < 0) {
        return "None";
    }
    else {
        return tech_types[maxIndex];
    }
}
siteRouter.get('/', function (req, res) {
    sites_model_1.sitesModel.find({}, function (err, sites) {
        if (err) {
            throw err;
        }
        res.json(sites);
    });
});
siteRouter.post('/', function (req, res) {
    var url = req.body.name;
    axios.get(url).then(function (_httpRes) {
        return checkContent(_httpRes.data);
    }).catch(function (error) {
        var _a = error.response, status = _a.status, statusText = _a.statusText;
        console.log("Error! HTTP Status: " + status + " " + statusText);
        return "None";
    }).then(function (_t) {
        console.log(_t);
        var tmp = new sites_model_1.sitesModel({
            id: req.body.id,
            name: req.body.name,
            title: req.body.title,
            type: _t
        });
        tmp.save(function (err) {
            if (err) {
                throw err;
            }
        });
        res.end();
    });
});
//# sourceMappingURL=sites.js.map