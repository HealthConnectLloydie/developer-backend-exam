"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get("/", (req, res) => {
    const randomEmployee = getRandomEmployee(req);
    res.json(randomEmployee);
});
function getRandomEmployee(req) {
    let employees = req.app.locals.employees;
    if (!employees) {
        // If employees is undefined, initialize it as an empty array
        employees = [];
        req.app.locals.employees = employees;
    }
    const randomIndex = Math.floor(Math.random() * employees.length);
    return employees[randomIndex];
}
