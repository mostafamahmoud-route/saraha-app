import mongoose, { Schema } from "mongoose";

// schema
const userSchema = new Schema(
  {
    name: {
      type: String,
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
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  this.password = this.password + "12345";
  next();
});

userSchema.post("save", async function (doc, next) {
  console.log({ message: "User saved", data: doc });
});

// model
export const User = mongoose.model("User", userSchema);
