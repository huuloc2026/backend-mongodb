// // ESM
// import { faker } from '@faker-js/faker';

// // CJS
const { faker } = require("@faker-js/faker");

const fs = require("node:fs");

const customers = Array.from({ length: 100 }, () => ({
  name: faker.internet.userName(),
  phone: faker.phone.number(),
  description: faker.lorem.sentence(5),
  email: faker.internet.email(),
  address: faker.address.streetAddress(true),
  city: faker.address.state(),
}));
const data = JSON.stringify(customers);
fs.writeFile("C:/Users/Huu Loc/Desktop/customer.txt", data, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Success");
  }
});
// console.log(JSON.stringify({ customer: customers }, null, 2));
