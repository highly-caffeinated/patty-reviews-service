const fs = require('fs').promises;
const path = require('path');
const faker = require('faker');
// Declare your columns name here, you can add more than two!
const records = ['itemid, description'];
for (let i = 1; i <= 1000; i += 1) {
  // Enter your record here
  const desc = faker.commerce.productName();
  // Format your record with template lit,   seperates it with comma
  const record = `${i}, ${desc}`;
  records.push(record);
}
const filePath = path.join(__dirname, 'CSV');
fs.writeFile(`${filePath}/items.csv`, records.join('\n'))
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.error(err);
  });