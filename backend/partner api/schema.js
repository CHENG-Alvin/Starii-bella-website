//Importing packages
import mongoose from "mongoose";

//Database Schema
const dbShema = mongoose.Schema({
  id: String,
  message: String,
});

//Export Schema
export default mongoose.model("shema", dbShema);
