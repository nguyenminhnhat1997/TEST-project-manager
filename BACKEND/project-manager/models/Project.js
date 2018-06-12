var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Tạo Schema
var ProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dec: {
    type: String
  },
  listNember: [
    {
      nember: {
        type: String
      }
    }
  ]
});

module.exports = Profile = mongoose.model("projects", ProfileSchema);
