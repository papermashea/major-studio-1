var messages = [{userId: 2, content: "Salam"}, {userId: 5, content: "Hello"},{userId: 4, content: "Moi"}];
var users = [{id: 2, name: "Grace"}, {id: 4, name: "Janetta"},{id: 5, name: "Sara"}];

var messagesWithUserNames = messages.map((msg)=> {
  var haveEqualId = (user) => user.id === msg.userId
  var userWithEqualId= users.find(haveEqualId)
  return Object.assign({}, msg, userWithEqualId)
})
console.log(messagesWithUserNames)