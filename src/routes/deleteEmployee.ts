import express, { Request, Response } from "express";
export const router = express.Router();

interface Employee {
  id: number;
  name: string;
  position: string;
}

router.delete("/:id", (req: Request, res: Response) => {
  const idToRemove = parseInt(req.params.id, 10);
  let employees = req.app.locals.employees as Employee[];
  employees = employees.filter((employee) => employee.id !== idToRemove);
  req.app.locals.employees = employees;
  res.json({ message: "Employee deleted successfully" });
});
