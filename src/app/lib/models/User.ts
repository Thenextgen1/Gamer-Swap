import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

// UserSchema.methods.matchPassword = async function (password: string) {
//   return await bcrypt.compare(password, this.password);
// };

export default mongoose.models.User || mongoose.model("User", UserSchema);
