
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const schoolstudentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   student_name: String,
   student_email: String
})

const schoolstudentModel = mongoose.model('schoolstudent', schoolstudentSchema, 'schoolstudent');
export default schoolstudentModel;
