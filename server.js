const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect to Mongo daemon
mongoose
  .connect( `mongodb://${process.env.DBHOST || 'localhost'}:27017/Assignment`, 
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// DB schema
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

People = mongoose.model('People', peopleSchema);

app.get('/hello', function (req, res) {
  const name = req.query.name || req.params.name;
  if(name){
    const newPerson = new People({
      name: name
    });
    newPerson.save()
    .then(() => res.send(`Hello ${ name }!`))
    .catch((err)=> res.send(`Error ${err}`))
  }else{
  res.send("Hello Stranger!")
}
    
})
 

module.exports = app


