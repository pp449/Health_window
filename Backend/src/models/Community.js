import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const model = mongoose.model("Community", CommunitySchema);

export default model;
