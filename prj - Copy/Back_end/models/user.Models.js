import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    phno: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      bio: { type: String, default: "" },
      skills: { type: String },
      resume: { type: String }, // URL to resume file
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profileImg: { type: String, default: "" },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;