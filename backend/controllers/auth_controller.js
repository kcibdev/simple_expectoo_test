const genRandom = require("../utils/generateId");
const { generateJWTToken } = require("../utils/generateToken");

const loginController = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    if ((!email && !username) || !password) {
      throw new Error("Please fill all the fields");
    }

    //am using a simple method to validate the email address but in a real world application i would use the email-validator package or regex
    if (email && !email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    /* Both the username and email are unique

    Since i wasn't given a database to work with am just going to return a response with login successful,
    a generated token and a user id and the required user details but if i was given a database i would have to query
    the database to check if the user exists by email or username and then compare the password with the one in the database
    eg
    In MongoDB
    
    const user = await User.findOne({ $or: [{ "email": email }, { "username": username }] });
    if (!user) {
      throw new Error("User does not exist");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials");
    }
    
    In MySQL
    SELECT * FROM users WHERE email = email OR username = username; */

    //Just generated a random user id and token to fill the response
    const userId = genRandom(24);
    const token = generateJWTToken(userId);

    res.status(200).json({
      message: "Login Successful",
      success: true,
      data: {
        userId,
        token,
        email,
        username,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const registerController = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    if (!email || !username || !password) {
      throw new Error("Please fill all the fields");
    }

    //am using a simple method to validate the email address but in a real world application i would use the email-validator package or regex
    if (!email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    /* Both the username and email are unique
    Since i wasn't given a database to work with am just going to return a response with registration successful,
    a generated token and a user id and the required user details but if i was given a database i would have hashed the password and saved the
    user details in the user table and then return a response with registration successful, */

    //Just generated a random user id and token to fill the response
    const userId = genRandom(24);
    const token = generateJWTToken(userId);

    res.status(201).json({
      message: "Registration Successful",
      success: true,
      data: {
        userId,
        token,
        email,
        username,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = { loginController, registerController };
