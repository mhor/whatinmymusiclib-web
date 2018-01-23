import mongoose from 'mongoose';
import Track from '../src/models/track';

import tracks from '../data/tracks';

mongoose.connect('mongodb://mongo/whatinmymusiclib', {
  useMongoClient: true,
});

Track.remove({}, (err) => {
  console.log('collection removed');
});

tracks.map((data) => {
  const track = new Track(data);
  track.save();
  console.log(data);
});
