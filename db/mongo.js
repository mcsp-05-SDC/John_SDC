const mongoose = require('mongoose');
const { Schema } = mongoose;

//schema for reviews
const ReviewsSchema = new Schema({
    NAME:  String, // String is shorthand for {type: String}
    ACCOUNT: String,
    RATING:   Number,
    COMMENT: String  
  });

  //model for out schema
const Reviews = mongoose.model('Reviews', ReviewsSchema);
//create for one instance or doc and insertMany for big batched



module.exports =Reviews;

