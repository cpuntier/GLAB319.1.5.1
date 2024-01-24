import { ObjectId } from "mongodb";
import mongoose from "mongoose";


const scoresSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});


const gradesSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  scores: {
    type: [scoresSchema],
    required: true,
  },
  class_id: {
    type: Number,
    required: true,
  },
  learner_id: {
    type: Number,
    required: true,
  },
});



// gradesSchema.statics.findByLearnerId = function () {
//     return this.find({ _id: new ObjectId("56d5f7eb604eb380b0d8d8fa") });
// }

export default mongoose.model("Grades", gradesSchema,"grades");