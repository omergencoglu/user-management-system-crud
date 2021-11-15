const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: ".env" });
const port = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//mongoDB connection
connectDB();

//parse request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set view engine
app.set("view engine", "ejs");
//app.set('views', path.resolve(__dirname, "views/ejs"))

//load assets
app.use(express.static(path.join(__dirname, "assets")));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
