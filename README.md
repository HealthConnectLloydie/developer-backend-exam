# developer-backend-exam

Prerequisites

    Node.js v18.17.0
    TypeScript
    Postman

Getting Started

Make sure you have Node.js and npm installed on your machine.

- Node.js
- npm

Installation

1. Clone the repository
2. Navigate to the project directory:

3. Install dependencies:

   npm install

4. Start the server:

   npm run dev

TESTING

To test the entire API, you'll want to test each endpoint individually to ensure that they work as expected. Here are the steps to test the entire API using Postman (or any other API testing app):

Here's the link to download postman

    https://www.postman.com/downloads/

The API should be running at http://localhost:3000.

1. Add Employees Endpoint:

   - Request Type: POST
   - URL: http://localhost:3000/employee/add
   - Content-Type: application/json

   NOTE. I added a txt file for example data, to copy easily

2. Random Employee Endpoint:

   - Request Type: GET
   - URL: http://localhost:3000/employee/random
   - Expected Result: A random employee object should be returned.

3. Update Employee Endpoint:

   - Request Type: PUT
   - URL: http://localhost:3000/employee/update/1 (Replace 1 with an existing employee ID)
   - Content-Type: application/json
   - Request Body:
   
   { "id": 1, "name": "Updated Employee", "position": "Senior Developer" }

   Expected Result: A response indicating that the employee was updated successfully.

5. List Employees Endpoint:

   - Request Type: GET
   - URL: http://localhost:3000/employees
   - Expected Result: A list of all employees should be returned.

6. Delete Employee Endpoint:

   - Request Type: DELETE
   - URL: http://localhost:3000/employee/delete/1 (Replace 1 with an existing employee ID)
   - Expected Result: A response indicating that the employee was deleted successfully.

SUMMARY FOR BOTH EXAM

Q1 AND Q2 ANSWERS:

Frontend:

It took me about 9 hours to complete the frontend exam because I had to learn React with TypeScript from scratch. I have experience with React Native, but TypeScript is a new language for me. I had to research the following topics:

    TypeScript basics
    React with TypeScript
    React router
    React components
    React state management

Backend:

It took me about 6 hours to complete the backend exam because I had to learn Node.js from scratch. I have no experience creating REST APIs, so I had to learn the following topics:

    Node.js basics
    Express.js
    REST API design

Q3.

If I had used a database for the backend project, I would have used MongoDB. IT is also a popular choice for Node.js developers.

To delete an employee from MongoDB, you can use the deleteOne() method. The deleteOne() method takes a query document as its argument. The query document specifies the criteria for which documents to delete. For example, the following query document would delete the employee with the ID of 123:

{
id: 123
}

To execute the query, you would call the deleteOne() method on the collection that contains the employee documents. For example, the following code would delete the employee with the ID of 123 from the employees collection:

db.employees.deleteOne({ id: 123 });
