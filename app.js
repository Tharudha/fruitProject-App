const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB");

const fruitSchema =  new mongoose.Schema({

  name: String,
  rating: Number,
  review: String

});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name : "apple",
  rating : 7,
  review: " Pretty solid fruit"
});

fruit.save();
