const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser()); // Tell the app to use the cookie-parser middleware

const PORT = 3080;

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('testCookie', 'This is a test cookie', { maxAge: 900000, httpOnly: true });
  res.send('Cookie has been set');
});

// Route to get cookie
app.get('/get-cookie', (req, res) => {
  const cookieValue = req.cookies.testCookie || 'No cookie found';
  res.send(`Cookie value: ${cookieValue}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});