const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongoDB Server');
  }
  console.log('Connected Successfully to mongoDB Server');

  //deleteMany
  // db.collection('todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  db.collection('todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });
});