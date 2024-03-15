/*Difference in Vanilla js and node.js
1.global object insread of window object

*/
//console.log(global);

//getting information about os
const os = require("os");
const path = require("path");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

//directory & file information and information about the current directory that you are working on
console.log(__dirname);
console.log(__filename);

//usage of path package
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
//provide us all the above values as an object
console.log(path.parse(__filename));
