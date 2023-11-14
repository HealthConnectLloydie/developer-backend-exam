import express, { Request, Response } from "express";
export const router = express.Router();

interface Employee {
  id: number;
  name: string;
  position: string;
}

router.put("/:id", (req: Request, res: Response) => {
  const idToUpdate = parseInt(req.params.id, 10);
  const updatedEmployee: Employee = req.body;
  let employees = req.app.locals.employees as Employee[];
  employees = employees.map((employee) =>
    employee.id === idToUpdate ? updatedEmployee : employee
  );
  req.app.locals.employees = employees;
  res.json({ message: "Employee updated successfully" });
});
