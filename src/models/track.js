import mongoose, { Schema } from 'mongoose';

const trackSchema = new Schema({
  name: String,
  artistName: String,
  albumName: String,
  from: Date,
  to: Date,
});

// Export Mongoose model
module.exports = mongoose.model('Track', trackSchema);
