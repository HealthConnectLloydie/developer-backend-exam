"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employees = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
let employees = [];
exports.employees = employees;
app.use("/employee/random", routes_1.randomEmployeeRoute);
app.use("/employee/add", routes_1.addEmployeeRoute);
app.use("/employee/delete", routes_1.deleteEmployeeRoute);
app.use("/employee/update", routes_1.updateEmployeeRoute);
app.use("/employees", routes_1.listEmployeesRoute);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
