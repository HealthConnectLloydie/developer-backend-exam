import express, { Request, Response } from "express";
export const router = express.Router();

interface Employee {
  id: number;
  name: string;
  position: string;
}

router.get("/", (req: Request, res: Response) => {
  console.log("Fetching employees:", req.app.locals.employees);
  let employees = req.app.locals.employees as Employee[];
  res.json(employees);
  req.app.locals.employees = employees;
});
