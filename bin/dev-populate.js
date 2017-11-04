import mongoose from 'mongoose';
import Track from '../src/models/track';

const tracks = [
    {
        name: 'trackname',
        artistName: 'artistname',
        albumName: 'albumName',
        from: new Date(),
        to: new Date(),
    }
];

mongoose.connect('mongodb://mongo/whatinmymusiclib', {
  useMongoClient: true,
});

tracks.map(data => {
  const track = new Track(data);
  track.save();
});
