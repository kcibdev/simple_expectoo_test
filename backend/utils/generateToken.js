const jwt = require("jsonwebtoken");

const generateJWTToken = (userId) => {
  // Generate an access token and the JWT secret will be kept in the .env file
  const token = jwt.sign({ id: userId }, "JWT_SECRET_KEY");
  return token;
};

module.exports = {
  generateJWTToken,
};
