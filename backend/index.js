//Importing packages
import express from "express";
import mongoose from "mongoose";
import dbElement from "./schema.js";
import { URI, KEY } from "./vars.js";

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
      "REQUEST ERROR: Request unauthorised, Please enter api key as the last paramater in url e.g: https://api.xxx.xxx/xxx/xxx&key=[YOUR KEY] \nThanks!"
    );
});

//Post message endpoint
app.post(`/api/contact&key=${KEY}`, (req, res) => {
  //Create new document
  //Try & catch for error handling
  try {
    const newContactItem = new dbElement({
      id: req.body.id,
      message: req.body.message,
    });
    //Save Item
    newContactItem.save().then(() => {
      res.status(201).send("Server: Data sent, no errors / problems.");
    });
  } catch (error) {
    res.status(500).send(`SERVER ERROR: ${error}, Please try again.`);
  }
});

//Listen / run server on port 8080
app.listen(PORT, () => {
  console.log(`Server now ready!\nnow running on port: ${PORT}`);
});
