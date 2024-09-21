const mongoose = require("mongoose");

const uri =
"mongodb+srv://ahadansari790:1234@cluster0.on7kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error Connecting with MongoDB", err));