const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: String, required: true },
    imgUrl: { type: String, default: "" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Feed", FeedSchema);
