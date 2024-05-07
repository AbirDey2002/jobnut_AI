import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  jobIds: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
      }
    ],
    default: [],
  },
  bio: {
    type: String,
    default: "",
  },
  x: {
    type: String,
    default: "",
  },
  site: {
    type: String,
    default: "",
  },
  profile: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: 18,
  },
  verified: {
    type: Boolean,
    default: false,
  }
},{timestamp: true})

const User = models.User || mongoose.model("User", userSchema);
export default User;