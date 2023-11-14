"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.put("/:id", (req, res) => {
    const idToUpdate = parseInt(req.params.id, 10);
    const updatedEmployee = req.body;
    let employees = req.app.locals.employees;
    employees = employees.map((employee) => employee.id === idToUpdate ? updatedEmployee : employee);
    req.app.locals.employees = employees;
    res.json({ message: "Employee updated successfully" });
});
