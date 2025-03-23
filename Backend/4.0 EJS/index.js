import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url); // Get the full path of the current file
const __dirname = dirname(__filename); // Get the directory of the current file
const app = express();
const port = 3000

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory to the same folder as index.js
app.set("views", join(__dirname));

const today = new Date(); // Get the current date
const dayOfWeek = today.getDay(); // Get the day of the week

app.get("/", (req, res) => {
    res.render("index.ejs", { date : dayOfWeek})
});

app.listen(port, () => {
    console.log(`The server is live at port ${port}`)
});


