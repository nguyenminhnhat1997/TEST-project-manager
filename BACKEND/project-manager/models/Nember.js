var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NemberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  project: [
    {
      name: {
        type: Schema.Types.ObjectId,
        ref: "profiles"
      }
    }
  ]
});
module.exports = NemberSchema = mongoose.model("nembers", NemberSchema);
