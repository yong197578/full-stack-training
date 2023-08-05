import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    const today = new Date();
    const day =  today.getDay();
    console.log(day);

    let type = "a weekday"
    let adv = "it's time to work hard"
    //0 sunday 6 saturday
    if(day === 0 || day === 6){
        type = "the Weekend"
        adv = "it's time to have fun"
    }

    res.render("index.ejs", {
        dayType: "a Weekday",
        advice: "it's time to work hard",
    })

})

app.listen(port, ()=>{
    console.log(`You are using port: ${port}`);
})