const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/shopreviews.csv`);
ws.on('error', (err) => {console.log('write error!', err)});
ws.write(' _id, avatar, name, date, rating, description, imageURL, reccommend, purchasedItem, shopImage', 'utf-8');
// Declare your columns name here, you can add more than two!
// const records = [' _id, avatar, name, date, rating, description, imageURL, reccommend, purchasedItem, shopImage'];
for (let i = 1; i <= 1000000000; i += 1) {
  // Enter your record here
  const numOfRecs = 1000000000;
  const _id = Math.floor(Math.random() * 1001);
  const avatar = `https://fecetsypictures.s3.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;
  const name = faker.name.firstName();
  const date = faker.date.past();
  const rating = faker.random.number({ min: 1, max: 5 });
  const description = faker.lorem.paragraph();
  const imageURL = `https://fecetsypictures.s3.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;
  const reccommend = faker.random.number({ min: 1, max: 500 });
  const purchasedItem = `${faker.random.words(7)}...`;
  const shopImage = `https://fecetsypictures.s3.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;
  // Format your record with template lit,   seperates it with comma
  const record = `${_id}, ${avatar}, ${name}, ${date}, ${rating}, ${description}, ${imageURL}, ${reccommend}, ${purchasedItem}, ${shopImage}`;
  // records.push(record);
  ws.write(`${record}\n`, 'utf-8');
  if (i % (recordCount/100) === 0) {
    console.clear();
    console.log(`process: ${i / (recordCount/100)}%`);
  }

}
ws.end();
// const filePath = path.join(__dirname, 'CSV');
// fs.writeFile(`${filePath}/shopreviews.csv`, records.join('\n'))
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((err) => {
//     console.error(err);
//   });