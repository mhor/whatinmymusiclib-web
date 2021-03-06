/* eslint no-console: "off" */

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import mongoose from 'mongoose';

import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { App } from './components/App';

import Track from './models/track';

const app = new Express();
const server = new Server(app);

mongoose.connect('mongodb://mongo/whatinmymusiclib', {
  useMongoClient: true,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  let markup = '';
  let status = 200;

  if (process.env.UNIVERSAL) {
    const context = {};
    markup = renderToString(
      <Router location={req.url} context={context}>
        <App />
      </Router>,
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.is404) {
      status = 404;
    }
  }

  return res.status(status).render('index', { markup });
});

app.get('/api/v1/tracks', (req, res) => {
  const status = 200;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 50;
  const search = req.query.search ? req.query.search : null;

  let query = {};
  if (search) {
    query = {
      $or: [
        { name: new RegExp(`${search}`, 'i') },
        { artistName: new RegExp(`${search}`, 'i') },
        { albumName: new RegExp(`${search}`, 'i') },
      ],
    };
  }

  Track.paginate(
    query,
    { page, limit },
    (err, result) => {
      res.status(status).json(result.docs);
    },
  );
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
