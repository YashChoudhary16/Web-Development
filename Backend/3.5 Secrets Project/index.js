//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {fileURLToPath} from "url";
import {dirname, join} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

function passCheck(req, res, next) {
    var password = req.body.password
    if (password === "ILoveProgramming") {
        next(); }
    else {
        res.redirect("/");
    }
    
}

app.get("/", (req,res) => {
    res.sendFile(join(__dirname, "public", "index.html"));
})

app.post("/check", passCheck, (req,res) => {
    console.log(req.body);
    res.sendFile(join(__dirname, "public", "secret.html"))
})

app.listen(port, () => {
    console.log(`Express server is running on port ${port}.`)
})