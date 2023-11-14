import express, { Request, Response } from "express";
export const router = express.Router();

interface Employee {
  id: number;
  name: string;
  position: string;
}

router.get("/", (req: Request, res: Response) => {
  const randomEmployee = getRandomEmployee(req);
  res.json(randomEmployee);
});

function getRandomEmployee(req: Request): Employee {
  let employees = req.app.locals.employees as Employee[];

  if (!employees) {
    // If employees is undefined, initialize it as an empty array
    employees = [];
    req.app.locals.employees = employees;
  }

  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}
