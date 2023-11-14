import express from "express";
import bodyParser from "body-parser";
import {
  addEmployeeRoute,
  deleteEmployeeRoute,
  listEmployeesRoute,
  randomEmployeeRoute,
  updateEmployeeRoute,
} from "./routes";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

interface Employee {
  id: number;
  name: string;
  position: string;
}

let employees: Employee[] = [];

app.use("/employee/random", randomEmployeeRoute);
app.use("/employee/add", addEmployeeRoute);
app.use("/employee/delete", deleteEmployeeRoute);
app.use("/employee/update", updateEmployeeRoute);
app.use("/employees", listEmployeesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { employees }; // Export the employees array
