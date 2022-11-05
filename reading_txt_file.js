const fs = require("fs");
let text = fs.readFileSync("file.txt", "utf-8");
text = text.replace("Emmack", "EmMaCk");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("new.txt", text);