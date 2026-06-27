import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    duration: {
      type: Number,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    thumbnail: String,
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const Course = mongoose.model("Course", courseSchema);
