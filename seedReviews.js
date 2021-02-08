const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'CSV');
const fileNum = 10;
const ws = fs.createWriteStream(`${filePath}/shopreviews${fileNum}.csv`);
ws.on('error', (err) => {console.log('write error!', err)});
ws.write(' _id, avatar, name, date, rating, description, imageURL, reccommend, purchasedItem, shopImage', 'utf-8');
// Declare your columns name here, you can add more than two!
// const records = [' _id, avatar, name, date, rating, description, imageURL, reccommend, purchasedItem, shopImage'];
for (let i = 9000001; i <= 10000000; i += 1) {
  // Enter your record here
  const recordCount = 10000000;
  // const _id = Math.floor(Math.random() * 1001); for random num 0-1000
  const _id = i;
  for(let j = 1; j <= 10; j+=1){
  const avatar = `https://fecetsypictures.s3.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;
  const name = faker.name.firstName();
  const date = faker.date.past();
  const rating = faker.random.number({ min: 1, max: 5 });
  const description = faker.lorem.paragraph();
  const imageURL = `https://fecetsypictures.s3.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;
  const reccommend = faker.random.number({ min: 1, max: 500 });
  const purchasedItem = `${faker.commerce.productName()}`;
  const shopImage = `https://fecetsypictures.s3.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;
  // Format your record with template lit,   seperates it with comma
  const record = `${_id}, ${avatar}, ${name}, ${date}, ${rating}, ${description}, ${imageURL}, ${reccommend}, ${purchasedItem}, ${shopImage}`;

  ws.write(`${record}\n`, 'utf-8');
  if (i % (recordCount/100) === 0) {
    console.clear();
    console.log(`process: ${i / (recordCount/100)}%`);
  }
}

}
ws.end();
