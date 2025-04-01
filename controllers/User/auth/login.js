// const User = require("../../../Model/UserModel.js");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

// async function login(req, res) {
//   const { email, Password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
//   const isMatch = await bcrypt.compare(Password, user.Password);
//   if (!isMatch) {
//     return res.status(401).json({ message: "Invalid Password" });
//   }
//   const token = jwt.sign(
//     {
//       _id: user._id,
//       email: user.email,
//     },
//     process.env.SECRET_KEY,
//     { expiresIn: "5d" }
//   );

//   res.status(200).json({ message: "login success", token });
//   try {
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "internal server error" });
//   }
// }

// module.exports = { login };
const User = require("../../../Model/UserModel.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
async function login(req, res) {
  try {
    const { email, Password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    const isPassword = await bcrypt.compare(Password, user.Password);
    if (!isPassword) {
      return res.status(403).json({ message: "Password not matched" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        // role: user.role,
      },
      process.env.secret_key,
      { expiresIn: "5d" }
    );
    return res.status(200).json({ message: "user can access token", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { login };
