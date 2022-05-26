const express = require('express');
const app = express();
const path = require('path');

//setup static and middleware
app.use(express.static('./public'));

app.listen(5050, () => {
  console.log('server is listening on port 5050...');
});

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// });

app.get('/about', (req, res) => {
  res.status(200).send('<h1>About page</h1>');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
