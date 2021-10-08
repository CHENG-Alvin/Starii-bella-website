//Importing packages
import express from "express";

//Express setup
const app = express();

//Port variable
const PORT = "8080";

//Home page get requests end point
app.get("/", (req, res) => {
  //Send error message
  res.status(403).send("Please enter the api key as a paramater in the link.");
  console.error("Server error. 403 forbidden");
});
app.post("/partner_requests&key=A1s2d3f4.8888.5165",(req,res)=>{
	res.status(200)
})


  app.listen(PORT, () => {
    console.log(`Server online and listening on port ${PORT}`);
  });
//! Notes:
//! This backend code is still not complete.

