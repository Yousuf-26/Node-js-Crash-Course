/*
 CHAPTER 6 - EXPRESS
*/
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

//ROUTE
app.get("/load", (req, res) => {
  //res.send("Rachel");
  //for files or multimedia response
  res.sendFile("./chapter4-EventOnandOnce.png", { root: __dirname });
});

//LISTENING TO PORT
app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
