db.createCollection('users');
db.users.insertOne(
  {
    id: 1,
    username: "Jean",
    password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou"
  }
);

db.createCollection('products');
db.products.insertMany([
  {
    title: "Product 1",
    image: "../img/d1.png",
    description: "Product description for product 1",
    price: 2.90
  },
  {
    title: "Product 2",
    image: "../img/d2.png",
    description: "Product description for product 2",
    price: 2.90
  },
  {
    title: "Product 3",
    image: "../img/d3.png",
    description: "Product description for product 3",
    price: 2.90
  }
]
);