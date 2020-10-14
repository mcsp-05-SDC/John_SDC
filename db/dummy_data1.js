const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const faker = require('faker');
// let product= faker.commerce.productName();
// let account= faker.name.firstName();
// let comment= faker.lorem.sentence();
//generates random 0-9 a-z value 10 in length.add a plus and repeat code for more
// let randomString= Math.random().toString(36).substring(2, 13)
// //generates random number from 0-5
// let randomNum= Math.floor(Math.random() * 6);  


const csvWriter = createCsvWriter({
  path: 'data.csv',
  header: [
    'name', 'account', 'rating', 'comment'
  ]
});

const csvWriter1 = createCsvWriter({
  path: 'data1.csv',
  header: [
    'name', 'account', 'rating', 'comment'
  ]
});

const data = [];

const data1=[];

//write a loop that will create 1000 record
for(var i=0;i<5000000;i++){
    //need to push into data as an [`${randomString}, ${randomString}, ${randomNum}, ${randomString}`]
    
    let entrie=[faker.commerce.productName(),faker.name.firstName(), Math.floor(Math.random() * 6), faker.lorem.sentence()];
    data.push(entrie);
}
for(var i=0;i<5000000;i++){
  //need to push into data as an [`${randomString}, ${randomString}, ${randomNum}, ${randomString}`]
  let entrie=[faker.commerce.productName(),faker.name.firstName(), Math.floor(Math.random() * 6), faker.lorem.sentence()];
  data1.push(entrie);
}

csvWriter.writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));

csvWriter1.writeRecords(data1)
  .then(()=> console.log('The CSV file was written successfully'));