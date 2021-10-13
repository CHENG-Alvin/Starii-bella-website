//Importing packages
import express from "express";
import mongoose from "mongoose";
import dbElement from "./schema.js";
import { URI, KEY } from "./vars.js";

//Express setup
const app = express();

//MongoDB Connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Port number variable
const PORT = "8080";

//Json middleware
app.use(express.json());

//Home get endpoint
app.get("/", (req, res) => {
  res
    .status(401)
    .send(
      "REQUEST ERROR: Request unauthorised, Please enter api key as the last paramater in url e.g: https://api.xxx.xxx/xxx/xxx&key=[YOUR KEY] \nThanks!"
    );
});

//Get all data endpoint
app.get(`/api/partner/get?key=${KEY}`, (req, res) => {
  //Find all elements
  dbElement
    .find()
    .exec()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(`SERVER ERROR: ${err}`);
      console.log(err);
    });
});

//Post message endpoint
app.post(`/api/partner/post?key=${KEY}`, (req, res) => {
  //Create new document
  const newItem = new dbElement({
    dbId: req.body.id,
    dbName: req.body.name,
    dbEmail: req.body.email,
    dbPhone: req.body.phone,
    dbMessage: req.body.message,
  });

  //Save Item
  newItem
    .save()
    .then(() => {
      res.status(201).send("Server: Data sent, no errors / problems.");
    })
    .catch((err) => {
      res.status(500).send(`SERVER ERROR: ${err}`);
      console.log(err);
    });
});

//404 page
const notFound = (req, res, next) => {
  res
    .status(404)
    .send(
      "REQUEST ERROR: Sorry,\nThe page that you are trying to access is not found.Please enter a valid URL."
    );
};
app.use(notFound);

//Listen / run server on port 8080
app.listen(PORT, () => {
  console.log(`Server now ready!\nnow running on port: ${PORT}`);
});
