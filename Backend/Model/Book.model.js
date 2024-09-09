import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  Author: String,
  title: String,
  price: Number,
  category:String,
  image: String,
});

const book = mongoose.model("Book", bookSchema);
export default book;