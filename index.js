const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");

//
const cors = require("cors");
app.use(cors());
app.options("*", cors());



app.use(express.static("public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json({ extended: false }));


///// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/", require("./routes/index"));


const PORT = process.env.PORT || 8080;

var server = http.createServer(app);

server.listen(PORT, console.log(`Server started on ${PORT}`));
