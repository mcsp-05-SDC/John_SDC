const express = require("express");
const mongoose = require('mongoose');
const Reviews = require("./db/mongo");
const path = require("path");
const PORT = 3004;
mongoose.connect("mongodb://localhost/reviews", { useNewUrlParser: true });


const app = express();
//parse express body might replace with body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file
app.use(express.static("public"));
//get finds one match based off of name entered
app.get("/targets/:name", function(req, res) {
    var name = req.params.name;
    console.log(name);
    Reviews.findOne({NAME: new RegExp(name, 'i')})
    .then(function(dbReviews){
        console.log(dbReviews);
        res.json(dbReviews);
    })
    .catch(function(err){
        res.json(err);
    })
  });


//post new entry into reviews
app.post("/targets", (req,res)=>{
    console.log("in post request");
    Reviews.create(req.body)
    .then(function(dbReviews){
        res.json(dbReviews);
    })
    .catch(function(err){
        res.json(err);
    })
})

//for proxy to render the dist files
// app.get('/itemreview', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/frontend/dist/bundle.js`))
//   });

//get specific product by name

  
  app.listen(PORT, () => {
    console.log(`server is running and listening on port ${PORT}`);
  });




