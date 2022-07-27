const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://hriday:Hriday1234@nodeexpressprojects.mrlff8j.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connceted to the db...");
  })
  .catch((err) => console.log(err));
