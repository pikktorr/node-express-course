const express = require('express');
const app = express();
const peopleRouter = require('./routes/peopleRoutes');
const loginRouter = require('./routes/authRoutes');

app.listen(5050, () => {
  console.log('server is listening on port 5050...');
});

app.use(express.static('./methods-public')); //static assets
app.use(express.urlencoded({ extended: false })); //parse form data
app.use(express.json()); //parse json

app.use('/login', loginRouter);
app.use('/api/people', peopleRouter);
