const authorize = (req, res, next) => {
  console.log('authorize');
  const { user } = req.query;

  if (user === 'Geralt') {
    req.user = { name: 'Geralt', id: 3 };
    next();
  } else {
    return res.status(401).send('Unauthorized');
  }
  next();
};

module.exports = authorize;
