const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const port = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      "%c Auth ",
      "color: white; background-color: #2274A5",
      "Database Connection Successfull"
    )
  )
  .catch((err) => console.error("Failed to Connect Database", err));

app.use(express.json()); //to enable express to accept json request body

app.use("/api/auth", authRoute); //routes to particular module for particular api call
app.use("/api/users", userRoute); //routes to particular module for particular api call

app.listen(port, () => {
  console.log("Backend Server is UP!! ");
});
