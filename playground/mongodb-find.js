const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to open mongoDB Server');
  }
  console.log('Connected to mongoDb Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b269b4598c6122067489896')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) =>{
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log(' Unable to fetch todos', err);
  });
  // db.close();
});