const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");
const adminSchema = new mongoose.Schema({
  adminname: String,
  password: String
});
// adminSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin", adminSchema);
