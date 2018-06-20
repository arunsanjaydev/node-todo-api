const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongoDb Server');
  }
  console.log('Successfully Connected to mongoDB Server');
  db.collection('Todos').findOneAndUpdate({
    _id: '5b29fca498c612206748bfaf'
  }, {
    $set: {
      completed: true
    }
  }, {
    retrunOriginal: false
  }).then((result) => {
    console.log(result);
  })
  
});