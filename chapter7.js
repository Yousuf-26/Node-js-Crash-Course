/*
CHAPTER - 7 Middleware
something in between request and response, use to authenticate users to access resources
types of middleware
    -built-in middleware
    -custom middleware
    -third party middleware 
    
what is middleware?
Middleware functions are functions that have access to the 
request object(req) abd the repsonse object(res) and the next middleware function in the applications request-repsonse cycle

continue from here
https://www.youtube.com/watch?v=bRqUaDRm8Po
https://www.youtube.com/watch?v=bSddNGYqL60
https://www.youtube.com/watch?v=JpBLb_OQzTA&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=42&pp=iAQB

Routing
https://www.youtube.com/watch?v=qfwaVKza_-g&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=33

jwt
https://www.youtube.com/watch?v=x5gLL8-M9Fo
https://www.youtube.com/watch?v=2pn2Bspt6EM&list=PLbGui_ZYuhigWtfUX1SX1a8LFnZ4dDwhu&index=4
*/

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

//middleware FORMDATA
// this actually protects/authenticates if the user has access to all the routes below
//built in middleware to handle urlencoded data
//'content-type: application/x-www-form-urlencoded'
//used for form data
app.use(express.urlencoded({ extended: false }));
//built-in middleware for json
app.use(express.json());
//serve static files - img,css and html
app.use(express.static(path.join(__dirname, "/public")));

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
