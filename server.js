const express = require("express");
require('dotenv').config();
const app = express();
const path = require("path");
const PORT = 3004;
const db = require("./db/queries");
const cors = require("cors");

var body = require('body-parser');

app.use(express.static(path.join(__dirname, "./frontend/dist")));
app.use(body.urlencoded({extended: false}));
app.use(body.json());
app.use(cors());
//for proxy to render the dist files
app.get('/itemreview', (req, res) => {
  res.sendFile(path.join(`${__dirname}/frontend/dist/bundle.js`))
});
//post for new product
app.post("/targets", (req, res)=>{
    let name= req.body.name;
   
    let account= req.body.account;
    let rating= req.body.rating;
    let comment= req.body.comment;


    db.query('INSERT into products(name,account, rating, comment VALUES($1,$2,$3,$4)',[name,account,rating,comment], (err, data)=>{
      if(err){
        console.log(err);
      }else{
        res.send('inserted new row')
      }
    })

})

//get specific product by name
app.get("/targets/:name", (req, res) => {
  // run your query here
  let id =req.params.name;
  console.log(id);
  db.query('SELECT * FROM products WHERE name=$1', [id], (err, data) => {
      if(err){
        console.log(err);
      } else {
        // console.log(data);
        res.send(data);
      }
  })
});

//delete product by name
app.delete('/targets/:name', function(req, res){
  var name= req.params.name;
  db.query('DELETE FROM products WHERE name= $1;',[name], function(err, data){
      if(err){
          console.log(err);
      }else{
      res.send(`great job john deleted ${name}`);
      }
      })             
      
})

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
