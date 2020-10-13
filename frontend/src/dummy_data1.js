const createCsvWriter = require('csv-writer').createArrayCsvWriter;
//generates random 0-9 a-z value 10 in length.add a plus and repeat code for more
let randomString= Math.random().toString(36).substring(2, 13)
//generates random number from 0-5
let randomNum= Math.floor(Math.random() * 6);  


const csvWriter = createCsvWriter({
  path: 'data.csv',
  header: [
    'name', 'account', 'rating', 'comment'
  ]
});



const data = [
  
];



//write a loop that will create 1000 record
for(var i=1;i<1000;i++){
    //need to push into data as an [`${randomString}, ${randomString}, ${randomNum}, ${randomString}`]
    let entrie=[Math.random().toString(36).substring(2, 13),Math.random().toString(36).substring(2, 13), Math.floor(Math.random() * 6), Math.random().toString(36).substring(2, 13)];
    data.push(entrie);
}

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));