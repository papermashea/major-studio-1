var orders = [ { "name" : "chain", "description" : "necklace chain", "status": "shipped"} , {"name": "pen", "description" : "ball pen", "status": "shipped"}, {"name": "book", "description" : "travel diary", "status": "delivered"},{"name": "brush", "description" : "paint brush", "status": "delivered"}];
console.log(orders); 


var orderInfo = orders.map( function(order) {
     var info = { "orderName": order.name,
                  "orderDesc": order.description
                 }
     return info;

});
console.log(orderInfo);