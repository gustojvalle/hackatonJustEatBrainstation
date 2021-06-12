const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const order = (restaurant, status) => ({
  id: uuidv4(),
  restaurant: restaurant,
  price: Math.floor(Math.random() * 100),
  status,
});

setInterval(() => {
  const queue = JSON.parse(fs.readFileSync("./data/queue.json"));

  const randomOrder = order("chinese takeaway", "waiting");
  queue.push(randomOrder);
  fs.writeFileSync("./data/queue.json", JSON.stringify(queue));
  console.log(randomOrder);
}, 5000);
