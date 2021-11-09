const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

dotenv.config({ path: ".env" });
const port = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Crud Application");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
