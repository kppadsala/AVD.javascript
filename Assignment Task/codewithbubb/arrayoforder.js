const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
]

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

// let orderDEliverd = orders.filter((order) => {
//     return order.customerId === '234' && order.delivered;
// })
// console.log("orderDEliverd==>", orderDEliverd)

// 2) Create a new property on each order with the total price of items ordered.
// let price=orders.forEach((o) => {
//   o.total = 0;
//   o.items.forEach((i) => {
//     o.total += i.price;
//   });
// });
// console.log("  price==>", price);


// 3) Have all the orders been delivered?
let allDelivered = orders.every((allorder) => {
    return allorder.delivered
})
console.log("allDelivered=>", allDelivered);  //allDelivered => false;

// 4) Has the customer with ID '123' made any orders?
