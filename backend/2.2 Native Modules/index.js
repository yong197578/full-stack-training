const fs = require("fs");

//fs.writeFile(path, options, callback)
// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved");
// });

//path, options, callback
fs.readFile("message.txt", "utf-8", (err, data) =>{
    if (err) throw err;
    console.log(data);
});