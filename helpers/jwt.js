const jwt = require('jsonwebtoken');

// uid and name will be the payload
const generateToken = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '168h' },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Error signing token');
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { generateToken };
