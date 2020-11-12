const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connection established!"))
  .catch((err) => console.log(err.message));

const client = mongoose.connection.on("err", (err) => console.log(err.message));

module.exports = client;
