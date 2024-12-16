import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"

inquirer
    .prompt([{
        message:"Your url",
        name:"URL",
    }]).then((ans)=>{
        const url=ans.URL
        const qr_svg=qr.image(url);
        qr_svg.pipe(fs.createWriteStream("resqrImg.png"));

        fs.writeFile("Url.txt",url,(err)=>{
            if(err) throw err;
            console.log("file has been saved successfully");
        })
    }).catch((error)=>{
        if(error.isTtyError){

        }else{

        }
    })
