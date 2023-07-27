const mongoose = require("mongoose");

const boilerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", boilerSchema);

module.exports = Item;
