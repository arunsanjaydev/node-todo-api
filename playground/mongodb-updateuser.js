const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongoDb Server');
  }
  console.log('COnnected successfully to mongoDB Server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b267c6951f06f3710b37344')
  },{
    $set: {
      name: 'Abel Arokianathan'
    },
    $inc: {
      age: +1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});