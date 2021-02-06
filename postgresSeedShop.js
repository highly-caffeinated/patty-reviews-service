const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/shop.csv`);
ws.on('error', (err) => {console.log('write error!', err)});
ws.write('_id', 'utf-8');
// Declare your columns name here, you can add more than two!
const records = ['_id'];
for (let i = 1; i <= 10000; i += 1) {
  // Enter your record here
  // const desc = faker.commerce.productName();
  const recordCount = 10000;
  const _id = i;
  // const total = 5;
  // const average = i + 5;
  // Format your record with template lit,   seperates it with comma
  const record = `${_id}`;
  // records.push(record);
  ws.write(`${record}\n`, 'utf-8');
  if (i % (recordCount/100) === 0) {
    console.clear();
    console.log(`process: ${i / (recordCount/100)}%`);
  }
}
ws.end();
// const filePath = path.join(__dirname, 'CSV');
// fs.writeFile(`${filePath}/shop.csv`, records.join('\n'))
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((err) => {
//     console.error(err);
//   });