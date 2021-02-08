/* eslint-disable no-console */
const express = require('express');
const pool = require('../queries.js');

const { Review } = require('../database/index.js');

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', (req, res, next) => {
  console.log(`Now handling ${req.method} from ${req.path}`);
  next();
})

// app.get('/api/reviews/:id', (req, res) => {
//   console.log('Getting reviews.....');
//   Review.findById(req.params.id, (err, docs) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(docs);
//     }
//   })
// });

app.get('/api/reviews/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM sdc.shopreviews WHERE _id=${id};`;
  pool.query(query, (err, results) => {
    if(err){
      console.log(err)
    }else{
      console.log(results)
    }
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
