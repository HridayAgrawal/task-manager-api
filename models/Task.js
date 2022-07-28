const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  //whatever is there in schema
  //only that will be pushed to the database
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannot of more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
