const express = require('express');
const fs = require('fs');
const compose = require('./server/compose');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/assets', express.static(path.join(__dirname, '/client/assets')));

app.get('/', (req, res) => {
  compose('buncombe', 'home', (result) => {
    res.send(result);
  });
});

app.get('/:jurisdiction/:topic', (req, res) => {
  compose(req.params.jurisdiction, req.params.topic, (result) => {
    // Result is an object of the form:
    // {
    //   config: {Merge of all the config files} ,
    //   common: {All the common topic info},
    //   jurisdiction: {All the topic info for the specified jurisdiction (county)}
    // }
    res.send(result);
  });
});

// this is from the original example - delete when the new admin interface is done.
app.get('/api/food', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }

  res.json({title: "NC Reentry Resources Hub"});
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
