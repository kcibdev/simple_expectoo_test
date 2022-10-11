const jwt = require("jsonwebtoken");

const generateJWTToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  generateJWTToken,
};
