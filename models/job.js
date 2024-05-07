import mongoose, {Schema, models} from "mongoose";

const jobSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },  
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  userIds: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      }
    ],
    default: [],
  }
},{timestamp: true})

const Job = models.Job || mongoose.model("Job", jobSchema);
export default Job;