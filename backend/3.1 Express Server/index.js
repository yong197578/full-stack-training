import express from "express";
const app = express();
const port = 3000;
app.get("/",  req, res =>{
    res.send("Hello, world!");
})

//first part is port, second part is callback function
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
//start server = node index.js
//sudo -i -P -n | grep LISTEN
//HTTP request
//get -request resources to the server(get something)
//post - Sending resources to the server (send something)
//put - replace resources (Update something - entire resource)
//patch - Patch up a resources (Update something - a resource)
//delete - delete resources