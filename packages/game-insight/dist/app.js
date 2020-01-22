"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The node using typescript is working');
});
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`App is running in port ${port}`);
});
//# sourceMappingURL=app.js.map