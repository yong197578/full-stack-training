import express from "express";

const app = express();
const port = 3000;
//nodemon app.js - it will automatically restart server
app.get("/", (req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Home Page - Welcome</h1>");
    })
app.get("/contact", (req, res)=>{
    res.send("<h1>Here is my email: yong.s.choi2@gmail.com</h1>")
})
app.get("/about",(req, res) =>{
    res.send("<h1>About Me</h1>");
})
app.listen(port, ()=>{
    console.log(`Server started ${port}`);
})
//HTTP Response Status Codes
//information response 100-199 successful responses(200-299) redirect message( 300-399)
//client error (400-499) server error (500-599)
//HTTP return codes cheat sheet