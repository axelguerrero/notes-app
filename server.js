const express = require("express");
const app = express();
app.set("view engine", "ejs");
//Routes
app.use("/", require("./routes/login")); //Listen Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("Server is running on port" + PORT));
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
mongoose.set("strictQuery", true);
// dotenv.config();

// const passport = require("passport");
// const { loginCheck } = require("./auth/passport");
// loginCheck(passport);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// const PORT = process.env.PORT;

const connectDB = async () => {
  try {
    const corn = await mongoose.connect(
      "mongodb+srv://Sylvie:solongoma78@cluster0.vpiui4p.mongodb.net/notes_app?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
        // useCreateIndex: true
      }
    );

    console.log(`MongoDB connected: ${corn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

//BodyParsing;
app.use(express.urlencoded({ extended: false }));

connectDB();
