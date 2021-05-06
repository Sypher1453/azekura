"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var userRouter = express_1.Router();
exports.userRouter = userRouter;
var users = {
    users: [
        {
            id: 0,
            name: 'user0'
        },
        {
            id: 1,
            name: 'user1'
        }
    ]
};
userRouter.get('/', function (req, res) {
    res.json(users);
});
//# sourceMappingURL=users.js.map