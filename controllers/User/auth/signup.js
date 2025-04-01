const User = require("../../../Model/UserModel.js");

async function signup(req, res) {
  try {
    const { userName, email, Password } = req.body;
    if (!userName || !email || !password) {
      return res.statrus(400).json({ message: " all fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({ message: " user already exists" });
    }
    const saveuser = await new User({
      userName,
      email,
      Password,
    });
    await saveuser.save();
    return res.status(200).json({ message: " signup successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { signup };
