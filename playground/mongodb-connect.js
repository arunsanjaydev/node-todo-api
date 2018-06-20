const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongoDB Server');
  }

  console.log('Connected Successfully to mongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert to todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });

  //Insert into users

  db.collection('Users').insertOne({
    name: 'Arun Sanjay',
    age: 32, 
    location: 'cuddalore'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert into user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});