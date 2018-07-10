const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const publisherSchema = new Schema({
     Country: String,
    Currency: String,
    publisher_name: String
},
{
    collection:'Publisher'
});

const Publisher= mongoose.model('Publisher', publisherSchema); 
module.exports =  Publisher