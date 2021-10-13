//Importing packages
import express from "express";
import mongoose from "mongoose";
import schema from "./schema.js";
import { URI } from "./vars.js";

//Express setup
const app = express();

//MongoDB Connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Home get endpoint
const PORT = "8080";
app.get("/", (req, res) => {
  res
    .status(401)
    .send(
      "Please enter api key in url e.g: https://api.xxx.xxx/xx/xxx&key=[YOUR KEY] \nThanks!"
    );
});

//Post message endpoint
app.post("/api/contact&key=A1s2d3f4.888.5165", (req, res) => {
  //Create new document
  const newContactItem = new schema({
    id: req.body.id,
    message: req.body.message,
  });
  //Save Item
  newContactItem.save().then(() => {
    res
      .status(201)
      .send("Data Sent and stored.")
      .catch((err) => {
        res.status(500).send(err);
      });
  });
});

//Listen / run server on port 8080
app.listen(PORT, () => {
  console.log("server now ready.");
});
