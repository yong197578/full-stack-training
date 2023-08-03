/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
// let qr = require('qr-image');
import qr from "qr-image";
import fs from "fs"
inquirer
.prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
    ])
.then((answer) => {
    const url = answer.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"))

    fs.writeFile("URL.txt", url, (err)=>{
        if (err) throw errl
        console.log("The File has been saved!")
    })
}).catch((error)=>{
    if(error.isTtyError){
        console.log("Error!")
    }else {
        console.log("something went wrong");
    }
})
//
// let qr = require('qr-image')
// let qr_png = qr.image('I love QR!', {type: 'png'});
// qr_png.pipe(require('fs').createWriteStream('i_love_'))