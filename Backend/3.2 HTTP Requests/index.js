import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const app = express();
const port = 3000;
const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)
app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});
app.get("/", (req, res) => {
    res.sendFile(path.join(dirName, "4.3 HTML Portfolio Project", 'index.html'))
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(dirName, "4.3 HTML Portfolio Project", "public", "about.html"))
})
app.get("/contact", (req,res) => {
    res.sendFile(path.join(dirName, "4.3 HTML Portfolio Project", "public", "contact.html"))
})
