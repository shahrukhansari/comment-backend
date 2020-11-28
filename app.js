const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//all importing file congiguration
const userRoute = require("./routes/user");

const PORT = 9000;
const app = express();

//incoming data parser ith body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH,OPTIONS"
  );
  next();
});

//datbase configuration
mongoose
  .connect(
    "mongodb+srv://shah:shah16@cluster0.pb8lk.mongodb.net/comment-app?retryWrites=true",
    {
      useNewUrlParser: true,
     useUnifiedTopology: true 
    }
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//definging end points
 app.use("/api", userRoute);


app.use((req, res)=>{
  res.send("<h1>it worked</h1>")
})

app.listen(PORT, () => {
  console.log(`server is listing port: ${PORT}`);
});
