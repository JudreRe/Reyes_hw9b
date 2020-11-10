const account = require("./accounting.js");

// Create object from the exported class
const myAccount = new account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());
