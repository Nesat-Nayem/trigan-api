const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const dotenv = require("dotenv");


app.use(cors({origin: "http://localhost:3000"}));

app.use(express.json());
const connectDB = require("./config/db");
dotenv.config();

const allRouters = require("./routes/router");

app.use("/api", allRouters);

const { errorHandler } = require("./middleware/errorHandler");

connectDB();
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("trigan career server is running  ...");
});

app.listen(port, () => console.log(`Listening on ${port}`));
