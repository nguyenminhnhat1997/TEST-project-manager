var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Tạo Schema
var ProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  listMember: [
    {
      nember: {
        type: Schema.Types.ObjectId,
        ref: "nembers"
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
