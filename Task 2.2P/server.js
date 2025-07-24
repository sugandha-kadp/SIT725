const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//Addition
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const result = a + b;
  res.send(`Expression: ${a} + ${b} \nAnswer: ${result}`);
});

//Subtraction
app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const result = a - b;
  res.send(`Expression: ${a} - ${b} \nAnswer: ${result}`);
});

//Multiplication
app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const result = a * b;
  res.send(`Expression: ${a} * ${b} \nAnswer: ${result}`);
});

//Division
app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) return res.send("Error: Cannot divide by zero.");
  const result = a / b;
  res.send(`Expression: ${a} / ${b} \nAnswer: ${result}`);
});

//Calculate
app.post('/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  const x = parseFloat(a);
  const y = parseFloat(b);
  let result;
  let symbol;

  switch (operation) {
    case 'add': result = x + y; symbol = '+'; break;
    case 'subtract': result = x - y; symbol = '-'; break;
    case 'multiply': result = x * y; symbol = '*'; break;
    case 'divide':
      if (y === 0) return res.send("Error: Cannot divide by zero.");
      result = x / y;
      symbol = '/';
      break;
    default:
      return res.send("Error: Invalid operation. Use add, subtract, multiply, or divide.");
  }

  res.send(`Expression: ${x} ${symbol} ${y} \nAnswer: ${result}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
