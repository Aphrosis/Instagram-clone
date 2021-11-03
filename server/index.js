const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const {cloudinary }  = require('./cloudinary');
const cors = require('cors');

app.use(express.json({limit : "50mb"}));
app.use(express.urlencoded({limit : "50mb" , extended : true}));
app.use(cors())
app.get("/", (req, res) => {
  res.send("hello")
})
app.post("/upload",  async (req, res) => {
 const img = req.body.data
const uploaded = await cloudinary.uploader.upload(img, function(error, result) { console.log("success") });
  res.send("success")
})
app.listen(port,() => {
  console.log("connected");
})