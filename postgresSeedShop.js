const fs = require('fs').promises;
const path = require('path');
const faker = require('faker');
// Declare your columns name here, you can add more than two!
const records = ['_id'];
for (let i = 1; i <= 1000000000; i += 1) {
  // Enter your record here
  // const desc = faker.commerce.productName();
  const _id = i;
  // const total = 5;
  // const average = i + 5;
  // Format your record with template lit,   seperates it with comma
  const record = `${_id}`;
  records.push(record);
}
const filePath = path.join(__dirname, 'CSV');
fs.writeFile(`${filePath}/shop.csv`, records.join('\n'))
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.error(err);
  });