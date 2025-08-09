import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required },
    _name: { type: String, required },
    _email: { type: String, required },
    _imageUrl: { type: String, required },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
