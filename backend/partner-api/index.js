//Importing packages
import express from "express";
import mongoose from "mongoose";
import message from "./schema.js";
import nodeMailer from "nodemailer";
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
      res.status(201).send("Server: Data sent, no errors / problems.");
    })
    .catch((err) => {
      res.status(500).send(`SERVER ERROR: ${err}`);
      console.log(err);
    });

  //Send email
  //Transporter
  const transporter = nodeMailer.createTransport({
    auth: {
      user: "ACHET@schools.vic.edu.au",
      pass: "Skunk.7859",
    },
  });

  //Mail options
  const mailOptions = {
    from: "ACHET@schools.vic.edu.au",
    to: req.body.email,
    subject: `New colab request from ${req.body.name}.`,
    text: `${req.body.name} has sent you a partner request, \nHe / she says: "${req.body.message}" \nMore infomation: \nEmail: ${req.body.email} \nPhone number: ${req.body.phone} \nTo respond please contact the person with the provied infomation.`,
  };

  //Send mail
  transporter.sendMail(mailOptions, (err, data) => {
    if (err)
      res
        .status(500)
        .send(
          "SERVER ERROR: An error occurred while trying to send the email, please try again."
        );
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
