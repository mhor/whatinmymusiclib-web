import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

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
)
.plugin(mongoosePaginate)
;

// Export Mongoose model
module.exports = mongoose.model('Track', trackSchema);
