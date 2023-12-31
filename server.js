const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
// ...
app.use(bodyParser.json());
initRoutes(app);

let port = 8000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});