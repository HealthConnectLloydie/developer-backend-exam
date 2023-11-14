"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.post("/", (req, res) => {
    const newEmployees = req.body;
    let employees = req.app.locals.employees;
    if (!employees) {
        employees = [];
    }
    employees = employees.concat(newEmployees);
    req.app.locals.employees = employees;
    res.json({ message: "Employees added successfully" });
});
