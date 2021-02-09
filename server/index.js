/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const pool = require('../database/queries.js');

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// app.use('/', (req, res, next) => {
//   console.log(`Now handling ${req.method} from ${req.path}`);
//   next();
// })

app.get('/api/reviews/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM sdc.shopreviews WHERE _id=${id};`;
  pool.query(query, (err, results) => {
    if(err){
      res.send(err);
    }else{
      const qResult = {};
      qResult['_id']= id;
      qResult['total']=results.rows.length;
      qResult['average']= Math.floor(results.rows.length / 4);
      const reviewArr = [];

      for (i = 0; i< results.rows.length; i++){
        const current = results.rows[i];
        const { _id, avatar, name, date, rating, description, imageurl, reccommend, purchaseditem, shopimage } = current;
        let entry = {
          _id: _id,
          avatar: avatar,
          name: name,
          date: date,
          rating: rating,
          description: description,
          imageUrl: imageurl,
          recommended: reccommend,
          purchasedItem: purchaseditem,
          shopImage: shopimage
        }
        reviewArr.push(entry);
      }
      qResult['shopReviews'] = reviewArr;
      res.send(qResult);
    }
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
