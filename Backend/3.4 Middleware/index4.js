import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname , join} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var data;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
})
app.post("/submit", (req, res) => {
  console.log(req.body)
  data = req.body;
  var bandName = data.street + data.pet
  res.send("<h1>Your Band Name is: </h1>" +`<br><h2>${bandName}</h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
