import mongoose, { Schema } from 'mongoose';

const trackSchema = new Schema(
  {
    name: String,
    artistName: String,
    albumName: String,
    from: Date,
    to: Date,
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

// Export Mongoose model
module.exports = mongoose.model('Track', trackSchema);
