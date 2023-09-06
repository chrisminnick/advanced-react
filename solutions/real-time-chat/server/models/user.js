import mongoose from 'mongoose';

// Creating the user schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  displayName: { type: String, required: false },
});
const userModel = mongoose.model('User', userSchema);

export default userModel;
