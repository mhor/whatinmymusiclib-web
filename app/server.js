/* eslint no-console: "off" */

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import mongoose from 'mongoose';

import Track from './models/track';

const app = new Express();
const server = new Server(app);

mongoose.connect('mongodb://mongo/whatinmymusiclib', {
  useMongoClient: true,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
const staticPath = path.join(__dirname, '../public/static');
app.use(Express.static(staticPath));
app.use('/', Express.static(staticPath));

app.get('/api/v1/tracks', (req, res) => {
  const status = 200;
  Track
    .find({})
    .exec((error, results) => { res.status(status).json(results); });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `);
});
