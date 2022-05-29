const express = require('express');
const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  return res.status(401).send('You are not who you are');
});

module.exports = loginRouter;
