"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sum_1 = __importDefault(require("./api/v1/sum"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    'OPTIONS' == req.method ?
        res.sendStatus(200) :
        next();
});
app.use('/api/sum', sum_1.default);
app.listen(5000, () => console.log('App listening on port 5000'));
