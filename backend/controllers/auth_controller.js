const genRandom = require("../utils/generateId");
const { generateJWTToken } = require("../utils/generateToken");

const loginController = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    if ((!email && !username) || !password) {
      throw new Error("Please fill all the fields");
    }

    const userId = genRandom(16);
    const token = generateJWTToken(userId);

    res.status(400).json({
      message: "Login Successful",
      success: false,
      data: {
        userId,
        token,
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
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = { loginController, registerController };
