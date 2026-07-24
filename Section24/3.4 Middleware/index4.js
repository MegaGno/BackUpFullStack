import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandname = "";

app.use(express.urlencoded({extended: true}));

function BandNameGenerator(req,res,next) {
  console.log(req.body);
  bandname = req.body.street + req.body.pet;
  next();
}

app.use(BandNameGenerator);

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req,res) => {
  console.log(req.body);
  res.send(`<h1>Your band name is:</h1><p>${bandname}</p>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
