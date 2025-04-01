const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const ConnectDb = require("./Db/Connect.js");

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//DataBase
ConnectDb();

PORT = 5500 || process.env.PORT;
//Server
app.listen(PORT, () => {
  console.log(`app is listen on http://localhost:${PORT}`);
});
