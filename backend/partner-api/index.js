//Importing packages
import express from "express";
import mongoose from "mongoose";
import message from "./schema.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

//Env config
dotenv.config();

//Express setup
const app = express();

//MongoDB Connection
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Variables
const PORT = "8080";
let databaseOk = false;
let emailOk = false;

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
app.get(`/api/partner/get?key=${process.env.KEY}`, (req, res) => {
  //Find all elements
  message
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
app.post(`/api/partner/post`, (req, res) => {
  //Create new document
  const newItem = new message({
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
      databaseOk = true;
    })
    .catch((err) => {
      res.status(500).send(`SERVER ERROR: ${err}`);
      console.log(err);
    });

  //Send email
  //Transporter
  let transporter = nodemailer.createTransport({
    service: req.body.service,
    auth: {
      user: "ACHET@SCHOOLS.VIC.EDU.AU",
      pass: "Skunk.7859",
    },
  });

  //Mail options
  let mailOptions = {
    from: "ACHET@SCHOOLS.VIC.EDU.AU",
    to: "chengalvin333@gmail.com",
    subject: `New partner request from ${req.body.name}.`,
    text: `${req.body.name} has sent you a partner request, \nHe / she says: "${req.body.message}" \nMore infomation: \nEmail: ${req.body.email} \nPhone number: ${req.body.phone} \nTo respond please contact the person with the provied infomation.`,
  };

  //Send mail
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log(err);
    else emailOk = true;
  });

  //Check ok status
  if (emailOk && databaseOk)
    res.status(201).send("Server: Data sent, no errors / problems.");

  //Reset status
  databaseOk = false;
  emailOk = false;
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
