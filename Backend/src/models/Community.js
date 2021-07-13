import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  content: {
    type: String,
    required: "Content is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: "Category is required",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Creator is required",
  },
});

const model = mongoose.model("Community", CommunitySchema);

export default model;
