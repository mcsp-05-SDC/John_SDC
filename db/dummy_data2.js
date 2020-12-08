const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
 


const csvWriter = createCsvWriter({
  path: 'atlas.csv',
  header: [
    {id:'name', title:'NAME'},
    {id:'account', title:'ACCOUNT'},
    {id:'rating', title:'RATING'},
    {id:'comment', title:'COMMENT'}
    
  ]
});

// const csvWriter1 = createCsvWriter({
//   path: 'mongodata2.csv',
//   header: [
//     {id:'name', title:'NAME'},
//     {id:'account', title:'ACCOUNT'},
//     {id:'rating', title:'RATING'},
//     {id:'comment', title:'COMMENT'}
//   ]
// });

const data = [];

// const data1=[];

//write a loop that will create 1000 record
for(var i=0;i<2000000;i++){
    //need to push into data as an [`${randomString}, ${randomString}, ${randomNum}, ${randomString}`]
    
    let entrie={name: faker.commerce.productName(), account: faker.name.firstName(), rating: Math.floor(Math.random() * 6), comment: faker.lorem.sentence()};
    data.push(entrie);
}
// for(var i=0;i<5000000;i++){
//   //need to push into data as an [`${randomString}, ${randomString}, ${randomNum}, ${randomString}`]
//   let entrie={name: faker.commerce.productName(), account: faker.name.firstName(), rating: Math.floor(Math.random() * 6), comment: faker.lorem.sentence()};
//   data1.push(entrie);
// }

csvWriter.writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));

// csvWriter1.writeRecords(data1)
//   .then(()=> console.log('The CSV file was written successfully'));