"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sitesModel = void 0;
var mongoose = require("mongoose");
var sitesModel = mongoose.model('sites', new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    type: {
        type: String
    }
}));
exports.sitesModel = sitesModel;
//# sourceMappingURL=sites.model.js.map