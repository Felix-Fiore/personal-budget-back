const jwt = require('jsonwebtoken');

const jwtValidate = (req, res, next) => {
  //x-token headers

  const token = req.header('x-token');

  if (!token) {
    return res.status(401).send({
      message: 'No token provided',
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = uid;
    req.name = name;

    console.log(req.uid, req.name);
  } catch (error) {
    return res.status(401).send({
      message: 'Invalid token',
    });
  }

  next();
};

module.exports = { jwtValidate };
