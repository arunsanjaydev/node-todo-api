const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

var id = '5b2792a9a2497f201efc2edf  ';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos: ', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('todo by id ', todo);
// })

if(!ObjectId.isValid(id)) {
 return  console.log('Not a Valid Id');
}
User.find({
  _id: id
}).then((users) => {
  console.log('Users ', users);
});

User.findOne({
  _id: id
}).then((user) => {
  console.log('User ', user);
});

User.findById(id).then((user) => {
  console.log('User by id ', user);
})