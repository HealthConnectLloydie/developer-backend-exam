import express, { Request, Response } from "express";
export const router = express.Router();

interface Employee {
  id: number;
  name: string;
  position: string;
}

router.post("/", (req: Request, res: Response) => {
  const newEmployees: Employee[] = req.body;
  let employees = req.app.locals.employees as Employee[];
  if (!employees) {
    employees = [];
  }
  employees = employees.concat(newEmployees);
  req.app.locals.employees = employees;
  res.json({ message: "Employees added successfully" });
});
