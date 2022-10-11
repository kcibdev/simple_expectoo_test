const jwt = require("jsonwebtoken");

const generateJWTToken = (userId) => {
  const token = jwt.sign({ id: userId }, "JWT_SECRET_KEY");
  return token;
};

module.exports = {
  generateJWTToken,
};
