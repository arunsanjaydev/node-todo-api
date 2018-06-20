const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Cannot connect to mongoDB Server');
  }
  console.log('Connected Successfully');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b269b4598c6122067489896')
  },{
    $set: {
      completed: false
    }
  }, {
    returnOrginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});