//Importing packages
import mongoose from "mongoose";

//Database Schema
const dbShema = mongoose.Schema({
  dbId: String,
  dbName: String,
  dbEmail: String,
  dbPhone: String,
  dbMessage: String,
});

//Export Schema
export default mongoose.model("dbElement", dbShema);
