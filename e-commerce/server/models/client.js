const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  username: String,
  PassWord: String,
});

module.exports = mongoose.model("Client", clientSchema);
