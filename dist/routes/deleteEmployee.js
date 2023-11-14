"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.delete("/:id", (req, res) => {
    const idToRemove = parseInt(req.params.id, 10);
    let employees = req.app.locals.employees;
    employees = employees.filter((employee) => employee.id !== idToRemove);
    req.app.locals.employees = employees;
    res.json({ message: "Employee deleted successfully" });
});
