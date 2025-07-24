# Simple Calculator API with Express

This project is a basic Node.js and Express app that performs simple math operations (add, subtract, multiply, divide) through REST API endpoints.

## How to Run

1. Clone the repo  
2. Run `npm install` to install dependencies  
3. Start the server with `npm start`  
4. Open your browser at `http://localhost:3000` to see the static page

## API Endpoints

- GET `/add?a=5&b=3` — adds two numbers  
- GET `/subtract?a=5&b=3` — subtracts b from a  
- GET `/multiply?a=5&b=3` — multiplies two numbers  
- GET `/divide?a=6&b=3` — divides a by b  
- POST `/calculate` — send JSON like `{ "a": 5, "b": 3, "operation": "add" }` for calculation

## Notes

- Make sure to provide numbers for `a` and `b`.  
- Division by zero is handled with an error message.

---

Created as part of SIT725 practical exercises.
