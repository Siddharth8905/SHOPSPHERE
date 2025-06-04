const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const ClientModel = require("./models/client");
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/User")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

// Routes
app.post("/Login", async (req, res) => {
  const { username, PassWord } = req.body;
  try {
    const user = await ClientModel.findOne({ username});
    if (!user) {
      return res.json({ success: false, message: "No record found" });
    }
    if(user.PassWord===PassWord){
    return res.json({ success: true, Name: user.username });}
    else{
        return res.json({ success: false, message: "Incorrect Password" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/Signup", async (req, res) => {
  const { username, PassWord } = req.body;
  
  try {
    
    const user = await ClientModel.findOne({ username });
    
    if (user) {
      return res.json({ success: false, message: "Already registered" });
    }
    console.log(user);
    const client = await ClientModel.create({
      username,
      PassWord,
    });
    
    res.json({ success: true, client });
  } catch (err) {
    console.log("Error during registration:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to register user" });
  }
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});