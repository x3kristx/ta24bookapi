import express from 'express';

const app = express();
const PORT = 3000;

app.get('/welcome', (req, res) => {
  res.send('Hello, World!');
}   );

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});