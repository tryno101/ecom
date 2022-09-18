const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const mongoose = require("mongoose");

// app
const app = require("./app");

const Database = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    })
    
    .then(() => console.log("MongoDb is Connected"))
    .catch((err) => console.log(err));
    // mongoose.setDefaultLanguage('de')
};
Database();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `App is running on port: ${process.env.PORT}... in ${process.env.NODE_ENV}`
  );
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
