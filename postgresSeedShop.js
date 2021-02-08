const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/shop.csv`);
ws.on('error', (err) => {console.log('write error!', err)});
ws.write('_id', 'utf-8');

const records = ['_id'];
for (let i = 0; i <= 10000; i += 1) {

  const recordCount = 10000;
  const _id = i;

  const record = `${_id}`;

  ws.write(`${record}\n`, 'utf-8');
  if (i % (recordCount/100) === 0) {
    console.clear();
    console.log(`process: ${i / (recordCount/100)}%`);
  }
}
ws.end();
